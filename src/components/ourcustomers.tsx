'use client';

import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function CustomersSection() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 1500,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 5 } },
      { breakpoint: 1024, settings: { slidesToShow: 4 } },
      { breakpoint: 768, settings: { slidesToShow: 3 } },
      { breakpoint: 480, settings: { slidesToShow: 2 } },
    ],
  };

  const logos = [
    { src: "/Imperial-auto.png", alt: "Imperial Auto" },
    { src: "/ALPGroup.png", alt: "ALP Group" },
    { src: "/pprm.webp", alt: "PPRM" },
    { src: "/Sambhv-logo.png", alt: "Sambhav" },
    { src: "/uvalidkoping.svg", alt: "Uvalidkoping" },
    { src: "/GPS-logo.svg", alt: "GPS" },
    { src: "/jai-sat.png", alt: "Jai Sat" },
    { src: "/jindal-steel-logo-.svg", alt: "Jindal Steel" },
    { src: "/VarunBeverages.png", alt: "Varun Beverages" },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="text-center mb-13">
        <h2 className="text-3xl md:text-4xl font-bold text-red-400 mb-2">
          Our Customers
        </h2>
        <p className="text-gray-600 text-sm md:text-base">
          Trusted by leading companies across industries
        </p>
      </div>

      <div className="slider-container px-4 md:px-10">
        <Slider {...settings}>
          {logos.map((logo) => (
            <div key={logo.alt} className="flex justify-center items-center">
              <div className="w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32 flex justify-center items-center bg-white rounded-lg shadow-sm hover:shadow-md transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-full h-full object-contain p-2"
                />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default CustomersSection;
