// import React from "react";
// import Search from "./Search";

// function Hero() {
//   return (
//     <div>
//       <div
//         className="flex flex-col items-center p-10 py-20
//          gap-6 h-[650px] w-full bg-[#eef0fc]"
//       >
//         <h2 className="text-lg">Find cars for sale and for rent near you</h2>
//         <h2 className="text-[60px] font-bold">Find Your Dream Car</h2>

//         <Search />
//         <img
//           src="/ct.svg"
//           className="mt-10 w-full max-w-[00px] object-contain"
//           alt="Car illustration"
//         />
//       </div>
//     </div>
//   );
// }

// export default Hero;

import React from "react";
import Search from "./Search";

function Hero() {
  return (
    <div>
      <div
        className="relative flex flex-col items-center justify-center p-4 md:p-6 lg:p-10 py-10 md:py-16 lg:py-20 gap-4 md:gap-6 min-h-[500px] md:h-[600px] lg:h-[650px] w-full bg-[#eef0fc] bg-cover bg-center"
        style={{
          backgroundImage: "url('/ct.svg')",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-80"></div>

        {/* Content */}
        <div className="flex flex-col items-center p-4 md:p-6 lg:p-10 gap-4 md:gap-6 w-full relative z-10">
          <h2 className="text-sm md:text-base lg:text-lg text-cyan-50 text-center px-4">
            Discover biomedical instruments for sale or rent near you
          </h2>
          <h2 className="text-2xl md:text-4xl lg:text-5xl xl:text-[60px] text-center font-bold text-cyan-50 px-4">
            Find the Perfect Instrument for Your Patient&apos;s Needs
          </h2>

          <Search />
        </div>
      </div>
    </div>
  );
}

export default Hero;
