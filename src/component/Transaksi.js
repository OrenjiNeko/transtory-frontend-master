import React, { Component, Fragment } from "react";
import axios from "axios";
import { Helmet } from "react-helmet";

const title = "Transaksi";
class Transaksi extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // <Helmet>
    //     <title>Transtory | {title}</title>
    // </Helmet>
    const rupiah = (number) => {
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        currency: "IDR",
      }).format(number);
    };

    function tglbni(date) {
      let bulanid = ["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      let tanggal = date.split("-")[2];
      let bulan = date.split("-")[1];
      let tahun = date.split("-")[0];

      return tanggal + " " + bulanid[Math.abs(bulan)] + " " + tahun;
    }

    function tglbri(date) {
      let splithr = date.split(" ")[0];

      let bulanid = ["", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"];
      let tanggal = splithr.split("-")[2];
      let bulan = splithr.split("-")[1];
      let tahun = splithr.split("-")[0];

      return tanggal + " " + bulanid[Math.abs(bulan)] + " " + tahun;
    }

    const handleDebit = () => {
      console.log(this.props.bri.filter((bri) => bri.typeAmount === "Debit"));
    };

    return (
      <Fragment>
        {/* <!-- transaksi --> */}
        <section id="transaksi">
          <div className="container mb-5">
            <div className="row">
              <div className="col-sm text-start mt-5">
                <h3 className="" style={{ color: "#ff735c", marginLeft: "60px" }}>
                  Catatan Transaksi
                </h3>
                <hr style={{ color: "#285c52", height: "1.5px" }} width="400" />
              </div>
              <div className="col-sm mt-5">
                <form className="d-flex ms-auto" method="post" style={{ padding: "0rem", width: "300px" }}>
                  <div className="input-group shadow-sm">
                    <span className="input-group-text" style={{ backgroundColor: "#e0e0e0" }}>
                      <i className="bi bi-search text-center" style={{ cursor: "pointer" }}></i>
                    </span>
                    <input className="form-control" type="search" placeholder="Search" aria-label="Search" style={{ backgroundColor: "#e0e0e0" }} />
                    <span className="input-group-text border-end-0" style={{ backgroundColor: "#e0e0e0" }}>
                      <a className="btn" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi bi-funnel" id="filter"></i>
                      </a>
                      <ul className="dropdown-menu dropdown-menu-end mt-2" aria-labelledby="dropdownMenuLink">
                        <li>
                          <button className="dropdown-item" onClick={handleDebit}>
                            Transaksi Masuk
                          </button>
                        </li>
                        <li>
                          <hr class="dropdown-divider" />
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Transaksi Keluar
                          </a>
                        </li>
                      </ul>
                    </span>
                  </div>
                </form>
              </div>
            </div>
            <div className="row justify-content-center mt-5 text-center">
              <h1>BRI</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Jenis Transaksi</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Sumber</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Nominal</th>
                  </tr>
                </thead>

                <tbody>
                  {this.props.bri.map((bri, i) => {
                    return (
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td>{tglbri(bri.transactionTime)}</td>
                        <td>{bri.typeAmount}</td>
                        <td>ID</td>
                        <td>BRI</td>
                        <td className="text-start">{bri.remark}</td>
                        <td className="text-start">{bri.typeAmount === "Debit" ? rupiah(bri.debitAmount) : rupiah(bri.creditAmount)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              <h1>BNI</h1>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">No.</th>
                    <th scope="col">Tanggal</th>
                    <th scope="col">Jenis Transaksi</th>
                    <th scope="col">User ID</th>
                    <th scope="col">Sumber</th>
                    <th scope="col">Tujuan</th>
                    <th scope="col">Nominal</th>
                  </tr>
                </thead>

                <tbody>
                  {this.props.bni.map((bni, i) => {
                    return (
                      // key={datas.sequenceNum},
                      <tr>
                        <th scope="row">{i + 1}</th>
                        <td className="currency">{tglbni(bni.date)}</td>
                        <td>{bni.description}</td>
                        <td>ID</td>
                        <td>BNI</td>
                        <td className="text-start">{bni.narative}</td>
                        <td className="text-start ms-2">{rupiah(bni.amount)}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>

              
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Transaksi;
