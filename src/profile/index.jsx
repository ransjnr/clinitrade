import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import React from "react";
import { Link } from "react-router-dom";
import MyListing from "./components/MyListing";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Inbox from "./components/Inbox";

function Profile() {
  return (
    <div>
      <Header />
      <div className="px-4 md:px-8 lg:px-10 xl:px-20 my-6 md:my-10">
        <Tabs defaultValue="my-listing" className="w-full">
          <TabsList className="w-full flex flex-wrap justify-start">
            <TabsTrigger value="my-listing" className="text-xs md:text-sm">
              My Listing
            </TabsTrigger>
            <TabsTrigger value="inbox" className="text-xs md:text-sm">
              Inbox
            </TabsTrigger>
            <TabsTrigger value="profile" className="text-xs md:text-sm">
              Profile
            </TabsTrigger>
          </TabsList>
          <TabsContent value="my-listing">
            <MyListing />
          </TabsContent>
          <TabsContent value="inbox">
            <Inbox />
          </TabsContent>
          <TabsContent value="profile">Profile Tab</TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default Profile;
