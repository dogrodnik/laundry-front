import { axiosInstance } from "./Axios";

export const signIn = async (name, password) => {
  return axiosInstance.post("/user/login", { name, password });
};

export const signUp = async (name, password, email) => {
  return axiosInstance.post("/user/create", { name, email, password });
};

export const deleteAccount = async () => {
  return axiosInstance.delete(`/user`);
};

export const passwordChange = async (password, newPassword) => {
  return axiosInstance.post("/change-password", { password, newPassword });
};
