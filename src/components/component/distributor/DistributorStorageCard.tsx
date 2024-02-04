import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CropCard() {
  return (
    <>
      <main className="py-8 w-full">
        <div className="container px-4 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Dash Cold Storage</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>Total Capacity</div>
                  <div className="font-semibold">5000 kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Fulled</div>
                  <div className="font-semibold">2200kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Remain</div>
                  <div className="font-semibold">1800kg</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Location</div>
                  <div className="font-semibold">Gothapatna, Bhubaneswar</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}