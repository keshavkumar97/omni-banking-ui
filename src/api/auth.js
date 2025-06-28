import axiosInstance from "./axiosInstance";

export const registerUser = async (userData) => {
  const response = await axiosInstance.post("/auth/usr/register", userData);
  return response.data;
};

export const login = async (userData) => {
  const response = await axiosInstance.post("/auth/usr/login", userData);
  return response.data;    
};
