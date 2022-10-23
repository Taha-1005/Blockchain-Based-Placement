import {useNavigate} from "react-router-dom"
const  Register=()=> {
  let navigate = useNavigate()

    const goToLoginPage = () => {
        console.log("Already Registered User");
        navigate("/login")

    };
    const goToRegisterUser = () => {
        console.log("Register the User");
        navigate("/register")

    };
    return (
        <div>
            <h1>Register User/ Company/ Faculty</h1>
            <div>Already Registered?</div>

            <button onClick={(event) => goToRegisterUser(event)} >No</button>
            <button onClick={(event) => goToLoginPage(event)}>Yes</button>
        </div>
    )
}
export default Register;