import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";

const RegisterPage = ()=>{
    return (
        <div>
            <form>
                <FormInput type="text" placeholder="username"/>
                <FormButton/>
            </form>
        </div>
    )
}
export default RegisterPage;