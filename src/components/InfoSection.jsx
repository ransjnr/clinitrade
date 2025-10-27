import React from "react";

function InfoSection() {
  return (
    <section>
      <div className="mx-auto max-w-screen-2xl px-4 md:px-6 lg:px-8 py-8 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 lg:h-screen lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt=""
                src="/image-1.png"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-6 sm:p-12 lg:p-24">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold">
                Explore Advanced Biomedical Instruments for Enhanced Healthcare.
              </h2>

              <p className="mt-4 text-sm md:text-base text-gray-600">
                Our selection of cutting-edge biomedical instruments is designed
                to improve patient outcomes and streamline medical processes.
                Whether you're looking for diagnostic tools or therapeutic
                devices, we offer high-quality solutions for healthcare
                professionals.
              </p>

              <a
                href="#"
                className="mt-6 md:mt-8 inline-block rounded border border-indigo-600 bg-indigo-600 px-6 md:px-12 py-2 md:py-3 text-xs md:text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default InfoSection;
