import { useState } from "react";
import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";
import { login } from "../api/auth";

const LoginPage = () => {
  // state to handle or can say store/cache the value at page level
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });

  // if any change in input boxes thsi hook will detect
  const onChange = (event) => {
    setLoginData((oldData) => ({
      ...oldData,
      [event.target.name]: event.target.value,
    }));
  };

  // submit functionlity
  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await login({
        userName: loginData.username,
        password: loginData.password,
      });
      alert("login success");
    } catch (error) {
      alert(
        `Unsuccessful Attempt!! \n${
          error?.response?.data?.message || "Something Went Wrong"
        }`
      );
    }
  };



  return (
    <div className="min-h-screen flex">
      {/* Left side: 55% */}
      <div className="w-[55%] h-screen">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="w-[45%] bg-gray-100 flex items-center justify-center">
        <form
          onSubmit={onSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Account Login
          </h2>
          <FormInput
            type="text"
            name="username"
            placeholder="Username"
            value={loginData.username}
            onChange={onChange}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="Password"
            value={loginData.password}
            onChange={onChange}
          />
          <FormButton>Login</FormButton>
          <div className="flex justify-between text-sm text-blue-600 underline mt-2">
            <a href="/forgot-password">Forgot password?</a>
            <a href="/register">Register User</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
