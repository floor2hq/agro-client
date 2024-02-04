"use client";
import React, { useEffect } from "react";
import CropCard from "@/components/component/farmer/CropCard";
import FarmerHeader from "@/components/component/farmer/FarmerHeader";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
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
import { Crop } from "@/app/farmer/farms/page";
import { Farm } from "@/app/farmer/farms/page";

export default function Surplus() {
  const URL = process.env.NEXT_PUBLIC_API_URL;
  //@ts-ignore
  const cropsList: Crop[] = JSON.parse(localStorage.getItem("crops"));
  //@ts-ignore
  const farmsList = JSON.parse(localStorage.getItem("farms"));
  const [surplusData, setSurplusData] = React.useState([]);
  const [newSurplus, setNewSurplus] = React.useState({});
  ``;
  useEffect(() => {
    axios
      .get(`${URL}/harvest`, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setSurplusData(res.data);
      });
  }, [URL]);

  const handleHarvestCreate = () => {
    axios
      .post(`${URL}/harvest`, newSurplus, {
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        console.log(res.data);
      });
  };

  return (
    <>
      <FarmerHeader />
      <div className="flex justify-end p-4">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">+ Add surplus </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add Surplus</DialogTitle>
              <DialogDescription>
                Add a surplus to your profile.
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="cropType" className="text-right">
                  Crop Type
                </Label>
                <Select
                  onValueChange={(e) =>
                    setNewSurplus({ ...newSurplus, crop: e })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a crop" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="capitalize">
                      {cropsList.map((crop) => (
                        <SelectItem key={crop._id} value={crop._id}>
                          {crop.name}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="rate" className="text-right">
                  Rate
                </Label>
                <Input
                  onChange={(e) =>
                    setNewSurplus({ ...newSurplus, rate: e.target.value })
                  }
                  id="rate"
                  className="col-span-3"
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="farm" className="text-right">
                  Farm
                </Label>
                <Select
                  onValueChange={(e) =>
                    setNewSurplus({ ...newSurplus, farm: e })
                  }
                >
                  <SelectTrigger className="col-span-3">
                    <SelectValue placeholder="Select a farm" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup className="capitalize">
                      {farmsList.map((farm: Farm) => (
                        <SelectItem key={farm._id} value={farm._id}>
                          {farm.location}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="amount" className="text-right">
                  Amount
                </Label>
                <Input
                  id="amount"
                  onChange={(e) =>
                    setNewSurplus({ ...newSurplus, amount: e.target.value })
                  }
                  placeholder="in Kg"
                  className="col-span-3"
                />
              </div>
            </div>
            <DialogFooter>
              <DialogClose asChild>
                <Button onClick={handleHarvestCreate} type="submit">
                  Add
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <div className="w-full flex gap-4 flex-wrap">
        {surplusData.map((surplus) => (
          <CropCard key={surplus} />
        ))}
      </div>
    </>
  );
}
