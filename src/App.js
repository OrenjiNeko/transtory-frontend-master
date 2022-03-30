import React, { Component } from "react";
import Layout from "./component/Layout";
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./component/Home";
import AkunBank from "./component/AkunBank";
import Login from "./component/Login";
import Register from "./component/Register";
import Transaksi from "./component/Transaksi";
import KeunggulanKami from "./component/KeunggulanKami";
import AkunSaya from "./component/AkunSaya";
import DaftarBank from "./component/DaftarBank";
import axios from "axios";
import TentangKami from "./component/TentangKami";
import FAQUmum from "./component/FAQUmum";
import FAQAkun from "./component/FAQAkun";
import FAQKeamanan from "./component/FAQKeamanan";
import FAQLayanan from "./component/FAQLayanan";
import FAQLayout from "./component/FAQLayout";
import HubungiKami from "./component/HubungiKami";
import SyaratdanKetentuan from "./component/SyaratdanKetentuan";
import TambahkanAkun from "./component/TambahkanAkun";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bni: [],
      bri: [],
      bsi: [],
      mandiri: []
    };
  }

  componentDidMount() {
    axios.all([
      axios
        .post("https://transtory-backend.herokuapp.com/api/bri/transaction?account=008301031142500", {
          bri: [],
        })
        .then((resp) => {
          // console.log(response.data.data.response)
          this.setState({
            bri: resp.data.data.response,
          });
        })
        .catch((error) => {
          console.log(error);
        }),
      axios
        .post("https://transtory-backend.herokuapp.com/api/bni/account?account_no=12345", {
          bni: [],
        })
        .then((resp) => {
          // console.log(response.data.data.response)
          this.setState({
            bni: resp.data.data.response.longHistoricals,
          });
        })
        .catch((error) => {
          console.log(error);
        }),
      axios
        .get("https://transtory-backend.herokuapp.com/api/bsi/transaction/100010", {
          bsi: [],
        })
        .then((resp) => {
          // console.log(response.data.data.response)
          this.setState({
            bsi: resp.data.data,
          });
        })
        .catch((error) => {
          console.log(error);
        }),
      axios
        .get("https://transtory-backend.herokuapp.com/api/mandiri/transaction", {
          mandiri: [],
        })
        .then((resp) => {
          // console.log(response.data.data.response)
          this.setState({
            mandiri: resp.data
          });
        })
        .catch((error) => {
          console.log(error);
        }),
    ]);
  }

  render() {
    return (
      <>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home bri={this.state.bri} bni={this.state.bni} />} />
            <Route path="transaksi" element={<Transaksi bri={this.state.bri} bni={this.state.bni} bsi={this.state.bsi} mandiri={this.state.mandiri} />} />
            <Route path="akunSaya" element={<AkunSaya />} />
            <Route path="daftarBank" element={<DaftarBank />} />
            <Route path="HubungiKami" element={<HubungiKami />} />
            <Route path="S&K" element={<SyaratdanKetentuan />} />
            <Route path="akunBank">
              <Route index element={<AkunBank />} />
              <Route path="TambahAkunBank" element={<TambahkanAkun />} />
            </Route>
            <Route path="tentangKami">
              <Route index element={<TentangKami />} />
              <Route path="keunggulanKami" element={<KeunggulanKami />} />
            </Route>
            <Route path="FAQ" element={<FAQUmum />} />
            <Route path="FAQAkun" element={<FAQAkun />} />
            <Route path="FAQKeamanan" element={<FAQKeamanan />} />
            <Route path="FAQLayanan" element={<FAQLayanan />} />
          </Route>
          <Route>
            <Route path="login" element={<Login />} />
          </Route>
          <Route>
            <Route path="register" element={<Register />} />
          </Route>
        </Routes>
      </>
    );
  }
}

export default App;
