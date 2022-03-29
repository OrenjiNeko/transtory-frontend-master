import React from 'react'
import {Link} from 'react-router-dom'

const TentangKami = () => {
  return (
    <>
    <section id="about">
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-sm">
                    <img src="img/5385937.png" alt="about us" className="img-fluid"/>
                </div>
                <div className="col-sm" >
                    <h1 className="text-center" style={{ marginBottom: "5rem",color: "#eb6e59" }}>Tentang Kami</h1>
                    <p><b style={{ color: "#eb6e59" }}>Transtory</b> adalah aplikasi berbasi web yang dibuat pada tahun 2021 untuk mempermudah masyarakat saat hendak mengecek histori transaksi yang dilakukan hanya dengan satu aplikasi</p>
                    <p> Nama <b style={{ color: "#eb6e59" }}>Transtory</b> merupakan akronim dari Transaction History dengan harapan bahwa nama ini akan mudah dikenali oleh masyarakat luas.</p>
                    <Link to="keunggulanKami" type="button" className="btn shadow border border-dark" style={{ padding:"10px 3rem", background: "#eb6e59", color: "#fff" }}>Keunggulan Kami <i className="bi bi-hand-thumbs-up"></i></Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default TentangKami