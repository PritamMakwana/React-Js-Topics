const { useState } = require("react");

export default function User() {

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState(false);
    const [passErr, setPassErr] = useState(false);

    function loginHandle(e) {
        if (user.length < 3 || password.length < 3) {
            alert("type correct values")
        } else {
            alert("all good")
        }
        e.perventDefault();
    }

    function userHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setUserErr(true);
        } else {
            setUserErr(false);
        }
        setUser(item);
    }

    function passHandler(e) {
        let item = e.target.value;
        if (item.length < 3) {
            setPassErr(true);
        } else {
            setPassErr(false);
        }
        setPassword(item);
    }


    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={loginHandle}>
                <input type="text" placeholder="user id" onChange={userHandler} />
                {userErr ? <span> id not valid</span> : ""}
                <br />
                <br />
                <input type="password" placeholder="user password" onChange={passHandler} />
                {passErr ? <span> password not valid</span> : ""}
                <br />
                <br />
                <button type="Submit">Submit</button>

            </form>
        </div>
    )


}