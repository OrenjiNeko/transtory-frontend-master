import React from "react";
import { Link } from "react-router-dom";
import "./faq.css";

const FAQUmum = () => {
  return (
    <>
      <h1 style={{ color: "#FF735C" }} className="text-center mt-5">
        Frequently Ask Question
      </h1>
      <hr style={{ color: "#285c52", height: "2px" }} width="500" className="m-auto mb-5" />

      <div className="container mt-5 mb-5">
        <div className="row align-items-center">
          <div className="col-sm-2" id="faqbtn">
            <div className="row mb-5">
              <div className="col">
                <Link className="border border-success fw-bold" to="/FAQ" id="actived">
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
                <Link className="border border-success fw-bold " to="/FAQKeamanan">
                  Keamanan
                </Link>
              </div>
            </div>
          </div>

          <div className="col-sm-2 m-auto">
            <hr style={{ color: "#285c52", height: "1.5px", transform: "rotate(90deg)" }} width="100" className="m-auto" />
          </div>

          <div className="col-sm">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne" style={{ borderRadius: "10px" }}>
                    Apa itu Transtory ?
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Transtory adalah sebuah aplikasi berbasis web bertujuan untuk membantu pengguna dalam melakukan pengecekan transaksi yang terjadi pada akun bank setiap pengguna kapanpun dan dimanapun.
                    <br />
                    <br />
                    Sehingga, pengguna tidak perlu melakukan pengecekan transaksi secara manual dari tiap-tiap akun bank. Laporan transaksi dapat dilihat secara langsung melalui dashboard yang kami sediakan dan akan tersimpan dalam jangka
                    waktu yang lama.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo" style={{ borderRadius: "10px" }}>
                    Kemana saya harus menghubungi bila ada kendala ?
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Anda tidak usah khawatir, Kami akan selalu membantu jika anda mengalami kendala. Pengguna dapat bertanya melalui layanan Hubungi Kami yang ada di bawah laman.
                    <br />
                    <br />
                    Anda juga dapat menghubungi via sosial media kami atau melalui email support@transtory.com setiap hari pukul 08.30 WIB - 17.00 WIB.
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree" style={{ borderRadius: "10px" }}>
                    Bank apa saja yang didukung layanan Transtory ?
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">
                    Bank yang saat ini sudah kami sediakan :<br />
                    1.Bank Mandiri
                    <br />
                    2.Bank BNI
                    <br />
                    3.Bank BRI
                    <br />
                    4.Bank BSI
                    <br />
                    5.Bank BTN
                  </div>
                </div>
              </div>
              <div className="accordion-item border border-success mb-5" style={{ borderRadius: "10px" }}>
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour" style={{ borderRadius: "10px" }}>
                    Apakah layanan Transtory berbayar ?
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body">Tidak. kami memberikan layanan gratis tanpa biaya untuk membantu memenuhi kebutuhan pengguna.</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FAQUmum;
