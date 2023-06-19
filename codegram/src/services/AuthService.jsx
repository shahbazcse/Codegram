import axios from "axios";

export const loginUser = async (loginFormData) => {
  let session = { user: {}, token: "", error: "" };
  try {
    const response = await axios.post("/api/auth/login", {
      username: loginFormData.username,
      password: loginFormData.password,
    });
    session = {
      ...session,
      user: response.data.foundUser,
      token: response.data.encodedToken,
    };
  } catch (e) {
    session = { ...session, error: e.response.data.errors[0] };
  }
  return session;
};

export const signupUser = (formData) => {
  axios.post("/api/auth/signup", formData);
};
