import React, { useState, useContext } from "react";
import { Link, useHistory } from "react-router-dom";
import M from "materialize-css";

const Signin = () => {
  const history = useHistory();
  const [password, setPassword] = useState("");
  const PostData = () => {
    fetch("/signin", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        if (data.error) {
          M.toast({ html: data.error, classes: "#c62828 red darken-3" });
        } else {
          M.toast({
            html: data.message,
            classes: " #43a047 green darken-1",
          });
          history.push("/signin");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="mycard">
      <div className="card auth-card input-field">
        <h2>Instamini</h2>

        <input
          type="password"
          placeholder="enter a new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="btn waves-effect waves-light #64b5f6 blue darken-1"
          onClick={() => PostData()}
        >
          Login
        </button>
        <h5>
          <Link to="/signup">Don't have an account ?</Link>
        </h5>
      </div>
    </div>
  );
};

export default Signin;
