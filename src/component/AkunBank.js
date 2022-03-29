import React, { useState, Component, Fragment } from "react";
import { Link } from "react-router-dom";
import axios from "../api/axios";

const AKUNBNI_URL = "bni/account";

const AkunBank = () => {
  const [nama, setNama] = useState("");
  const [tenggat, setTenggat] = useState("");
  const [saldo, setSaldo] = useState("");
  const [norek, setNorek] = useState("");

  axios
    .post(AKUNBNI_URL, {
      account_no: "12345",
    })
    .then(function (response) {
      setNama(response.data.data.response.accountName);
      setTenggat(response.data.data.response.toDate);
      setSaldo(response.data.data.response.endingBalance);
      setNorek(response.data.data.response.accountNumber);
    })
    .catch(function (error) {
      console.log(error);
    });

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const secure = (angka) => {
    let pisah = angka.replace(/\d(?=\d{3})/g, "*");
    return pisah;
  };

  function tglbni(date) {
    let bulanid = ["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
    let tanggal = date.split("-")[2];
    let bulan = date.split("-")[1];
    let tahun = date.split("-")[0];

    return tanggal + " " + bulanid[Math.abs(bulan)] + " " + tahun;
  }
  return (
    <>
      <section id="akunbank" className="akunbank">
        {/* Unauthorized */}
        <div className="container p-5">
          {/* <div className="row">
            <div className="col-sm-8">
              <h1 style={{ color: "#FF735C" }}>Akun Bank Anda</h1>
              <hr style={{ color: "#285c52", height: "1.5px" }} width="400" />
            </div>
            <div className="col-sm-4 ms-auto">
              <div className="input-group shadow-sm">
                <span className="input-group-text" style={{ backgroundColor: "#e0e0e0" }}>
                  <i className="bi bi-search text-center" style={{ cursor: "pointer", padding: "10px" }}></i>
                </span>
                <input className="form-control" type="search" placeholder="Cari Akun" aria-label="Search" style={{ backgroundColor: "#e0e0e0", padding: "1rem" }} />
              </div>
            </div>
          </div>

          <div className="row text-center">
            <div className="col-sm">
              <i className="bi bi-emoji-frown" style={{ fontSize: "16rem", color: "#3e8e7ee5" }}></i>
              <p style={{ fontSize: "1.5rem" }}>Tidak ada Akun yang terdaftar, silahkan tambahkan Akun Bank Anda terlebih dahulu</p>

              <div className="mt-5">
                <Link to="TambahAkunBank">
                  <button className="" type="submit" style={{ fontWeight: "bold", padding: "10px", backgroundColor: "#FF735C", borderRadius: "10px", color: "white", border: "1px solid black" }}>
                    Tambahkan Akun +
                  </button>
                </Link>
              </div>
            </div>
          </div> */}

          {/* Authorized */}
          {/* BNI */}

          <div className="row border border-danger rounded align-items-center">
            <div className="col-sm">
              <img src="img/logobang-06.png" alt="bni logo" width="200" />
            </div>
            <div className="col-sm">
              <p id="nama">{nama}</p>
              <p id="norek">{secure(norek)}</p>
            </div>
            <div className="col-sm">
              <p id="tenggat">Berlaku Sampai : {tglbni(tenggat)}</p>
              <p id="saldo">{rupiah(saldo)}</p>
            </div>
            <div className="col-sm-1 me-auto">
              <a href="" style={{ color: "$FF735C" }}>
                <i className="bx bx-file-find" style={{ fontSize: "5rem", color: "#FF735C" }}></i>
              </a>
            </div>
          </div>

          {/* BRI */}
          {/* <div className="row border border-danger rounded align-items-center">
              <div className="col-sm"></div>
            </div> */}
        </div>
      </section>
    </>
  );
};

export default AkunBank;
