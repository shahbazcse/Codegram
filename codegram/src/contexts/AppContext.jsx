import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";

export const AppContext = createContext();

export function AppProvider({ children }) {
  const { isLoggedIn } = useContext(AuthContext);

  const sortPosts = (state, action) => {
    const byLatest = action.payload === "latest";
    const modified = byLatest
      ? state.posts.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        )
      : state.posts.sort((a, b) => b.likes.likeCount - a.likes.likeCount);
    return {
      ...state,
      posts: modified,
    };
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "setPosts":
        return {
          ...state,
          posts: action.payload,
        };
      case "sortPosts":
        return sortPosts(state, action);

      default:
        return state;
    }
  };

  const initialState = {
    posts: [],
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

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

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}
