import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn, setToken, setUser, setLogEmail, setLogPassword } from "../redux/slices/Auth";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logEmail, logPassword ,user} = useSelector((state: any) => state.auth);
  const handleLogin = async (e: any) => {
    e.preventDefault();

    try {
      const response = await fetch("https://fakturera-i7to.onrender.com/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: logEmail, password: logPassword }),
      });

      const data = await response.json();

      if (data.token) {
        dispatch(setIsLoggedIn(true));
        dispatch(setToken(data.token));
        dispatch(setUser(data.user));
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        const mm = localStorage.getItem("user");
        console.log(mm);
        navigate("/");
      } else {
        console.log("Login failed:", data.message);
      }
    } catch (err) {
      console.error("Error during login:", err);
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h1 className="th">Logga in</h1>

        <Input
          value={logEmail}
          onChange={(e) => dispatch(setLogEmail(e.target.value))}
          type="text"
          placeholder="Epost address"
          label="Skriv in din epost adress"
        />

        <Input
          value={logPassword}
          onChange={(e) => dispatch(setLogPassword(e.target.value))}
          type="password"
          placeholder="Skriv in ditt lösenord"
          label="Lösenord"
        />

        <button type="submit" className="submit-btn">Logga in</button>

        <div className="qw">
          <p onClick={() => navigate("/signup")}>Registrera dig</p>
          <p>Glömt lösenord?</p>
        </div>
      </form>
    </div>
  );
}

function Input({ type, placeholder, label, value, onChange }: any) {
  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <input type={type} placeholder={placeholder} className="input" value={value} onChange={onChange} />
    </div>
  );
}

export default Login;