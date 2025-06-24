import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex justify-end  bg-gray-100">
      <form className="bg-white p-8 rounded-lg shadow-md w-full max-w-md space-y-4">
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
        <div className="flex justify-between text-sm ">
          <span>
            Already a User? <a  className="text-blue-600 underline mt-2" href="/login">Login</a>
          </span>
        </div>
      </form>
    </div>
  );
};
export default RegisterPage;
