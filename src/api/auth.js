import axiosInstance from "./axiosInstance";

const registerUser = async (userData) => {
  const response = await axiosInstance.post("/auth/usr/register", userData);
  return response.data;
};

export default registerUser;
