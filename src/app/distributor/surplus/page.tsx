import React from "react";
import CropCard from "@/components/component/farmer/CropCard";
import DistributorHeader from "@/components/component/distributor/DistributorHeader";
import DistributorFilter from "@/components/component/distributor/DistributorFilter";

export default function Surplus() {
  return (
    <>
      <DistributorHeader />
      <DistributorFilter />
      <div className="w-full flex gap-4 flex-wrap">
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
        <CropCard />
      </div>
    </>
  );
}
