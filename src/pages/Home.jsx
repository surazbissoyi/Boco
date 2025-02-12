import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { IoArrowBackOutline } from "react-icons/io5";
import axios from "axios";

const Home = () => {
  const image = "/tick.svg";
  const [scrollPosition, setScrollPosition] = useState(0);
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  const slideLeft = () => {
    const newPosition = Math.min(scrollPosition + 400, 0);
    setScrollPosition(newPosition);
  };

  const slideRight = () => {
    const slidesContainer = document.querySelector(".slides-container");
    const containerWidth = slidesContainer?.scrollWidth || 0;
    const viewportWidth = slidesContainer?.offsetWidth || 0;
    const maxScroll = -(containerWidth - viewportWidth);
    const newPosition = Math.max(scrollPosition - 400, maxScroll);
    setScrollPosition(newPosition);
  };

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          "http://localhost:1337/api/home?populate=*"
        );
        setContent(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching content:", error);
        setLoading(false);
      }
    };

    fetchContent();
  }, []);

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );

  return (
    <div>
      <div className="flex gap-4 flex-col md:flex-row lg:pl-16">
        <div className="w-full md:w-5/12 h-fit md:hidden">
          <img
            src={`http://localhost:1337${content?.hero_mobile_image?.url}`}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full md:w-7/12 mt-0 sm:mt-28 px-4 md:px-8 lg:px-5">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl leading-tight md:leading-[55px] font-semibold">
            {content?.hero_title}
          </h1>
          <p className="text-lg sm:text-xl leading-[25px] my-4 sm:my-5">
            {content?.hero_description}
          </p>
          <div className="flex flex-col gap-3 sm:gap-4 font-semibold text-base sm:text-lg my-6 sm:my-10">
            <div className="flex gap-3 sm:gap-4 items-center">
              <img src={image} alt="" className="w-6 sm:w-auto" />
              <h3>Unmatched Speed & Stability</h3>
            </div>
            <div className="flex gap-3 sm:gap-4 items-center">
              <img src={image} alt="" className="w-6 sm:w-auto" />
              <h3>Build for Conversions</h3>
            </div>
            <div className="flex gap-3 sm:gap-4 items-center">
              <img src={image} alt="" className="w-6 sm:w-auto" />
              <h3>Reduced App Stack & Developer Dependencies</h3>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4 w-full sm:w-auto">
            <button className="border font-semibold border-[#140055] rounded-full items-center px-6 sm:px-10 py-3 w-full sm:w-auto">
              Audit My Website
            </button>
            <div className="flex border rounded-full bg-[#140055] text-white items-center gap-2 w-full sm:w-fit justify-between hover:bg-[#1a006b] transition-colors">
              <button className="pl-6 sm:pl-10 pr-4 py-[16px] font-semibold text-md">
                Talk to Us
              </button>
              <div className="bg-white rounded-full text-black p-3 mr-1">
                <MdArrowOutward className="text-[17px]" />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full sm:w-5/12 h-fit hidden md:block">
          <img
            src={`http://localhost:1337${content?.hero_image?.url}`}
            alt="Hero"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      <div className="relative w-full overflow-hidden border-b border-purple-300">
        <div className="flex items-center gap-2 w-fit ml-10 mt-10 sm:ml-[130px] relative before:content-[''] before:absolute before:w-[130px] before:h-[1px] before:bg-purple-300 before:left-[-140px] before:top-1/2 after:content-[''] after:absolute after:w-[2000px] after:h-[1px] after:bg-purple-300 after:left-[105%] after:top-1/2">
          <div className="flex">
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
            <img src="/star.png" alt="" />
          </div>
          <p>90+ Brands & Counting</p>
        </div>
        <div className="flex mt-10 pb-10 items-center gap-20 animate-scroll whitespace-nowrap">
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={num}
              src={`/brand/brand${num}.png`}
              alt={`Brand ${num}`}
              className="w-40 object-contain inline-block"
            />
          ))}
          {[1, 2, 3, 4, 5, 6].map((num) => (
            <img
              key={`duplicate-${num}`}
              src={`/brand/brand${num}.png`}
              alt={`Brand ${num}`}
              className="w-40 object-contain inline-block"
            />
          ))}
        </div>
      </div>

      <div className="my-20 px-4 md:px-8 lg:px-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6">
            {content?.solutions_title}
          </h2>
          <p className="text-lg md:text-xl max-w-6xl mx-auto">
            {content?.solutions_description}
          </p>
        </div>

        <div className="relative">
          <div className="absolute right-0 bottom-8 flex gap-2 z-10 md:hidden">
            <button
              onClick={slideLeft}
              className="bg-purple-100 hover:bg-purple-200 p-4 rounded-full transition-colors"
              aria-label="Previous slide"
            >
              <IoArrowBackOutline className="text-2xl" />
            </button>
            <button
              onClick={slideRight}
              className="bg-purple-100 hover:bg-purple-200 p-4 rounded-full transition-colors"
              aria-label="Next slide"
            >
              <IoArrowBackOutline className="text-2xl rotate-180" />
            </button>
          </div>

          <button
            onClick={slideLeft}
            className="absolute left-0 bottom-8 -translate-y-1/2 z-10 bg-purple-100 hover:bg-purple-200 p-4 rounded-full transition-colors hidden md:block"
            aria-label="Previous slide"
          >
            <IoArrowBackOutline className="text-2xl" />
          </button>

          <div className="overflow-hidden lg:mx-[70px] h-[500px]">
            <div
              className="flex gap-3 transition-transform duration-300 slides-container"
              style={{ transform: `translateX(${scrollPosition}px)` }}
            >
              {content?.solutions_images?.map((image, index) => (
                <div
                  key={index}
                  className="min-w-[180px] md:min-w-[220px] rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src={`http://localhost:1337${image.url}`}
                    alt={`Portfolio ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={slideRight}
            className="absolute right-0 bottom-8 -translate-y-1/2 z-10 bg-purple-100 hover:bg-purple-200 p-4 rounded-full transition-colors hidden md:block"
            aria-label="Next slide"
          >
            <IoArrowBackOutline className="text-2xl rotate-180" />
          </button>
        </div>

        <div className="sm:mt-40">
          <h2 className="text-2xl sm:text-4xl font-semibold text-center my-20">
            Enhance customer experience <br />
            by focusing on the details that matters most
          </h2>

          <div className="grid md:grid-cols-3 gap-6 px-4">
            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-300">
              <img src="/logo/image1.png" alt="" className="mb-6 w-40" />
              <h3 className="text-2xl font-semibold mb-6">
                Conversion Rate
                <br />
                Optimisation
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Design Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Speed Optimization</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>On Page SEO</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Tech Maintenance & Support</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-300">
              <img src="/logo/image2.png" alt="" className="mb-6 w-40" />
              <h3 className="text-2xl font-semibold mb-6">
                UI / UX
                <br />
                Design
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Landing Pages</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Visual Identity (Web & Digital)</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Icons & Illustrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Assets & Components</span>
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-3xl border border-purple-300">
              <img src="/logo/image3.png" alt="" className="mb-6 w-40" />
              <h3 className="text-2xl font-semibold mb-6">
                Web
                <br />
                Development
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Code & E-commerce Customization</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Third Party & Custom Apps</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Front End Development</span>
                </li>
                <li className="flex items-center gap-3">
                  <img src="/tick.svg" alt="" className="w-5" />
                  <span>Back end & CMS Setup</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-20">
        <h1 className="text-center text-4xl font-semibold py-20">
          Read Our Recent Case Studies
        </h1>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center px-4 sm:px-0">
          <img
            src="/case/image1.png"
            alt=""
            className="w-[550px] object-cover"
          />
          <img
            src="/case/image2.png"
            alt=""
            className="w-[550px] object-cover"
          />
        </div>
        <button className="px-16 py-4 rounded-full border border-[#140055] text-[#140055] font-semibold text-lg mx-auto block my-16">
          View Case Studies
        </button>
      </div>

      <div className="mt-20 bg-purple-50 pb-10">
        <h1 className="text-center sm:text-5xl text-2xl font-semibold pt-16 pb-12">
          Let's Get Started
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row gap-4 w-full sm:w-auto px-4 sm:px-0">
          <div className="flex border rounded-full bg-[#140055] text-white items-center gap-2 w-full sm:w-fit justify-between hover:bg-[#1a006b] transition-colors">
            <button className="pl-6 sm:pl-10 pr-4 py-[16px] font-semibold text-md">
              Book a call
            </button>
            <div className="bg-white rounded-full text-black p-3 mr-1">
              <MdArrowOutward className="text-[17px]" />
            </div>
          </div>
          <button className="border font-semibold border-[#140055] rounded-full items-center px-6 sm:px-10 py-3 w-full sm:w-auto">
            Audit Your Website
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
