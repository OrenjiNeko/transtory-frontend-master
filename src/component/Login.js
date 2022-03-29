import React, { useState, useEffect, useRef, useContext } from "react";
import { Link, Navigate, useNavigate, useLocation } from "react-router-dom";
import "./login.css";
import axios from "../api/axios";
import useAuth from "../auth/useAuth";

const LOGIN_URL = "/login";

const Login = () => {
  const { setAuth } = useAuth();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const resp = await axios.post(LOGIN_URL, JSON.stringify({ email, password }), {
        headers: { "Content-Type": "application/json" },
        // withCredentials:true
      });

      // console.log(resp?.data);
      // localStorage.setItem('jwt',resp?.data?.data?.access_token)
      localStorage.setItem("accessToken", resp?.data?.data?.access_token);
      const accessToken = localStorage.getItem("accessToken");
      // console.log(accessToken)
      // const accessToken = resp?.data?.data?.access_token;
      // const nama = resp?.data?.data?.user?.name;
      const user = resp?.data?.data?.user;
      setAuth({ user,accessToken });
      setEmail("");
      setPassword("");
      navigate(from, { replace: true });
    } catch (error) {
      setErrMsg(error?.response?.data?.data?.message);
      alert(errMsg);
    }
  };

  return (
    <>
      <section id="loginpage">
        <div className="container" style={{ marginTop: "9rem" }}>
          {/* <div className="row justify-content-center">
        <div className="col-md-5">
          {success ? (
              <Navigate to="/"/>
          ):(
            <div className="alert alert-danger alert-dismissible fade show" role="alert">
              <p>Maaf, Login tidak berhasil</p>
              <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          )}
      </div>
      </div> */}

          {/* <p ref={errRef} className={error?"errmsg":"offscreen"} style={{ margin:"auto" }}></p> */}
          {/* <!-- message -->
            <?php if(isset($error)):?>
                <div className="row justify-content-center">
                            <div className="col-md-5">
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                            <?="Username /  Password Salah"?>
                            <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                            </div>
                        </div>
                        </div>
                <?php endif; ?> */}

          <div className="row align-items-center">
            <div className="col-sm-5 p-4 pb-2" style={{ background: "#FF735C", borderRadius: "15px" }}>
              <h2 className="text-center fw-bolder">Transtory</h2>
              <hr style={{ color: "#000000", height: "1px" }} width="200" className="m-auto" />
              <form className=" p-5" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label" style={{ color: "#fff" }}>
                    Email
                  </label>
                  <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" ref={userRef} value={email} onChange={(e) => setEmail(e.target.value)} required={true} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label" style={{ color: "#fff" }}>
                    Password
                  </label>
                  <input type="password" className="form-control" id="pw" aria-describedby="emailHelp" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required={true} />
                </div>
                <div className="mb-3 text-end">
                  <a href="#" style={{ color: "#000000" }}>
                    Lupa Password ?
                  </a>
                </div>
                <div className="text-center mt-3">
                  <button type="submit" className="btn shadow border-dark" style={{ padding: "10px 3rem", fontSize: "20px", backgroundColor: "#6CAE61", color: "#fff", fontWeight: "bold" }} name="login">
                    Masuk{" "}
                  </button>
                </div>
                <div className="text-end mt-5">
                  <p style={{ fontWeight: "1px" }}>
                    Belum memiliki akun?{" "}
                    <Link to="/register" style={{ textDecoration: "underline", fontWeight: "bold" }}>
                      Daftar
                    </Link>
                  </p>
                </div>
              </form>
            </div>
            <div className="col-sm-2 m-auto">
              <hr style={{ color: "#285c52", height: "1.5px", transform: "rotate(90deg)" }} width="200" className="m-auto" />
            </div>
            <div className="col-sm text-center">
              <img src="img/6029674.png" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
