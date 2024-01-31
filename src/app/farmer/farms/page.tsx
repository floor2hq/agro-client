import React from "react";
import FarmCard from "@/components/component/farmer/FarmCard";
import FarmerHeader from "@/components/component/farmer/FarmerHeader";

function FarmsPage() {
  const farmIds = ["1", "2", "3", "4", "5", "6", "7", "8"];
  return (
    <>
      <FarmerHeader />
      <div className="flex flex-wrap items-center justify-center">
        {farmIds.map((farmId) => (
          <FarmCard key={farmId} farmId={farmId} />
        ))}
      </div>
    </>
  );
}

export default FarmsPage;
