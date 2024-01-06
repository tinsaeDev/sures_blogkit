import FirstBox from '../components/Jumbotron/First';

export default function OverMij() {
  return (
    <div className="main-wrapper ">
      <section className="page-title bg-OverMij">
        <img
          src="../images/bg/OverMij.jpeg"
          style={{
            visibility: 'hidden',
            width: '100%',
            height: 'auto',
          }}
        />
        <div
          className="container"
          style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">My Company Over Mij</span>
                <h1 className="text-capitalize mb-4 text-lg">My Company Over Mij</h1>
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
                      My Company Over Mij
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <FirstBox />
        </div>

        <div className="container">
          <div className=" ">
            <div className=" px-5">
              <div className="pr-3 ">
                <i className="ti-quote-left text-color" style={{ fontSize: '12px' }}></i>
                <p style={{ margin: 0 }}>
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur.
                </p>
              </div>
            </div>
          </div>
          <div
            // className="col-xl-6 col-lg-6 col-sm-12 overmij-content-left"
            style={{ float: 'right', margin: '5px', width: '50%' }}
          >
            <img
              src="https://demo.themefisher.com/megakit-bootstrap/images/about/home-7.jpg"
              alt="img"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
          <div className=" ">
            <div className=" px-5">
              <div className="pr-3 mb-5 mb-lg-0 pt-4">
                <p className="m-0 mt-4 mb-2">
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed
                </p>
                <p className="m-0 mb-2">
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed
                </p>
                <p className="m-0 mb-2">
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed
                </p>
                <p className="m-0 mb-2">
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed
                </p>
                <p className="m-0 mb-2">
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed
                </p>
                <p className="m-0 mb-2">
                  We provide consulting services in the area of IFRS and management reporting, helping companies to
                  reach their highest level. We optimize business processes, making them easier. Lorem ipsum dolor sit
                  amet, consectetur adipiscing elit, sed
                </p>
                <i className="ti-quote-right text-color" style={{ fontSize: '12px' }}></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
