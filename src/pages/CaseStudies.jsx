import React, { useState, useEffect } from "react";
import axios from "axios";

const CaseStudies = () => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get(
          "https://my-strapi-backend-production-d567.up.railway.app/api/home?populate=*"
        );
        setContent(response.data.data);
        console.log(response.data.data);
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
    <div className="lg:mb-40 mb-20">
      <div className="text-center mt-20 lg:mb-20">
        <h2 className="text-gray-500 font-semibold text-2xl mb-5 lg:mb-10">
          Case Studies
        </h2>
        <h1 className="text-3xl lg:text-5xl font-semibold mb-5 lg:mb-10">
          {content.case_title}
        </h1>
        <p className="text-lg lg:text-2xl mb-10 w-[85%] mx-auto text-left">
          {content.case_description}
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-10 items-center justify-center px-4 sm:px-0">
        <img
          src={`https://my-strapi-backend-production-d567.up.railway.app${content?.case_image1?.url}`}
          alt=""
          className="w-[550px] object-cover"
        />
        <img
          src={`https://my-strapi-backend-production-d567.up.railway.app${content?.case_image2?.url}`}
          alt=""
          className="w-[550px] object-cover"
        />
      </div>
    </div>
  );
};

export default CaseStudies;
