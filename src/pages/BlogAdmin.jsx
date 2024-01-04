import React from 'react'

export default function BlogAdmin(){
    return (
      <div className="main-wrapper ">
        <section className="page-title bg-1">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="block text-center">
                  <span className="text-white">Blog Admin</span>
                  <h1 className="text-capitalize mb-4 text-lg">Blog Admin</h1>
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="index.html" className="text-white">
                        Home
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <span className="text-white">/</span>
                    </li>
                    <li className="list-inline-item">
                      <a href="#" className="text-white-50">
                        Blog Admin
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Admin Login */}
        <section className="contact-form-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <form
                id="contact-form"
                className="contact__form"
              >               
                <h3 className="text-md mb-5">Blog Login</h3>
                <a className="btn btn-main" href='https://gggy.sanity.studio'>
                  Login
                </a>
              </form>
            </div>

          </div>
        </div>
      </section>
  
      </div>
    )
  }