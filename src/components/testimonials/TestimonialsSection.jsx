import React from 'react';
import './TestimonialsSection.css';

const TestimonialsSection = () => {
  return (
    <section className="mb-24 mt-24 md:mt-0 w-4/5 md:w-3/5 bg-white mx-auto">
      <div className="text-center md:pt-16 md:mt-14">
        <span className="badgeBoxShadow uppercase rounded-2xl text-sm lg:text-base font-medium leading-loose tracking-widest px-4 py-2 badgeGradientText text-transparent bg-clip-text">Testimonials</span>
        <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-iso-gray-dark pt-3 mt-2">You're in Great<br /><span className="text-gradient">Company</span></h1>
        <p className="font-normal text-lg lg:text-xl text-iso-gray-light pt-4 mt-2">We've got lots of customers across the world, we love to excel at adding new features for our customers!</p>
      </div>

      <div className="mt-12 md:mt-24 text-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="rounded-2xl border border-[#e5e7eb] border-solid md:col-span-2">
            <div className="grid grid-cols-1 lg:grid-cols-10 px-16 lg:py-10">
              <div className="lg:col-span-6 pt-8 lg:mt-4">
                <img
                  alt="CalendarPlan logo"
                  loading="lazy"
                  width="230"
                  height="180"
                  decoding="async"
                  data-nimg="1"
                  className="w-36"
                  style={{ color: 'transparent' }}
                  srcSet="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzjbmzag%2Fimage%2Fupload%2Fv1694679784%2FCalendarPlan_Logo.png&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzjbmzag%2Fimage%2Fupload%2Fv1694679784%2FCalendarPlan_Logo.png&amp;w=640&amp;q=75 2x"
                  src="/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdnzjbmzag%2Fimage%2Fupload%2Fv1694679784%2FCalendarPlan_Logo.png&amp;w=640&amp;q=75"
                />
                <p className="text-xl lg:text-3xl text-iso-gray-dark pt-4">
                  “This app has all the features I need to keep track of my tasks throughout the day, and to help streamline my workflow. Super glad to have discovered this!”
                </p>
                <div className="pt-4">
                  <h3 className="badgeGradientText inline font-medium text-transparent bg-clip-text">Jane Doe</h3>
                </div>
                <span>Founder, Calend90</span>
              </div>
              <div className="pt-8 lg:col-span-4 mb-4 lg:mb-0">
                <img
                  alt="Woman smiling and sitting on a chair"
                  loading="lazy"
                  width="500"
                  height="600"
                  decoding="async"
                  data-nimg="1"
                  className="w-full rounded-2xl h-[300px] md:h-[400px] lg:h-full lg:mx-8 object-cover"
                  style={{ color: 'transparent' }}
                  srcSet="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F17984671%2Fpexels-photo-17984671%2Ffree-photo-of-smiling-blonde-woman-sitting-backwards.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&amp;w=640&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F17984671%2Fpexels-photo-17984671%2Ffree-photo-of-smiling-blonde-woman-sitting-backwards.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&amp;w=1080&amp;q=75 2x"
                  src="/_next/image?url=https%3A%2F%2Fimages.pexels.com%2Fphotos%2F17984671%2Fpexels-photo-17984671%2Ffree-photo-of-smiling-blonde-woman-sitting-backwards.jpeg%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1&amp;w=1080&amp;q=75"
                />
              </div>
            </div>
          </div>

          <div className="border border-[#e5e7eb] border-solid rounded-3xl md:col-span-2 lg:col-span-1">
            <div className="px-12 py-8">
              <p className="text-lg text-[#182430] font-medium pt-4">
                “This app has been pivotal for helping our team collaborate on tasks and new plans, I'd definitely recommend this if you'd like an intuitive planner app.”
              </p>
              <div className="text-base pt-4">
                <h3 className="badgeGradientText inline font-medium text-transparent bg-clip-text">Faye E.</h3>
              </div>
              <span className="text-gray text-base">Founder, Quillbot</span>
            </div>
          </div>

          <div className="border border-[#e5e7eb] border-solid rounded-3xl md:col-span-2 lg:col-span-1">
            <div className="px-12 py-8">
              <p className="text-lg font-medium text-[#182430] pt-4">
                “I absolutely love the features provided, and that I can add extra notes for each task also. It really helped streamline my workflow, I'd definitely recommend it!”
              </p>
              <div className="text-base pt-4">
                <h3 className="badgeGradientText text-base inline font-medium text-transparent bg-clip-text">James Doe</h3>
              </div>
              <span className="text-gray text-base">Designer, Taskly</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
