import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function CropCard() {
  return (
    <>
      <main className="py-8 w-full">
        <div className="container px-4 w-full">
          <Card className="w-full">
            <CardHeader>
              <CardTitle>Farmer</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>Name</div>
                  <div className="font-semibold">Bibhu Prasad Dash</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Location</div>
                  <div className="font-semibold">Gothapatna, Bhubaneswar</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Contact</div>
                  <div className="font-semibold">9876543210</div>
                </div>
                <div className="flex items-center justify-between">
                  <div>Storage Capacity</div>
                  <div className="font-semibold">6000 kg</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </>
  );
}