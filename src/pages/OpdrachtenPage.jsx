import TimelineCarousel from "../components/TimelineCarousel";
import FirstBox from "../components/Jumbotron/First";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Opdrachten() {
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

  // const handleWorkFilter = (item) => {
  //   setActiveFilter(item);
  // };

  //   const goPrevious = () =>{
  //     if(currentItems.includes(items[0])){
  //       return;
  //     }
  //     setCurrentItems([...items].slice([...items].indexOf(activeFilter) - 5, [...items].indexOf(activeFilter)))
  //   }

  //   const goNext = () =>{
  //     if(currentItems.includes(items[items.length - 1])){
  //       return;
  //     }
  //     setCurrentItems([...items].slice([...items].indexOf(activeFilter), ([...items].indexOf(activeFilter) + 5)))
  //   }

  return (
    <div className="main-wrapper ">
      <section className="page-title bg-Opdrachten">

      <img
          src="../images/bg/Opdrachten.jpeg"
          style={{
            visibility: 'hidden',
            width: '100%',
            height: 'auto',
          }}
        />
        
        <div className="container"           style={{
            position: 'absolute',
            top: 0,
            width: '100%',
            height: '100%',
            maxWidth: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <div className="row">
            <div className="col-md-12">
              <div className="block text-center">
                <span className="text-white">Latest works</span>
                <h1 className="text-capitalize mb-4 text-lg">
                  Portefeuille Opdrachten
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

      <section className="section pb-0">
        <div className="container">
          <FirstBox />
        </div>
      </section>

      <section className="section portfolio pb-0 pt-0">
        {/* <div className="container">
          <div className="w-100">
            <div className="text-center w-100">
              <div className="section-title d-flex justify-content-between align-items-center" style={{ backgroundColor: "#0275d8", borderRadius: "15px" }}>
              <>
                  <span onClick={goPrevious} style={{ color: "white", cursor: "pointer", padding: 15, margin: 10 }}>Previous</span>
                  {currentItems.map((item, index) => (
                    <> 
                        <button
                          key={index}
                          onClick={() => handleWorkFilter(item, index)}
                          className={`${activeFilter === item ? 'btn-activeTimeline' : ''}`}
                          style={{ padding: 15, margin: 10, cursor: "pointer", border: "none", borderRadius: "50%" }}
                        >
                          {item}
                        </button>
                      </>
                  ))}
                  <span onClick={goNext} style={{ color: "white", cursor: "pointer", padding: 15, margin: 10 }}>Next</span>
              </>
              </div>
            </div>
          </div>
        </div> */}

        <TimelineCarousel />
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
