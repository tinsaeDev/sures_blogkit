import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TimelineCarousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(23);
  const [sliderRef, setSliderRef] = useState(null);

  const paragraphs = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    // Add more paragraphs as needed
  ];

  const getRandomParagraph = () => {
    // Generate a random index to pick a paragraph from the array
    const randomIndex = Math.floor(Math.random() * paragraphs.length);
    return paragraphs[randomIndex];
  };

  const years = Array.from({ length: 24 }, (_, index) => ({
    year: 2000 + index,
    data: [
      {
        heading: `${2000 + index} Nov - Dec`,
        content: getRandomParagraph(),
      },
      {
        heading: `${2000 + index} Sept - Oct`,
        content: getRandomParagraph(),
      },
      {
        heading: `${2000 + index} Jan - July`,
        content: getRandomParagraph(),
      },
    ],
  }));

  const yeardata = [
    {
      year: 2019,
      content: [
        {
          heading: "Heading",
          title: "2005 Jan - May",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2005 June - July",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2005 Sept - Oct",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2005 Nov - Dec",
          content: getRandomParagraph(),
        },
      ],
    },
    {
      year: 2020,
      content: [
        {
          heading: "Heading",
          title: "2006 Jan - May",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 June - July",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Sept - Oct",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Nov - Dec",
          content: getRandomParagraph(),
        },
      ],
    },
    {
      year: 2021,
      content: [
        {
          heading: "Heading",
          title: "2006 Jan - May",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 June - July",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Sept - Oct",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Nov - Dec",
          content: getRandomParagraph(),
        },
      ],
    },
    {
      year: 2022,
      content: [
        {
          heading: "Heading",
          title: "2006 Jan - May",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 June - July",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Sept - Oct",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Nov - Dec",
          content: getRandomParagraph(),
        },
      ],
    },
    {
      year: 2023,
      content: [
        {
          heading: "Heading",
          title: "2006 Jan - May",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 June - July",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Sept - Oct",
          content: getRandomParagraph(),
        },
        {
          heading: "Heading",
          title: "2006 Nov - Dec",
          content: getRandomParagraph(),
        },
      ],
    },
  ];

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
    slidesToShow: 7,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setActiveIndex(next),
    afterChange: (index) => {
      console.log(index);
    },

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

      <p style={{ textAlign: "center" }}> {years[activeIndex].paragraph} </p>

      <div className="container">
        <div className="row portfolio-gallery">
          <div
            className="p-4  mb-5"
            style={{ borderRadius: "35px", border: "3px solid  #65A8DC" }}
          >
            {yeardata[activeIndex]?.content.map((item) => (
              <div key={item.heading} className="mb-5">
                <h5>{item.title}</h5>
                <h4>{item.heading}</h4>
                <p>{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineCarousel;
