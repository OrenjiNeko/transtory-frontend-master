import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const FAQKeamanan = () => {
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
                <Link className="border border-success fw-bold " to="/FAQLayanan">
                  Layanan
                </Link>
              </div>
            </div>
            <div className="row mb-5">
              <div className="col">
                <Link className="border border-success fw-bold " to="/FAQKeamanan" id="actived">
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
                    Apakah layanan di Transtory aman digunakan ?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Iya, layanan Transtory aman digunakan karena menggunakan SSL HTTPS untuk transaksi data dengan server.
                    <br />
                    <br />
                    Kami juga menenkripsi data credential setiap pengguna dan menjamin kerahasiaan data Anda dengan tidak memberikan kepada pihak ketiga.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ borderRadius: "10px" }}>
                    Adakah aturan khusus saat mengganti password ?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Penggantian password hanya dapat dilakukan sehari sekali dengan minimal 8 karakter</div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ borderRadius: "10px" }}>
                    Apakah saya dapat menghapus akun saya ?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Tentu saja, pengguna dapat menghapus akun rekening yang terdaftar. Kami juga akan menghapus semua informasi mengenai rekening tersebut dari database Kami. </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQKeamanan;
