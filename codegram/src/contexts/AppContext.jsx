import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "setPosts":
        return {
          ...state,
          posts: action.payload,
        };
      case "setTrending":
        return {
          ...state,
          trending: action.payload,
        };

      default:
        return state;
    }
  };

  const initialState = {
    posts: [],
    bookmarks: [],
    liked: [],
    trending: [],
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  // mockBee Backend Data

  const getData = async () => {
    try {
      const response = await fetch("/api/posts");
      const { posts } = await response.json();
      dispatch({ type: "setPosts", payload: posts });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    if (isLoggedIn && !state.posts.length) {
      getData();
    }
  });

  // External API Data

  const getExternalAPIData = async () => {
    try {
      const top_headlines_api =
        "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json";

      const res = await fetch(top_headlines_api);
      const { articles } = await res.json();
      console.log(articles.slice(0, 10));
      dispatch({ type: "setTrending", payload: articles.slice(0, 10) });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    if (isLoggedIn && !state.trending.length) {
      const timer = setTimeout(() => {
        getExternalAPIData();
      }, 500);
      return () => clearTimeout(timer);
    }
  });

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
