import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const FAQLayanan = () => {
  return (
    <>
      {/* <!--Header--> */}
      <h1 style={{ color: "#FF735C" }} className="text-center mt-5">
        Frequently Ask Question
      </h1>
      <hr style={{ color: "#285c52", height: "2px" }} width="500" className="m-auto mb-5" />

      <div className="container mb-5">
        <div className="row align-items-center">
          {/* <!--Split Left--> */}
          <div className="col-sm-2" id="faqbtn">
            <div className="row mb-5">
              <div className="col">
                <Link className="border border-success fw-bold" to="/FAQ">
                  Umum
                </Link>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <Link className="border border-success fw-bold " to="/FAQAkun">
                  Akun
                </Link>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <Link className="border border-success fw-bold " to="/FAQLayanan" id="actived">
                  Layanan
                </Link>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <Link className="border border-success fw-bold " to="/FAQKeamanan">
                  Keamanan
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-2 m-auto">
            <hr style={{ color: "#285c52", height: "1.5px", transform: "rotate(90deg)" }} width="100" className="m-auto" />
          </div>

          {/* <!--Accordion--> */}
          <div className="col-sm align-self-start">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ borderRadius: "10px" }}>
                    Apakah informasi akun dapat diubah ?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Layanan yang saat ini sudah kami sediakan : Layanan yang saat ini sudah kami sediakan :<br />
                    1. Dashboard yang Menarik
                    <br />
                    2. Transaksi Debit
                    <br />
                    3. Kelola Banyak Akun Multi Bank
                    <br />
                    4. Laporan Transaksi
                    <br />
                    5. Atur Kategori Transaksi
                    <br />
                    6. Atur notifikasi pemberitahuan transaksi baru via SMS, Whatsapp, atau Email
                    <br />
                    7. Dan Lain-Lain
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQLayanan;
