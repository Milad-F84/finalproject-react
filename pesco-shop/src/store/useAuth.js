import { create } from "zustand";

const useAuth = create((set) => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");

  return {
    user: storedUser || null,
    token: storedToken || null,
    isLoggedIn: !!storedToken,

    login: (userData, token) => {
      localStorage.setItem("user", JSON.stringify(userData));
      localStorage.setItem("token", token);
      set({
        user: userData,
        token: token,
        isLoggedIn: true,
      });
    },

    logout: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      set({
        user: null,
        token: null,
        isLoggedIn: false,
      });
    },
  };
});

export default useAuth;