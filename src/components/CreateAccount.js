import { React, useState } from "react";
import SignIn from "./SignIn";

function CreateAccount() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [existingUser, setExistingUser] = useState(false);

    const handleEmailChange = event => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = event => {
        setPassword(event.target.value)
    }

    const handleExistingUser = () => {
        setExistingUser(true)
    }

    let handleSubmit = e => {
        e.preventDefault();
    };

    if (!existingUser) {
        return (
            <div>
                <div class="signIn-body signIn-container">
                    <div class="signIn-card">
                        <h2><strong>Sign Up</strong></h2>
                        <form onSubmit={handleSubmit}>
                            <input type="text" id="email" placeholder="Email"
                                onChange={handleEmailChange}
                                value={email} />

                            <input type="password" id="password" placeholder="Password"
                                onChange={handlePasswordChange}
                                value={password}
                            />
                            <input type="password" id="password" placeholder="Confirm Password"
                                onChange={handlePasswordChange}
                                value={password}
                            />


                            <button onClick={() => setEmail(email)} type="submit">Submit</button>
                        </form>
                        <h5 onClick={handleExistingUser}>Back to Sign In</h5>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <SignIn />
        )
    }
}


export default CreateAccount;