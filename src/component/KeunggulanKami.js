import React, { useState } from "react";
import { Link } from "react-router-dom";

function KeunggulanKami() {
  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-sm align-self-center mt-5">
            <img src="/img/5995357.png" alt="keunggulan kami" className="img-fluid"></img>
          </div>
          <div className="col-sm">
            <h1 className="text-center" style={{ color: "#eb6e59;", marginBottom: "5rem" }}>
              Keunggulan Kami
            </h1>

            <table className="table align-middle table-borderless">
              <tbody>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ paddingTop: "auto", fontSize: "20px",fontWeight:"bold" }} className=" mt-auto">
                      Mendukung bank milik pemerintah di Indonesia
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ display: "inline", fontSize: "20px",fontWeight:"bold" }} className="">
                      Menggunakan SSL untuk keamanan transmisi data
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ display: "inline", fontSize: "20px",fontWeight:"bold" }} className="">
                      Enkripsi akun untuk keamanan data Anda
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ display: "inline", fontSize: "20px",fontWeight:"bold" }} className="">
                      Laporan riwayat mutasi yang tersimpan dalam jangka waktu yang lama
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ display: "inline", fontSize: "20px",fontWeight:"bold" }} className="">
                      Akses mudah, kapanpun dan dimanapun.
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ display: "inline", fontSize: "20px",fontWeight:"bold" }} className="">
                      Bebas biaya Administrasi
                    </p>
                  </td>
                </tr>
                <tr>
                  <th scope="row">
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "40px" }}></i>
                  </th>
                  <td>
                    <p style={{ display: "inline", fontSize: "20px",fontWeight:"bold" }} className="">
                      Layanan bantuan yang siap membantu anda
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default KeunggulanKami;
