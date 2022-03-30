import React, { Component, Fragment, useState } from "react";
import { Link } from "react-router-dom";
import useAuth from "../auth/useAuth";

const Home = (props) => {
  const { auth } = useAuth();
  // const namas = "Pengguna Baru"

  const rupiah = (number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
    }).format(number);
  };

  const amountbri = (typeAmount) => {
    let jml = "";
    if (typeAmount === "Debit") {
      jml = this.props.bri[0].debitAmount;
    } else {
      jml = this.props.bri[0].creditAmount;
    }
    return jml;
  };

  console.log(auth);
  return (
    <>
      {/* <!-- riwayat transaksi --> */}
      {/* <div className="container mt-5">
        <div className="row align-items-center">
          <div className="col-sm-5 border border-success p-3 align-self-center shadow-sm" style={{ borderRadius: "20px" }}> */}
      {/* {this.props.bri.map(bri =>{
                return(
                  <div className="row fw-bold"> 
                  <div className="col-sm-7">
                    <p>BRI</p>
                    <p>{bri.remark}</p>
                  </div>
                  <div className="col-sm-5">
                    <p>{amountbri(bri.typeAmount)}</p>
                    <p>BERHASIL</p>
                    </div>
                </div>
                )
              })

              } */}
      {/* </div>
        </div>
        <div className="row align-items-center mt-3">
          <div className="col-sm-5 border border-success p-3 align-self-center shadow-sm" style={{ borderRadius: "20px" }}> */}
      {/* {  
               this.props.bni.filter(bni => bni.sequenceNum === "000001").map(bni =>{
                 return(
                <div className="row  fw-bold">  
                  <div className="col-sm-6">
                    <p>BNI</p>
                    <p>{bni.narative}</p>
                  </div>
                  <div className="col-sm-6">
                    <p>{rupiah(bni.amount)}</p>
                    <p>BERHASIL</p>
                  </div>
                </div>
                 )
               }
                 
               )
             }           */}
      {/* </div>
        </div>
      </div> */}
      {/* <!-- end riwayat transaksi --> */}

      {/* <!-- Hero --> */}
      <section id="Hero" className="mt-5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <div className="row">
                <div className="col">
                  <h3>
                    Halo, <b style={{ color: "#ff735c" }}>{localStorage["name"] ?localStorage["name"]  : "Pengguna Baru"}</b>
                  </h3>
                </div>
              </div>
              <div className="row mt-5">
                <div className="col text-center" style={{ color: "#ff735ce5", fontSize: "5rem" }}>
                  <h3>Catatan Transaksi</h3>
                  <hr style={{ color: "#285c52", height: "1.5px" }} width="200" height="200" className="m-auto" />
                </div>
              </div>
              <div className="row mt-3">
                <div className="col" style={{ fontSize: "1rem" }}>
                  Maaf, saat ini tidak ada catatan transaksi yang tersedia. Silahkan <Link to="login">Masuk/Daftar</Link> terlebih dahulu.
                </div>
              </div>
            </div>
            <div className="col-sm text-center">
              <img src="img/6134225.png" alt="hero img" width="450" className="img-fluid" />
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Hero --> */}

      {/* <!-- Cara Kerja --> */}
      <section className="CaraKerja mt-5 mb-5">
        <div className="container">
          <div className="row">
            <div className="col-sm">
              <h2 style={{ color: "#ff735ce5" }} className="text-center">
                Cara Kerja
              </h2>
              <hr style={{ color: "#285c52", height: "1.5px" }} width="200" className="m-auto" />
              <p className="text-center mt-3">Transtory akan melakukan pengecekan secara otomatis ke akun bank Anda, kemudian menyajikan laporan berdasarkan histori transaksi dalam tampilan yang friendly.</p>
            </div>
          </div>
          <div className="row text-center mt-5">
            <div className="col-sm">
              <i className="bi bi-box-arrow-in-right shadow" style={{ fontSize: "4rem", border: "3px solid #ff735c", borderRadius: "10px", padding: "1rem 2rem", color: "#ff735c" }}></i>
              <h4 className="mt-5">DAFTARKAN AKUN</h4>
              <p>Daftarkan akun bank Anda ke dalam sistem Transtory, Kami akan menjamin kerahasian informasi yang anda masukkan.</p>
            </div>
            <div className="col-sm">
              <i className="bi bi-patch-check shadow" style={{ fontSize: "4rem", border: "3px solid #ff735c", borderRadius: "10px", padding: "1rem 2rem", color: "#ff735c" }}></i>
              <h4 className="mt-5">PENGECEKAN OTOMATIS</h4>
              <p>Transtory akan melakukan pengecekan secara otomatis berdasarkan informasi akun bank yang telah didaftarkan.</p>
            </div>
            <div className="col-sm">
              <i className="bi bi-journal-text shadow" style={{ fontSize: "4rem", border: "3px solid #ff735c", borderRadius: "10px", padding: "1rem 2rem", color: "#ff735c" }}></i>
              <h4 className="mt-5">LAPORAN TRANSAKSI</h4>
              <p>Transtory akan menyajikan laporan transaksi yang terjadi di akun bank Anda dan memberitahukan melalui email Anda.</p>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Cara Kerja --> */}
    </>
  );
};

export default Home;
