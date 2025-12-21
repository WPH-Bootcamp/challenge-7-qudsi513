import React from "react";

const CompanyLogos = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-semibold">
          Trusted by Global Innovators & Leading Brands
        </h2>
      </div>

      <div className="flex justify-center space-x-8">
        <img
          src="/assets/logo-upwork.svg"
          alt="Upwork Logo"
          className="h-12 filter grayscale"
        />
        <img
          src="/assets/logo-zoom.svg"
          alt="Zoom Logo"
          className="h-12 filter grayscale"
        />
        <img
          src="/assets/logo-postman.svg"
          alt="Postman Logo"
          className="h-12 filter grayscale"
        />
        <img
          src="/assets/logo-databricks.svg"
          alt="Databricks Logo"
          className="h-12 filter grayscale"
        />
        <img
          src="/assets/logo-airbnb.svg"
          alt="Airbnb Logo"
          className="h-12 filter grayscale"
        />
        <img
          src="/assets/logo-dropbox.svg"
          alt="Dropbox Logo"
          className="h-12 filter grayscale"
        />
        <img
          src="/assets/logo-paypal.svg"
          alt="Paypal Logo"
          className="h-12 filter grayscale"
        />
      </div>
    </section>
  );
};

export default CompanyLogos;
