import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../auth/useAuth";
import axios from "../api/axios";
import useLogout from "../auth/useLogout"


const Navbar = () => {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate('/');
  };


  return (
    <>
      <section id="navbar">
        <div className="container">
          <div className="row">
            <div className="col-sm-4 align-self-center">
              <Link to="/" className="navbar-brand">
                <img src="img/LogoTS.png" alt="Logo" width="125" />
              </Link>
            </div>
            <div className="col-sm-8">
              <div className="row text-end">
                <div className="col">
                  <ul style={{ listStyleType: "none" }} className="text-end">
                    <li style={{ display: "inline" }} className="ms-4"></li>
                    <Link to="transaksi" className="text-dark">
                      Transaksi
                    </Link>

                    <li style={{ display: "inline" }} className="ms-4">
                      <Link to="daftarBank" className="text-dark">
                        Daftar Bank
                      </Link>
                    </li>
                    <li style={{ display: "inline" }} className="ms-4">
                      <Link to="tentangKami" className="text-dark">
                        Tentang Kami
                      </Link>
                    </li>
                    <div class="dropdown" style={{ display: "inline" }}>
                      <a class="btn" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <i class="bi bi-person" style={{ fontSize: "40px" }} />
                      </a>
                      {localStorage["name"] ? (
                        <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="dropdownMenuButton1">
                          <li>
                            <Link class="dropdown-item" to="akunSaya">
                              Akun Saya
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="akunBank">
                              Akun Bank
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="FAQ">
                              FAQ
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <button class="dropdown-item" onClick={signOut}>
                              Logout
                            </button>
                          </li>
                        </ul>
                      ) : (
                        <ul class="dropdown-menu dropdown-menu-end text-center" aria-labelledby="dropdownMenuButton1">
                          <li>
                            <Link class="dropdown-item" to="login">
                              Login
                            </Link>
                          </li>
                          <li>
                            <hr class="dropdown-divider" />
                          </li>
                          <li>
                            <Link class="dropdown-item" to="register">
                              Register
                            </Link>
                          </li>
                        </ul>
                      )}
                    </div>
                  </ul>
                </div>
              </div>
              <div className="row mt-3 mb-3" style={{ marginRight: "20rem" }}>
                <div className="col text-center">
                  <h4>Solusi Cek Transaksi Bank Anda</h4>
                  <p>Kapanpun dan Dimanapun</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
