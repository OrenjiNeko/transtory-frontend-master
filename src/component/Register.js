import React, { useEffect, useState, useRef } from "react";
import { Link,useNavigate } from "react-router-dom";
import "./register.css";
import axios from "../api/axios";

const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [validName, setValidName] = useState(false);
  const [nameFocus, setUserFocus] = useState(false);

  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(false);
  const [passwordFocus, setPasswodFocus] = useState(false);

  const [password2, setPassword2] = useState("");
  const [validPassword2, setValidPassword2] = useState(false);
  const [password2Focus, setPasswod2Focus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);
  //  const[error, setError]= useState(false);

  useEffect(() => {
    const match = password === password2;
    setValidPassword2(match);
  }, [password, password2]);

  useEffect(() => {
    setErrMsg("");
  }, [name, email, password, password2]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === password2) {
      try {
        const resp = await axios.post(REGISTER_URL, JSON.stringify({ name, email, password }), {
          headers: { "Content-Type": "application/json" },
          // withCredentials:true
        });
        console.log(resp.data.meta.status);
        setSuccess(true);
        alert("Pendaftaran Berhasil, Silahkan Login")
        navigate('/login')
        
      } catch (error) {
        console.log(error.response.data);
        setErrMsg(error.response.data.data.message);
        // setError(true);
      }
    } else {
      setErrMsg("Password tidak sesuai");
    }
  };

  return (
    <>
      <section id="register">
        <div className="container p-5 shadow" style={{ border: "1px solid #FF735C", borderRadius: "10px", margin: "auto", marginTop: "5rem", marginBottom: "5rem" }}>
          <div className="row justify-content-center">
            <div className="col-md-5">
              
              {success ? (
                <div className="alert alert-success alert-dismissible fade show" role="alert">
                  <p>Pendaftaran Berhasil, silahkan login</p>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              ) : (
                <div className="alert alert-danger alert-dismissible fade show" role="alert">
                  <p>erorr akan ditampilkan disisni</p>
                  <p>{errMsg}</p>
                  <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
              )}
            </div>
          </div>

          <div className="row align-items-center">
            <div className="text-center mb-5" style={{ color: "#FF735C" }}>
              <h2>REGISTER</h2>
            </div>

            <div className="col-sm mt-5">
              <img src="img/5180200.png" alt="" width="450" className="img-fluid" />
            </div>
            <div className="col-sm-2 m-auto ">
              <hr style={{ color: "#285c52", height: "1.5px", transform: "rotate(90deg)" }} width="200" className="m-auto" />
            </div>
            <div className="col-sm">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Nama Lengkap
                  </label>
                  <input type="text" className="form-control" id="name" name="name" onChange={(e) => setName(e.target.value)} />
                  <div id="name" className="invalid-feedback">
                    Please provide a valid zip.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Alamat Email
                  </label>
                  <input type="email" className="form-control" id="email" name="email" onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password" className="form-label">
                    Password
                  </label>
                  <input type="password" className="form-control" id="password" name="password" onChange={(e) => setPassword(e.target.value)} required={true} />
                </div>
                <div className="mb-3">
                  <label htmlFor="password2" className="form-label">
                    Ulangi Password
                  </label>
                  <input type="password" className="form-control " id="password2" name="password2" onChange={(e) => setPassword2(e.target.value)} required={true} />

                  {/* <div id="validationServer05Feedback" class="invalid-feedback">
                                Password tidak sesuai!
                              </div> */}
                </div>

                <div className="mt-5 text-center">
                  <input
                    type="submit"
                    style={{ padding: "10px 2rem", backgroundColor: "#FF735C", borderRadius: "10px", color: "#fff", border: "1px solid black", fontWeight: "bold" }}
                    className="shadow-sm"
                    id="register"
                    name="submit"
                    value="Register"
                  />
                </div>
                <div className="mt-4 text-center">
                  <p>
                    Sudah punya akun ? <Link to="/login">Login</Link>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Register;
