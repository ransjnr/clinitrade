import Service from "@/Shared/Service";
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function OwnersDetail({ carDetail: instrumentDetail }) {
  const { user } = useUser();

  const navigation = useNavigate();

  const OnMessageOwnerButtonClick = async () => {
    const userId = user.primaryEmailAddress.emailAddress.split("@")[0];
    const ownerUserId = instrumentDetail?.createdBy.split("@")[0];
    //Create Current User ID
    try {
      await Service.CreateSendBirdUser(
        userId,
        user?.fullName,
        user?.imageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // Owner User Id
    try {
      await Service.CreateSendBirdUser(
        ownerUserId,
        instrumentDetail?.userName,
        instrumentDetail?.userImageUrl
      ).then((resp) => {
        console.log(resp);
      });
    } catch (e) {}
    // Create Channel
    try {
      await Service.CreateSendBirdChannel(
        [userId, ownerUserId],
        instrumentDetail?.instrumentTitle
      ).then((resp) => {
        console.log(resp);
        console.log("Channel Created");
        navigation("/profile");
      });
    } catch (e) {}
  };

  return (
    <div className="p-4 md:p-6 lg:p-10 border rounded-xl shadow-md mt-4 md:mt-7">
      <h2 className="font-medium text-lg md:text-xl lg:text-2xl mb-3">
        Owner/ Deals
      </h2>
      <img
        src={instrumentDetail?.userImageUrl}
        className="w-[60px] h-[60px] md:w-[70px] md:h-[70px] rounded-full"
      />
      <h2 className="mt-2 font-bold text-base md:text-lg lg:text-xl">
        {instrumentDetail?.userName}
      </h2>
      <h2 className="mt-2 text-xs md:text-sm text-gray-500 break-all">
        {instrumentDetail?.createdBy}
      </h2>

      <Button
        className="w-full mt-4 md:mt-6"
        onClick={OnMessageOwnerButtonClick}
      >
        Message Owner
      </Button>
    </div>
  );
}

export default OwnersDetail;
