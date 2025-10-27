/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import React, { useEffect, useState } from "react";
import {
  ChannelList,
  SendBirdProvider,
  App as SendbirdApp,
} from "@sendbird/uikit-react";
import "@sendbird/uikit-react/dist/index.css";
import { useUser } from "@clerk/clerk-react";
import { GroupChannel } from "@sendbird/uikit-react/GroupChannel";
import { GroupChannelList } from "@sendbird/uikit-react/GroupChannelList";
import { Button } from "@/components/ui/button";
import { HiArrowLeft } from "react-icons/hi";
function Inbox() {
  const { user } = useUser();
  const [userId, setUserId] = useState();
  const [channelUrl, setChannelUrl] = useState();
  useEffect(() => {
    if (user) {
      const id = (user.primaryEmailAddress?.emailAddress).split("@")[0];

      setUserId(id);
    }
  }, [user]);

  return (
    user && (
      <div>
        <div className="w-full h-[400px] md:h-[500px] lg:h-[600px]">
          <SendBirdProvider
            appId={import.meta.env.VITE_SENDBIRD_APP_ID}
            userId={userId}
            nickname={user?.fullName}
            profileUrl={user?.imageUrl}
            allowProfileEdit={true}
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-5 h-full">
              {/* Channel List    */}
              <div className="p-2 md:p-4 lg:p-5 border shadow-lg h-full overflow-hidden">
                <GroupChannelList
                  onChannelSelect={(channel) => {
                    setChannelUrl(channel?.url);
                  }}
                  channelListQueryParams={{
                    includeEmpty: true,
                  }}
                />
              </div>
              {/* Channel /Message Area  */}
              <div className="hidden md:block md:col-span-2 shadow-lg">
                <GroupChannel channelUrl={channelUrl} />
              </div>
            </div>
            {/* Mobile Channel View */}
            {channelUrl && (
              <div className="md:hidden fixed inset-0 z-50 bg-white">
                <div className="h-full flex flex-col">
                  <div className="p-4 border-b flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setChannelUrl(null)}
                    >
                      <HiArrowLeft className="text-xl" />
                    </Button>
                    <h2 className="font-semibold">Back to Messages</h2>
                  </div>
                  <div className="flex-1 overflow-hidden">
                    <GroupChannel channelUrl={channelUrl} />
                  </div>
                </div>
              </div>
            )}
          </SendBirdProvider>
        </div>
      </div>
    )
  );
}

export default Inbox;
