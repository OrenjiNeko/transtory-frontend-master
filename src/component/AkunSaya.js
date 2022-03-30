import React, { useEffect, useState, useRef } from "react";
import useAuth from "../auth/useAuth";
import axios from "../api/axios";
import useAxiosPrivate from '../auth/useAxiosPrivate';

const PASSWORD_URL = "/password/update";

const AkunSaya = () => {
  const { auth } = useAuth();
  const {setAuth} =  useAuth();
  const axiosPrivate = useAxiosPrivate();

  
  const [old_password, setOldPassword] = useState("");
  const [new_password, setNewPassword] = useState("");
  const [confirm_password, setConfirmPassword] = useState("");

  const token =JSON.stringify(auth?.accessToken);

  console.log(token);

  // const header = {
  //   headers:{
  //     Authorization : 'Bearer ${auth?.accessToken}',

  //   }
  // }

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const resp = await axiosPrivate.post(PASSWORD_URL, JSON.stringify({ old_password, new_password, confirm_password }), {
        // withCredentials:true
      });
      alert("Ganti Password Berhasil")
    } catch (error) {
      alert(error?.response?.data?.data?.message)
    }
  };

  return (
    <>
      {/* <!--Split--> */}
      <div className="container" style={{ margin: "5rem auto" }}>
        <form onSubmit={handleSubmit}>
          <div className="row g-5" style={{ color: "#FF735C" }}>
            {/* <!--Split Left--> */}
            <div className="col-sm">
              {/* <!--Nama--> */}
              <div className="form-group mt-3">
                <label htmlFor="name" className="form-label">
                  Nama Lengkap
                </label>
                {localStorage["name"] ? <input type="text" className="form-control" id="name" placeholder={localStorage["name"]} disabled /> : <input type="text" className="form-control" id="name" placeholder="" />}
              </div>

              {/* <!--E-mail--> */}
              <div className="form-group mt-3">
                <label htmlFor="email" className="form-label">
                  Alamat Email
                </label>
                {localStorage["emails"] ? <input type="text" className="form-control" id="name" placeholder={localStorage["emails"]} disabled /> : <input type="text" className="form-control" id="name" placeholder="" />}
              </div>

              {/* <!--password--> */}
              <div className="form-group mt-3">
                <label htmlFor="oldpassword" className="form-label">
                  Password Lama
                </label>
                <input type="password" className="form-control" id="oldpassword" name="old_password" value={old_password} onChange={(e) => setOldPassword(e.target.value)}  />
              </div>

              {/* <!--password--> */}
              <div className="form-group mt-3">
                <label htmlFor="newpass" className="form-label">
                  Password Baru
                </label>
                <input type="password" className="form-control" id="newpassword" name="new_password" value={new_password} onChange={(e) => setNewPassword(e.target.value)}  />
              </div>

              {/* <!--password--> */}
              <div className="form-group mt-3">
                <label htmlFor="confirmpass" className="form-label">
                  Konfirmasi Password Baru
                </label>
                <input type="password" className="form-control" id="confirmpassword" name="confirm_password" value={confirm_password} onChange={(e) => setConfirmPassword(e.target.value)}  />
              </div>
            </div>
            {/* <!--Username End--> */}

            {/* <!--Split Left End--> */}

            <div className="col-sm-2 m-auto">
              <hr style={{ color: "#285c52", height: "1.5px", transform: "rotate(90deg)" }} width="200" className="m-auto" />
            </div>

            {/* <!-- Split Right--> */}
            <div className="col-sm">
              <div className="text-center mt-4">
                <img src="img/6242692.png" className="img-fluid" weight="100px" alt="akunsaya"/>
                <input type="Submit" className="btn border shadow-sm" defaultValue="Simpan" style={{ padding: "5px 3rem", borderRadius: "10px", background: "#6CAE61", color: "#fff" }} />
                <input type="reset" className="btn border shadow-sm ms-5" defaultValue="Batal" style={{ padding: "5px 3rem", borderRadius: "10px", background: "rgba(196, 196, 196, 0.7)" }} />
              </div>
            </div>
          </div>
        </form>
      </div>
      {/* <!--Accordion End-->
  <!--Split Right End--> */}
    </>
  );
};

export default AkunSaya;
