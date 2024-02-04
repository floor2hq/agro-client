import React from "react";
import CropCard from "@/components/component/farmer/CropCard";
import DistributorHeader from "@/components/component/distributor/DistributorHeader";
import DistributorFilter from "@/components/component/distributor/DistributorFilter";
import Link from "next/link";

export default function Surplus() {
  return (
    <>
      <DistributorHeader />
      <DistributorFilter />
      <div className="w-full flex gap-4 flex-wrap">
      <Link
          className="flex items-center px-4 py-4 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:rounded-lg dark:text-gray-200"
          href="/distributor/surplus/details"
        >
          <span className="mx-4"><CropCard /></span>
      </Link>
        
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
