import React from 'react';
import '../index.css';

export default function Login() {
    var x = document.getElementById("Passwordinput");
    if (x.type === "password") {
        x.type = "text";
    } else {
        x.type = "password";
    }

    return (
        <div className="row">
            <div className="offset-3 col-6">
                <div className="shadow p-4 mt-4">
                    <h1>Welcome!</h1>
                    <h5> Please Sign In </h5>
                    <form id="create-location-form">
                        <div className="form-floating mb-3">
                            <input placeholder="Username" required type="text" name="Username" id="Usernameinput" className="form-control" />
                            <label htmlFor="Username">Username</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input placeholder="Password" required type="text" value="FakePSW" name="Password" id="Passwordinput" className="form-control" />
                            <input type="checkbox" onclick="Login()" id="ShowPassword" />Show Password
                            <label htmlFor="Password">Password</label>
                        </div>
                        <button className="btn btn-primary" id="login">Log In</button>
                    </form>
                </div>
            </div>
        </div>
    );
}
