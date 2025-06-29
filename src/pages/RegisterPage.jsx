import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useState } from "react";
import { registerUser } from "../api/auth";

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // console.log(formData.username);
  // console.log(process.env.REACT_APP_AUTH_API_BASE_URL)

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Password do not match!");
      return;
    }

    try {
      const response = await registerUser({
        userName: formData.username,
        password: formData.password,
      });

      alert("Registration Success");
    } catch (error) {
      console.log(error);
      alert(
        `All Registration Fields are Mandatory! \n${
          error?.response?.data?.message || "Something went wrong!"
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

      {/* Right side: 45% */}
      <div className="w-[45%] bg-gray-100 flex items-center justify-center">
        <form
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4"
        >
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <FormInput
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
            placeholder="Username"
          />
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="Password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChange}
            placeholder="Confirm Password"
          />
          <FormButton>Register</FormButton>
          <div className="flex justify-between text-sm mt-2">
            <span>
              Already a User?{" "}
              <a className="text-blue-600 underline" href="/login">
                Login
              </a>
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
