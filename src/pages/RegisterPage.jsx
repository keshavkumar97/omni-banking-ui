import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
import { useState } from "react";

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

  console.log(formData.username);

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
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <FormInput
            type="text"
            name="username"
            value={formData.username}
            onChange={onChange}
            placeholder="username"
          />
          <FormInput
            type="password"
            name="password"
            value={formData.password}
            onChange={onChange}
            placeholder="password"
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={onChange}
            placeholder="confirm password"
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
