import { createContext, useContext, useEffect, useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { v4 as uuidv4 } from "uuid";
import { getAllPosts } from "../services/PostServices";
var rn = require("random-number");

var randomNumber = {
  min: 0,
  max: 1000,
  integer: true,
};

export const AppContext = createContext();

export function AppProvider({ children }) {
  const {
    state: { token, user },
  } = useContext(AuthContext);

  const setBooksmarks = (state, action) => {
    const myBookmarks = state.posts.filter(({ _id }) =>
      action.payload.includes(_id)
    );

    return {
      ...state,
      bookmarks: myBookmarks,
    };
  };

  const setLikes = (state) => {
    const myLikes = state.posts.filter(({ likes: { likedBy } }) =>
      likedBy.find(({ _id }) => _id === user._id)
    );
    return {
      ...state,
      liked: myLikes,
    };
  };

  const reducerFn = (state, action) => {
    switch (action.type) {
      case "setPosts":
        return {
          ...state,
          posts: action.payload,
        };
      case "setBookmarks":
        return setBooksmarks(state, action);
      case "setLikes":
        return setLikes(state);
      case "setTrending":
        return {
          ...state,
          trending: action.payload,
        };
      case "blueTick":
        return {
          ...state,
          isVerified: true,
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
    isVerified: false,
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  // mockBee Backend Data

  const getData = async () => {
    try {
      const posts = await getAllPosts();
      dispatch({ type: "setPosts", payload: posts });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    if (!token) {
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
      const articlesDB = articles.slice(0, 50).map((a) => ({
        ...a,
        _id: uuidv4(),
        views: rn(randomNumber),
      }));
      dispatch({ type: "setTrending", payload: articlesDB });
    } catch (e) {
      console.log("Error: ", e);
    }
  };

  useEffect(() => {
    if (token && !state.trending.length) {
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
