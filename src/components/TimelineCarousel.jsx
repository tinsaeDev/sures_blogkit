import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimelineCarousel = () => {
  const yeardata = [
    {
      year: 2019,
      content: [
        {
          heading: "tk co ltd",
          title: "November 2019 – Juni 2020",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgk  , uu mm  , kkkddfgghh)",
            "jfjfjjfjjf jn  ,  fjfjfjfjfjfj;",
            "gfgfhfhhhj, hfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
      ],
    },
    {
      year: 2020,
      content: [
        {
          heading: "tk co ltd",
          title: "November 2019 – Juni 2020",
          extraline: "gffhfhdfhf",
          content: [
            "degfhf jgkgkg  kkkkddfgghh)",
            "jfjfjjfjj fjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
        {
          heading: "raj textile account",
          title: "september 2020 – december 2020",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
      ],
    },
    {
      year: 2021,
      content: [
        {
          heading: "Abc group co ltd",
          title: "november 2020 – juni 21",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
        {
          heading: "Abc1 group co ",
          title: "september  2021 – jan 22",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
      ],
    },
    {
      year: 2022,
      content: [
        {
          heading: "Abc1 group co ",
          title: "september  2021 – jan 22",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
        {
          heading: "defc up co ",
          title: "september 2022 – december 2022",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
        {
          heading: "sss up co ",
          title: "oktober 2022 – januari 2023",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
      ],
    },
    {
      year: 2023,
      content: [
        {
          heading: "sss up co ",
          title: "oktober 2022 – januari 2023",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
        {
          heading: "dfedd cv",
          title: "november 2023 – december 2023",
          extraline: "gffhfhdfhf",
          content: [
            "degfhfjgkgkgkkkkddfgghh)",
            "jfjfjjfjjfjfjfjfjfjfjfj;",
            "gfgfhfhhhjhfhfhjfjfj",
            "hfhhfhhfhhfhhfhhfhfhfh",
            "hfhfhhfhhfhfhhhfhhfhhfhfh",
            "fhfhfhfhhhfhfhfhfhfhfhfh",
          ],
        },
        {
          heading: "ssss cv",
          title: "september 2023 – heden",
          extraline: "gffhfhdfhf",
          content: ["dead", "sldkfj", "sldkfj", "sldkfjslkfj", "sldkfjslkfj"],
        },
      ],
    },
  ];
  const [activeIndex, setActiveIndex] = React.useState(yeardata.length - 2);
  const [sliderRef, setSliderRef] = useState(null);

  useEffect(() => {
    // After the component is mounted, set the last slide as active
    if (sliderRef) {
      sliderRef.slickGoTo(activeIndex);
    }
  }, [sliderRef, activeIndex]);

  const handleSlideClick = (index) => {
    setActiveIndex(index);
    sliderRef.slickGoTo(index);
  };

  //   const years = Array.from({ length: 23 }, (_, index) => 2000 + index);

  const NextArrow = ({ onClick }) => {
    return (
      <div className="arrow next" onClick={onClick}>
        <i className="fas fa-chevron-right"></i>
      </div>
    );
  };

  const PrevArrow = ({ onClick }) => {
    return (
      <div className="arrow prev" onClick={onClick}>
        <i className="fas fa-chevron-left"></i>
      </div>
    );
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: yeardata.length > 7 ? 7 : yeardata.length > 5 ? 5 : 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    touchMove: true,
  };

  const getClassName = (index) => {
    if (index === activeIndex) {
      return "active-slide";
    } else if (index - 1 === activeIndex || index + 1 === activeIndex) {
      return "adjacent";
    } else {
      return "inactive";
    }
  };

  return (
    <div className="timeline-carousel">
      <Slider {...settings} ref={(slider) => setSliderRef(slider)}>
        {yeardata.map((year, index) => (
          <div className="timeline-slide1" key={index}>
            <div className="slide-border"></div>
            <div
              className={`year ${getClassName(index)}`}
              onClick={() => handleSlideClick(index)}
            >
              <span
                className={`text-year ${
                  (activeIndex + 1 === index ||
                    activeIndex === index ||
                    activeIndex - 1 === index) &&
                  "active-year"
                }`}
              >
                {year.year}
              </span>
            </div>
            <div className="slide-border"></div>
          </div>
        ))}
      </Slider>

      <div className="container mt-4">
        <div className="row portfolio-gallery">
          <div
            className="p-4  mb-5"
            style={{
              borderRadius: "35px",
              border: "3px solid #65A8DC",
              width: "100%",
            }}
          >
            {yeardata[activeIndex].content.map((item) => (
              <div key={item.heading} className="mb-3">
                <h5 className="mb-0">{item.title}</h5>
                <h4>{item.heading}</h4>
                <p style={{ marginBottom: 0 }}>{item.extraline}</p>
                <ul>
                  {item.content.map((item1, index) => (
                    <li key={index} style={{ marginBottom: 0 }}>
                      {item1}
                    </li>
                  ))}
                </ul>
                {/* <p>{item.content}</p> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCarousel;
