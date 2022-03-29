import React from 'react'

const HubungiKami = () => {
  return (
    <>
    <section id="contactus">
        <div className="container mt-5 mb-5">
            <div className="row align-items-center">
                <div className="col-sm p-3">
                    <form className=" border border-dark rounded p-5">
                        <div className="mb-3">
                          <label for="name" className="form-label" style={{ color: "#FF735C" }}>Nama</label>
                          <input type="text" className="form-control" id="name" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                          <label for="email" className="form-label" style={{ color: "#FF735C" }}>Alamat Email</label>
                          <input type="email" className="form-control" id="email" aria-describedby="emailHelp"/>
                        </div>
                        <div className="mb-3">
                            <label for="question" className="form-label" style={{ color: "#FF735C" }}>Pertanyaan</label>
                            <textarea className="form-control" id="question" rows="8"></textarea>
                          </div>
                          <div className="mt-5">
                            <button type="submit" className="btn shadow fw-bold ms-auto" style={{ padding:"1rem 2rem",fontSize: "20px",backgroundColor: "#6CAE61",color: "#fff" }}>Kirim <i className="bi bi-send ms-2"></i></button>
                          </div>
                      </form>
                </div>
                <div className="col-sm-2 m-auto">
                    <hr style={{ color: "#285c52", height: "1.5px", transform: "rotate(90deg)" }} width="200" className="m-auto" />
                  </div>
                <div className="col-sm text-center">
                    <img src="img/5100169.png" alt="Hubuni Kami"  class="img-fluid"/> 
                    <p>Silahkan hubungi kami bila Anda membutuhkan bantuan. Kami siap melayani dengan cepat dan mudah via email atau sosial media kami. </p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default HubungiKami