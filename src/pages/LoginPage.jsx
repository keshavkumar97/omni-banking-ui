import FormButton from "../components/FormButton";
import FormInput from "../components/FormInput";

const LoginPage = () => {
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
        <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
          <h2 className="text-2xl font-bold text-center text-gray-800">
            Account Login
          </h2>
          <FormInput type="text" name="username" placeholder="username" />
          <FormInput type="password" name="password" placeholder="password" />
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
