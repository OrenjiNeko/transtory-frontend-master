import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const FAQAkun = () => {
  return (
    <>
      {/* <!--Header--> */}
      <h1 style={{ color: "#FF735C" }} className="text-center mt-5">
        Frequently Ask Question
      </h1>
      <hr style={{ color: "#285c52", height: "2px" }} width="500" className="m-auto mb-5" />

      {/* <!--Split--> */}
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
                <Link className="border border-success fw-bold " to="/FAQAkun" id="actived">
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
                    Iya, Anda dapat mengubah informasi akun kapanpun melalui laman <b>Akun Saya</b> di pojok kanan atas website.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ borderRadius: "10px" }}>
                    Berapa akun bank yang dapat saya tambahkan ?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Setiap pengguna dapat menambahkan masing-masing 1 (satu) Akun pada tiap-tiap Bank.</div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ borderRadius: "10px" }}>
                    Apakah akun saya akan dibekukan bila tidak aktif dalam waktu yang lama ?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Tidak. Kami akan menjaga Akun Anda dan dapat digunakan kapanpun Anda mau.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQAkun;
