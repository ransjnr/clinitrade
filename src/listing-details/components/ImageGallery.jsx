import React from "react";

function ImageGallery({ carDetail: instrumentDetail }) {
  return (
    <div>
      <img
        src={instrumentDetail?.images?.[0]?.imageUrl}
        className="w-full h-[250px] md:h-[400px] lg:h-[500px] object-cover rounded-xl"
      />
    </div>
  );
}

export default ImageGallery;
