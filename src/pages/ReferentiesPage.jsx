import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ReferentiesPage() {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const setting = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    autoplay: true,
  };

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick} style={{ right: "-100px" }}>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick} style={{ left: "-100px" }}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const CustomDot = ({ onClick, index }) => {
    return (
      <div
        role="button"
        style={{
          width: "12px",
          height: "12px",
          background: index === activeSlideIndex ? "black" : "gray", // Set your active and inactive dot colors
          borderRadius: "50%",
          display: "inline-block",
          margin: "0 5px", // Adjust the spacing between dots
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    );
  };

  const settings2 = {
    dots: true,
    slidesToScroll: 1,
    slidesToShow: 2,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    customPaging: (i) => <CustomDot key={i} index={i} />,
    beforeChange: (current, next) => setActiveSlideIndex(next),
  };

  return (
    <div className="main-wrapper ">
      <section className="page-title bg-1">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Latest works</span>
                <h1 className="text-capitalize mb-4 text-lg">
                  Portefeuille Referenties
                </h1>
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
                      Latest works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container section">
          <div className="row">
            <div className="col-lg-7">
              <div className="section-title">
                <span className="h6 text-color">Clients testimonial</span>
                <h2 className="mt-3 content-title">
                  Check whats our clients say about us
                </h2>
              </div>
            </div>
          </div>

          <div style={{ padding: "0px 50px" }}>
            <Slider {...settings2} autoplaySpeed={10000}>
              <div
                className="testimonia-item p-2 pr-4 pl-4"
                style={{
                  width: "480px",
                  marginRight: "0px 30px",
                }}
              >
                <i className="ti-quote-left text-color"></i>
                <div className="testimonial-item-content">
                  <p className="testimonial-text">
                    Quam 1 maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti.
                  </p>
                  <div className="testimonial-author">
                    <h5 className="mb-o text-capitalize">James Watson</h5>
                    <p>Excutive Director,themefisher</p>
                  </div>
                </div>
              </div>

              <div
                className="testimonia-item p-2 pr-4 pl-4"
                style={{
                  width: "480px",
                  marginRight: "0px 30px",
                }}
              >
                <i className="ti-quote-left text-color"></i>
                <div className="testimonial-item-content">
                  <p className="testimonial-text">
                    Quam 2 maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti.
                  </p>
                  <div className="testimonial-author">
                    <h5 className="mb-o text-capitalize">James Watson</h5>
                    <p>Excutive Director,themefisher</p>
                  </div>
                </div>
              </div>

              <div
                className="testimonia-item p-2 pr-4 pl-4"
                style={{
                  width: "480px",
                  marginRight: "0px 30px",
                }}
              >
                <i className="ti-quote-left text-color"></i>
                <div className="testimonial-item-content">
                  <p className="testimonial-text">
                    this different Quam 3 maiores perspiciatis temporibus odio
                    reiciendis error alias debitis atque consequuntur natus
                    iusto recusandae numquam corrupti. Quam 3 maiores
                    perspiciatis temporibus odio reiciendis error alias debitis
                    atque consequuntur natus iusto recusandae numquam corrupti.
                    Quam 3 maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti. Quam 3 maiores perspiciatis temporibus
                    odio reiciendis error alias debitis atque consequuntur natus
                    iusto recusandae numquam corrupti. Quam 3 maiores
                    perspiciatis temporibus odio reiciendis error alias debitis
                    atque consequuntur natus iusto recusandae numquam corrupti.
                  </p>
                  <div className="testimonial-author">
                    <h5 className="mb-o text-capitalize">James Watson</h5>
                    <p>Excutive Director,themefisher</p>
                  </div>
                </div>
              </div>

              <div
                className="testimonia-item p-2 pr-4 pl-4"
                style={{
                  width: "480px",
                  marginRight: "0px 30px",
                }}
              >
                <i className="ti-quote-left text-color"></i>
                <div className="testimonial-item-content">
                  <p className="testimonial-text">
                    Quam 4 maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti. Quam 4 maiores perspiciatis temporibus
                    odio reiciendis error alias debitis atque consequuntur natus
                    iusto recusandae numquam corrupti. Quam 4 maiores
                    perspiciatis temporibus odio reiciendis error alias debitis
                    atque consequuntur natus iusto recusandae numquam corrupti.
                    Quam 4 maiores perspiciatis temporibus odio reiciendis error
                    alias debitis atque consequuntur natus iusto recusandae
                    numquam corrupti. Quam 4 maiores perspiciatis temporibus
                    odio reiciendis error alias debitis atque consequuntur natus
                    iusto recusandae numquam corrupti.
                  </p>
                  <div className="testimonial-author">
                    <h5 className="mb-o text-capitalize">James Watson</h5>
                    <p>Excutive Director,themefisher</p>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
          <hr className="mt-5" />
        </div>
      </section>

      <section className="container client-logos">
        <div className="mb-5">
          <h3 className="text-center">Clienten</h3>
        </div>
        <Slider {...setting} autoplay={true} autoplayDelay={0}>
          <div style={{ width: 200 }}>
            <img
              src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ width: 200 }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/image4_d1fca459-dfbc-47e9-8633-eb4e0aeffa98.jpg?v=1666365284"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ width: 200 }}>
            <img
              src="https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ width: 200 }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
          <div style={{ width: 200 }}>
            <img
              src="https://images.hindustantimes.com/tech/img/2023/09/21/1600x900/fb_1695273515215_1695273522698.jpg"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ width: 200 }}>
            <img
              src="https://cdn.shopify.com/s/files/1/0070/7032/files/image4_d1fca459-dfbc-47e9-8633-eb4e0aeffa98.jpg?v=1666365284"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ width: 200 }}>
            <img
              src="https://images.crowdspring.com/blog/wp-content/uploads/2022/08/18131304/apple_logo_black.svg_.png"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>

          <div style={{ width: 200 }}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/020/336/373/original/netflix-logo-netflix-icon-free-free-vector.jpg"
              alt="img1"
              width="100%"
              height={100}
              style={{ objectFit: "contain" }}
            />
          </div>
        </Slider>

        {/* <ReactSimplyCarousel
              activeSlideIndex={activeSlideIndex}
              onRequestChange={setActiveSlideIndex}
              itemsToShow={4}
              itemsToScroll={1}
              autoplay={true}
              autoplayDelay={20000}
              containerProps={{
                style: {
                  width: "100%",
                  // justifyContent: "space-between",
                  // userSelect: "none"
                },  
              }}
              forwardBtnProps={{
                style: {
                  alignSelf: 'center',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  height: 30,
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <span>{`>`}</span>,
              }}
              backwardBtnProps={{
                style: {
                  alignSelf: 'center',
                  background: 'black',
                  border: 'none',
                  borderRadius: '50%',
                  color: 'white',
                  cursor: 'pointer',
                  fontSize: '20px',
                  height: 30,
                  lineHeight: 1,
                  textAlign: 'center',
                  width: 30,
                },
                children: <span>{`<`}</span>,
              }}
              responsiveProps={[
                {
                  itemsToShow: 2,
                  itemsToScroll: 2,
                  minWidth: 768,
                },
              ]}
              speed={2000}
              disableNavIfAllVisible={true}
              
              hideNavIfAllVisible={true}
            >
               
      </ReactSimplyCarousel> */}
      </section>
    </div>
  );
}
