import { Button } from "@/components/ui/button";
import { storage } from "./../../../configs/firebaseConfig";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import React, { useEffect, useState } from "react";
import { IoMdCloseCircle } from "react-icons/io";
import { db } from "./../../../configs";
import { InstrumentImages } from "./../../../configs/schema";
import { eq } from "drizzle-orm";
function UploadImages({ triggleUploadImages, setLoader, carInfo, mode }) {
  const [selectedFileList, setSelectedFileList] = useState([]);
  const [EditInstrumentImageList, setEditInstrumentImageList] = useState([]);

  useEffect(() => {
    if (mode == "edit") {
      setEditInstrumentImageList([]);
      carInfo?.images.forEach((image) => {
        setEditInstrumentImageList((prev) => [...prev, image?.imageUrl]);
      });
    }
  }, [carInfo]);

  useEffect(() => {
    if (triggleUploadImages) {
      UploadImageToServer();
    }
  }, [triggleUploadImages]);

  const onFileSelected = (event) => {
    const files = event.target.files;

    for (let i = 0; i < files?.length; i++) {
      const file = files[i];
      setSelectedFileList((prev) => [...prev, file]);
    }
  };

  const onImageRemove = (image, index) => {
    const result = selectedFileList.filter((item) => item != image);
    setSelectedFileList(result);
  };

  const onImageRemoveFromDB = async (image, index) => {
    const result = await db
      .delete(InstrumentImages)
      .where(eq(InstrumentImages.id, carInfo?.images[index]?.id))
      .returning({ id: InstrumentImages.id });

    const imageList = EditInstrumentImageList.filter((item) => item != image);
    setEditInstrumentImageList(imageList);
  };

  const UploadImageToServer = async () => {
    setLoader(true);
    await selectedFileList.forEach(async (file) => {
      const fileName = Date.now() + ".jpeg";
      const storageRef = ref(storage, "medical-instruments/" + fileName);
      const metaData = {
        contentType: "image/jpeg",
      };
      await uploadBytes(storageRef, file, metaData)
        .then((snapShot) => {
          console.log("Uploaded File");
        })
        .then((resp) => {
          getDownloadURL(storageRef).then(async (downloadUrl) => {
            console.log(downloadUrl);
            await db.insert(InstrumentImages).values({
              imageUrl: downloadUrl,
              carListingId: triggleUploadImages,
            });
          });
        });

      setLoader(false);
    });
  };

  return (
    <div>
      <h2 className="font-medium text-base md:text-lg lg:text-xl my-3">
        Upload Instrument Images
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-5">
        {mode == "edit" &&
          EditInstrumentImageList?.map((image, index) => (
            <div key={index} className="relative">
              <IoMdCloseCircle
                className="absolute m-1 md:m-2 text-base md:text-lg lg:text-xl text-white z-10 cursor-pointer hover:scale-110 transition-transform"
                onClick={() => onImageRemoveFromDB(image, index)}
              />
              <img
                src={image}
                className="w-full h-[100px] md:h-[130px] object-cover rounded-xl"
              />
            </div>
          ))}

        {selectedFileList.map((image, index) => (
          <div key={index} className="relative">
            <IoMdCloseCircle
              className="absolute m-1 md:m-2 text-base md:text-lg lg:text-xl text-white z-10 cursor-pointer hover:scale-110 transition-transform"
              onClick={() => onImageRemove(image, index)}
            />
            <img
              src={URL.createObjectURL(image)}
              className="w-full h-[100px] md:h-[130px] object-cover rounded-xl"
            />
          </div>
        ))}

        <label htmlFor="upload-images">
          <div
            className="border rounded-xl border-dotted
                 border-primary bg-blue-100 p-6 md:p-8 lg:p-10 cursor-pointer hover:shadow-md"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-center text-primary">
              +
            </h2>
          </div>
        </label>
        <input
          type="file"
          multiple={true}
          id="upload-images"
          onChange={onFileSelected}
          className="opacity-0"
        />
      </div>
    </div>
  );
}

export default UploadImages;
