import { createContext, useEffect, useReducer } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const reducerFn = (state, action) => {
    switch (action.type) {
      case "setToken":
        return {
          ...state,
          token: action.payload,
        };
      case "setUser":
        return {
          ...state,
          user: action.payload,
        };
      case "setError":
        return {
          ...state,
          error: action.payload,
        };
      case "setLoginForm":
        return {
          ...state,
          loginFormData: action.payload,
        };
      case "setSignupForm":
        return {
          ...state,
          signupFormData: action.payload,
        };
      default:
        return state;
    }
  };

  const initialState = {
    token: null,
    user: null,
    error: null,
    loginFormData: { username: "", password: "" },
    signupFormData: {},
  };

  const [state, dispatch] = useReducer(reducerFn, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
