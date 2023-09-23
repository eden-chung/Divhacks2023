import { React, useState } from "react";
import CreateAccount from "./CreateAccount";

function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [newUser, setNewUser] = useState(false);

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleNewAccount = () => {
        setNewUser(true)
    }

    let handleSubmit = e => {
        e.preventDefault();
    };

    if (!newUser) {
        return (
            <div>
                <div class="signIn-body signIn-container">
                    <div class="signIn-card">
                        <h2><strong>Welcome Back!</strong></h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="email" placeholder="Email"
                                onChange={handleEmailChange}
                                value={email} />
                            <input type="password" id="password" placeholder="Password"
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            <h4>Forgot your password?</h4>

                            <button onClick={() => setEmail(email)} type="submit">Sign in</button>
                        </form>
                        <h5 onClick={handleNewAccount}>Create an account</h5>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div>

                <CreateAccount />
            </div>
        )
    }
}

export default SignIn;
