import {
  CardTitle,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function FarmCard() {
  return (
    <main className="w-full py-12">
      <div className="container grid gap-6 md:gap-8 px-4 md:px-6 max-w-7xl mx-auto lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Green Valley Farm</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              alt="Green Valley Farm"
              className="aspect-[3/2] object-cover w-full rounded-lg overflow-hidden"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <p className="text-sm mt-4">
              Green Valley Farm is a family-owned farm with a passion for fresh
              and organic produce.
            </p>
            <ul className="text-sm mt-4">
              <li>Farm Health: Excellent</li>
              <li>Last Harvested: January 2024</li>
              <li>Production Rate: 500 tons/year</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Sunny Acres</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              alt="Sunny Acres"
              className="aspect-[3/2] object-cover w-full rounded-lg overflow-hidden"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <p className="text-sm mt-4">
              Sunny Acres is a large farm specializing in grain and corn
              production.
            </p>
            <ul className="text-sm mt-4">
              <li>Farm Health: Good</li>
              <li>Last Harvested: December 2023</li>
              <li>Production Rate: 1000 tons/year</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Blue Mountain Ranch</CardTitle>
          </CardHeader>
          <CardContent>
            <Image
              alt="Blue Mountain Ranch"
              className="aspect-[3/2] object-cover w-full rounded-lg overflow-hidden"
              height="200"
              src="/placeholder.svg"
              width="300"
            />
            <p className="text-sm mt-4">
              Blue Mountain Ranch is a cattle farm providing high-quality,
              grass-fed beef.
            </p>
            <ul className="text-sm mt-4">
              <li>Farm Health: Fair</li>
              <li>Last Harvested: November 2023</li>
              <li>Production Rate: 300 tons/year</li>
            </ul>
          </CardContent>
          <CardFooter>
            <Button size="sm">View Details</Button>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
