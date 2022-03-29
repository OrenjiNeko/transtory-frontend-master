import React from "react";
import "./DaftarBank.css";

const DaftarBank = () =>{
    return(
        <>
        
            <section id="banklists" className="mt-5">
            <div className="container">
                <h2 className="text-center" style={{ color: "#ff735c", fontSize: "3rem" }}>DAFTAR BANK</h2>
                <div className="row mt-5">
                <div className="col-sm-4">
                    <a href="https://www.bni.co.id/id-id/"><img src="img/Bank-01.png" alt="Bank BNI" width="400" className="border border-2 rounded border-success shadow" style={{ borderColor: "#ff735c" }} /></a>
                </div>
                <div className="col-sm-4">
                    <a href="https://www.bankbsi.co.id/"><img src="img/Bank-02.png" alt="Bank BSI" width="400" className="border border-2 rounded border-success shadow" /></a>
                </div>
                <div className="col-sm-4">
                    <a href="https://bri.co.id/"><img src="img/Bank-03.png" alt="Bank BRI" width="400" className="border border-2 rounded border-success shadow" /></a>
                </div>
                </div>
                <div className="row mt-5 mb-5">
                <div className="col-sm-4">
                    <a href="https://bankmandiri.co.id/"><img src="img/Bank-05.png" alt="Bank MANDIRI" width="400" className="border border-2 rounded border-success shadow" /></a>
                </div>
                </div>
            </div>
            </section>
        </>
    )
}

export default DaftarBank;