import { axiosInstance } from "./Axios";

export const bookSlot = async (data) =>
  await axiosInstance.post("/admin/book", data);

export const deleteSlot = async (id) =>
  await axiosInstance.delete(`/admin/delete/${id}`);

export const fetchDetails = async (id) =>
  await axiosInstance.get(`/admin/booking/${id}`);

export const fetchUsers = async (name) =>
  await axiosInstance.get("/admin/users", { params: { name } });

export const fetchUser = async (id) =>
  await axiosInstance.get("/admin/user", { params: { id } });
