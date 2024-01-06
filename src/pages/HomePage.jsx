import { useState } from 'react';
import FirstBox from '../components/Jumbotron/First';

export default function HomePage() {
  const [show, setShow] = useState(false);
  const [show1, setShow1] = useState(false);
  const [show2, setShow2] = useState(false);
  return (
    <>
      <section className="slider">
        <div className="container">
          <div className="row">
            <div className="col-lg-9 col-md-10">
              <div className="block">
                <span className="d-block mb-3 text-white text-capitalize">Prepare for new future</span>
                <h1 className="animated fadeInUp mb-5">
                  Our work is <br />
                  presentation of our <br />
                  capabilities.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="section">
        <div className="container">
          <div className="row ">
            <div className="col-lg-8">
              <div className="section-title">
                <span className="h6 text-color ">
                  We are creative &amp; expert people
                </span>
                <h2 className="mt-3 content-title">
                  We work with business &amp; provide solution to client with
                  their business problem
                </h2>
              </div>
            </div>
          </div>

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-bar-chart color-one"></i>
                <h4 className="mt-4 mb-3">Accountancy</h4>
                <p className="">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odit, ducimus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item mb-5 mb-lg-0">
                <i className="ti-stats-up color-one"></i>
                <h4 className="mt-4 mb-3">Advies</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odit, ducimus.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="intro-item">
                <i className="ti-blackboard color-one"></i>
                <h4 className="mt-4 mb-3">Risk Management</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Odit, ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <Jumbotron /> */}
      <section className="section ">
        <div className="container ">
          <FirstBox />

          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="intro-item mb-5 mb-lg-0" style={{ display: 'flex', flexDirection: 'column' }}>
                <i className="ti-bar-chart color-one"></i>
                <h4 className="mt-4 mb-3 color-one">Accountancy</h4>
                <div
                  style={{
                    padding: '7px',
                    paddingTop: '12px',
                  }}
                >
                  <p
                    style={{
                      height: !show1 ? '290px' : '100%',
                      overflow: 'hidden',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ad facere veniam velit voluptate corrupti laborum esse, hic quas
                    rerum, quod ipsum et qui quae possimus molestias nihil numquam fuga consequatur. Nostrum neque,
                    reiciendis laboriosam exercitationem totam praesentium asperiores voluptas expedita molestias quod
                    culpa, explicabo at nemo animi nisi fugit hic quas rerum, quod ipsum et qui quae possimus molestias
                    nihil numquam fuga consequatur. Nostrum neque, reiciendis laboriosam exercitationem totam
                    praesentium asperiores voluptas expedita molestias quod culpa, explicabo at nemo animi nisi fugit
                  </p>
                  <div className="mt-2 color-one" onClick={() => setShow1(!show1)} style={{ cursor: 'pointer' }}>
                    {show1 ? 'Show Less' : 'Show More'}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="intro-item mb-5 mb-lg-0 " style={{ display: 'flex', flexDirection: 'column' }}>
                <i className="ti-stats-up color-one"></i>
                <h4 className="mt-4 mb-3 color-one">Advies</h4>
                <div
                  style={{
                    padding: '7px',
                    paddingTop: '12px',
                  }}
                >
                  <p
                    style={{
                      height: !show ? '290px' : '100%',
                      overflow: 'hidden',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ad facere veniam velit voluptate corrupti laborum esse, hic quas
                    rerum, quod ipsum et qui quae possimus molestias nihil numquam fuga consequatur. Nostrum neque,
                    reiciendis laboriosam exercitationem totam praesentium asperiores voluptas expedita molestias quod
                    culpa, explicabo at nemo animi nisi fugit hic quas rerum, quod ipsum et qui quae possimus molestias
                    nihil numquam fuga consequatur. Nostrum neque, reiciendis laboriosam exercitationem totam
                    praesentium asperiores voluptas expedita molestias quod culpa, explicabo at nemo animi nisi fugit
                  </p>
                  <div className="mt-2 color-one" onClick={() => setShow(!show)} style={{ cursor: 'pointer' }}>
                    {show ? 'Show Less' : 'Show More'}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="intro-item" style={{ display: 'flex', flexDirection: 'column' }}>
                <i className="ti-blackboard color-one"></i>
                <h4 className="mt-4 mb-3 color-one">Risk Management</h4>
                <div
                  style={{
                    padding: '7px',
                    paddingTop: '12px',
                  }}
                >
                  <p
                    style={{
                      height: !show2 ? '290px' : '100%',
                      overflow: 'hidden',
                    }}
                  >
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, ducimus. Lorem ipsum dolor sit amet
                    consectetur adipisicing elit. Ad facere veniam velit voluptate corrupti laborum esse, hic quas
                    rerum, quod ipsum et qui quae possimus molestias nihil numquam fuga consequatur. Nostrum neque,
                    reiciendis laboriosam exercitationem totam praesentium asperiores voluptas expedita molestias quod
                    culpa, explicabo at nemo animi nisi fugit hic quas rerum, quod ipsum et qui quae possimus molestias
                    nihil numquam fuga consequatur. Nostrum neque, reiciendis laboriosam exercitationem totam
                    praesentium asperiores voluptas expedita molestias quod culpa, explicabo at nemo animi nisi fugit
                  </p>
                  <div className="mt-2 color-one" onClick={() => setShow2(!show2)} style={{ cursor: 'pointer' }}>
                    {show2 ? 'Show Less' : 'Show More'}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ width: '100%', textAlign: 'center' }} className="mt-4">
            <a className="btn btn-small btn-main btn-round mr-4 mt-4" href="/dienstverlening">
              Button
            </a>
          </div>
        </div>
      </section>

      <section className="section cta">
        <div className="container">
          <div className="row">
            <div className="col-xl-5 col-lg-6">
              <div className="cta-item  bg-white p-5 rounded">
                <span className="h6 text-color">We create for you</span>
                <h2 className="mt-2 mb-4">Entrust Your Project to Our Best Team of Professionals</h2>
                <p className="lead mb-4">Have any project on mind? For immidiate support :</p>
                <h3>
                  <i className="ti-mobile mr-3 text-color"></i>+23 876 65 455
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mt-70 position-relative">
        <div className="container">
          <div className="cta-block-2 bg-gray p-5 rounded border-1">
            <div className="row justify-content-center align-items-center ">
              <div className="col-lg-7">
                <span className="text-color">For Every type business</span>
                <h2 className="mt-2 mb-4 mb-lg-0">Entrust Your Project to Our Best Team of Professionals</h2>
              </div>
              <div className="col-lg-4">
                <a href="/contact" className="btn btn-main btn-round-full float-lg-right ">
                  Contact
                </a>
              </div>
            </div>
          </div>
          <video width="100%" src="/images/video.mp4" autoPlay muted loop></video>
        </div>
      </section>

      {/* <section className="section latest-blog bg-2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7 text-center">
              <div className="section-title">
                <span className="h6 text-color">Latest News</span>
                <h2 className="mt-3 content-title text-white">
                  Latest articles to enrich knowledge
                </h2>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <LatestBlog />
          </div>
          <button className="btn btn-small btn-main btn-round-full" style={{ zIndex: 1 }}>
            <Link to="/blogs" className="text-white bold">
              More articles
            </Link>
          </button>
        </div>
      </section> */}
    </>
  );
}
