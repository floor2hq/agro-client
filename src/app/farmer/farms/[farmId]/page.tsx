import React from "react";

type params = {
  farmId: string;
};

function FarmDetails({ params }: { params: params }) {
  return <div>FarmDetails of farm {params.farmId}</div>;
}

export default FarmDetails;
