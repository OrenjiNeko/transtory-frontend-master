import React from "react";
import { Link } from "react-router-dom";

const TambahkanAkun = () => {
  return (
    <>
      <h1 style={{ color: "#FF735C" }} className="mt-5 mb-5 text-center">
        Data Akun Bank
      </h1>
      <div className="container mb-5">
        <form action="" method="post">
          <div className="row">
            {/* <!--Split Left--> */}
            <div className="col-sm-6 " style={{ color: "#FF735C", fontWeight: "bold" }}>
              {/* <!--Pilih Bank--> */}
              <p className="mb-3">Pilih Bank</p>
              <img src="/img/Bank-01.png" className="btn btn-outline-danger me-3 mb-3 shadow-sm" role="button" width="145px" />
              <img src="/img/Bank-02.png" className="btn btn-outline-danger me-3 mb-3 shadow-sm" role="button" width="145px" />
              <img src="/img/Bank-03.png" className="btn btn-outline-danger me-3 mb-3 shadow-sm" role="button" width="145px" />
              <br />
              <img src="/img/Bank-05.png" className="btn btn-outline-danger me-3 mb-3 shadow-sm" role="button" width="145px" />

              {/* <!--Username--> */}
              <div className="form-group mt-3">
                <label for="userid" className="form-label">
                  User ID i-Banking
                </label>
                <input type="text" className="form-control" id="userid" />
              </div>

              {/* <!--Nama--> */}
              <div className="form-group mt-3">
                <label for="password" className="form-label">
                  Password Id Banking
                </label>
                <input type="password" className="form-control" id="password" />
              </div>

              {/* <!--E-mail--> */}
              <div className="form-group mt-3">
                <label for="norek" className="form-label">
                  Nomor Rekening
                </label>
                <input type="text" className="form-control" id="norek" />
              </div>

              <div className="form-group mt-3">
                <label for="nopemilik" className="form-label" style={{ color: "#FF735C" }}>
                  Nomor Pemilik Rekening
                </label>
                <input type="text" className="form-control" id="nopemilik" />
              </div>
            </div>
            {/* <!--Username End--> */}

            {/* <!--Split Left End--> */}

            {/* <!-- Split Right--> */}
            <div className="col-sm-6 ">
              {/* <!--peringatann--> */}
              <div className="container mt-4 text-center">
                <span className="border border-dark p-4" style={{ display: "inline-block", backgroundColor: "#f3f3f3", borderRadius: "10px", color: "#C30B0B" }}>
                  <strong>Penting !!</strong> Akses Transtory hanya untuk membaca data transaksi. Transtory tidak dapat membuat perubahan atau melakukan transaksi melalui akun bank Anda.{" "}
                </span>
              </div>

              <div className="checkbox mt-4">
                <label>
                  <input type="checkbox" value="" /> Saya menyetujui{" "}
                  <Link to="/S&K">
                    <u> syarat dan ketentuan</u>
                  </Link>{" "}
                  yang berlaku{" "}
                </label>
              </div>

              {/* <!--Button Save--> */}
              <div className="text-end">
                <button type="Submit" className="btn mt-5 shadow border" value="Simpan" style={{ padding: "5px 3rem", borderRadius: "10px", background: "#6CAE61", color: "#fff" }}>
                  {" "}
                  Simpan{" "}
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default TambahkanAkun;
