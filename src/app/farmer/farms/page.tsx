"use client";
import FarmCard from "@/components/component/farmer/FarmCard";
import FarmerHeader from "@/components/component/farmer/FarmerHeader";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import axios from "axios";
import React, { useEffect } from "react";

export interface Crop {
  _id: string;
  name: string;
  variety: string;
  lifespan: Number;
}

export interface Farm {
  _id: string;
  location: string;
  size: string;
  crops: Crop[];
}

function FarmsPage() {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  const token = sessionStorage.getItem("token");
  const [crop, setCrop] = React.useState<Crop[]>([]);
  const [farms, setFarms] = React.useState({
    location: "",
    size: "",
    crops: "",
  });
  const [allFarms, setAllFarms] = React.useState<Farm[]>([]);

  useEffect(() => {
    axios
      .get(`${URL}/crop`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setCrop(res.data);
      });

    axios
      .get(`${URL}/farm`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        setAllFarms(res.data);
        localStorage.setItem("farms", JSON.stringify(res.data));
      });
  }, [URL, token]);

  console.log(allFarms);
  const handleFarmCreate = () => {
    const crops = [];
    crops.push(farms.crops);
    axios
      .post(
        `${URL}/farm`,
        {
          ...farms,
          crops,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => console.log(res))
      .then(() => window.location.reload());
  };
  return (
    <>
      <FarmerHeader />
      <div className="flex justify-end p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">+ Add farm </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Farm</DialogTitle>
              <DialogDescription>Add a farm to your profile.</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="name" className="text-right">
                  Location
                </Label>
                <Input
                  onChange={(e) =>
                    setFarms({ ...farms, location: e.target.value })
                  }
                  id="location"
                  placeholder="City, State"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Size (m²)
                </Label>
                <Input
                  id="size"
                  onChange={(e) => setFarms({ ...farms, size: e.target.value })}
                  placeholder="Size of farm in m²"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="username" className="text-right">
                  Crop Type
                </Label>
                <Select onValueChange={(e) => setFarms({ ...farms, crops: e })}>
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="capitalize">
                      {crop.map((crop) => (
                        <SelectItem key={crop._id} value={crop._id}>
                          {crop.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleFarmCreate} type="submit">
                Add
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="flex flex-wrap items-center justify-center">
        {allFarms.map((farm, index) => (
          <FarmCard
            key={farm._id}
            farmNo={index}
            farmId={farm._id}
            location={farm.location}
            size={farm.size}
            crops={farm.crops}
          />
        ))}
      </div>
    </>
  );
}

export default FarmsPage;
