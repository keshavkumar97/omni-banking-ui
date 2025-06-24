import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left side: 70% */}
      <div className="w-[55%] h-screen">
        <img
          src="/banner.png"
          alt="Banner"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Right side: 30% */}
      <div className="w-[45%] bg-gray-100 flex items-center justify-center">
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Create Account
          </h2>
          <FormInput type="text" name="username" placeholder="username" />
          <FormInput type="password" name="password" placeholder="password" />
          <FormInput
            type="password"
            name="confirm password"
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
