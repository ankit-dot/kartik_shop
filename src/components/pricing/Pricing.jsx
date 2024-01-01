import React from "react";

import "./Pricing.css";
function Pricing() {
  return (
    <>
      <section className="pricing_section">
        <div className="pricing_heading">
          <span className="pricing_heading_text1">Pricing</span>

          <h1 className="pricing_heading_text2">
            Know More About our
            <br />
            <span className="pricing_heading_text2_blue">Shop</span>
          </h1>
          <p className="pricing_heading_text3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga ab
            accusamus sed fugiat!
          </p>
        </div>

        <div className="pricing_section_part2">
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 w-[85vw] mx-auto">
      {/* Basic Plan */}
      <div className="flex w-full mb-8 mr-8 drop-shadow-2xl sm:px-4 lg:mb-0">
        <div className="flex flex-col p-6 space-y-6 rounded-2xl border border-[#e5e7eb] sm:p-8 bg-white">
          <div className="space-y-2 font-bold">
            <h4 className="text-3xl md:text-4xl ">Basic Plan</h4>
            <p className="text-iso-gray-light font-normal pb-4">Billed monthly</p>
            <hr className="h-px w-full pb-8 border-[#e5e7eb]" />
            <span className="text-4xl md:text-6xl pricingGradient mt-4 text-transparent bg-clip-text font-semibold">$10<span className="text-3xl">/mth</span></span>
          </div>
          <p className="mt-3 font-normal leading-relaxed text-gray-600">Lorem ipsum dolor sit amet consectetur. Ut nulla nibh lacus et libero purus fusce.</p>
          <button type="button" className="pricingButton inline-block px-5 py-4 font-medium text-center rounded-full hover:border-none bg-[#000C1A] text-white pricingBtnDark6 ">Get started</button>
        </div>
      </div>

      {/* Business Plan */}
      <div className="flex w-full mb-8 mr-8 drop-shadow-2xl sm:px-4 lg:mb-0">
        <div className="flex flex-col p-6 space-y-6 rounded-2xl border border-[#e5e7eb] sm:p-8 bg-white">
          <div className="space-y-2 font-bold">
            <h4 className="text-3xl md:text-4xl ">Business Plan</h4>
            <p className="text-iso-gray-light font-normal pb-4">Billed annually</p>
            <hr className="h-px w-full pb-8 border-[#e5e7eb]" />
            <span className="text-4xl md:text-6xl pricingGradient mt-4 text-transparent bg-clip-text font-semibold">$20<span className="text-3xl">/mth</span></span>
          </div>
          <p className="mt-3 font-normal leading-relaxed text-gray-600">Lorem ipsum dolor sit amet consectetur. Ut nulla nibh lacus et libero purus fusce.</p>
          <button type="button" className="pricingButton inline-block px-5 py-4 font-medium text-center rounded-full hover:border-none bg-white/70 text-[#273647] font-medium ">Get started</button>
        </div>
      </div>

      {/* Enterprise Plan */}
      <div className="flex w-full mb-8 mr-8 drop-shadow-2xl sm:px-4 lg:mb-0">
        <div className="flex flex-col p-6 space-y-6 rounded-2xl border border-[#e5e7eb] sm:p-8 bg-white">
          <div className="space-y-2 font-bold">
            <h4 className="text-3xl md:text-4xl ">Enterprise Plan</h4>
            <p className="text-iso-gray-light font-normal pb-4">Billed annually</p>
            <hr className="h-px w-full pb-8 border-[#e5e7eb]" />
            <span className="text-4xl md:text-6xl pricingGradient mt-4 text text-transparent bg-clip-text font-semibold">$40<span className="text-3xl">/mth</span></span>
          </div>
          <p className="mt-3 font-normal leading-relaxed text-gray-600">Lorem ipsum dolor sit amet consectetur. Ut nulla nibh lacus et libero purus fusce.</p>
          <button type="button" className="pricingButton inline-block px-5 py-4 font-medium text-center rounded-full hover:border-none bg-white/70 text-[#273647] font-medium ">Get started</button>
        </div>
      </div>
    </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
