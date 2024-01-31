import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="w-full h-screen bg-green-50 flex items-center justify-center">
      <div>
        <Image
          priority
          alt="Agrotech background"
          className="object-contain rounded-l-xl"
          src="/agrotech.jpeg"
          height={600}
          width={600}
        />
      </div>
      <div className="w-[600px] h-[600px] px-8 bg-white rounded-r-xl shadow-md flex flex-col items-center justify-center">
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mb-auto mt-auto">
          AgroTech Login
        </h2>
        <form className="mt-4 min-w-64 mb-auto">
          <div className="w-full mb-4">
            <Label
              className="text-gray-700 dark:text-gray-200"
              htmlFor="username"
            >
              Username
            </Label>
            <Input className="mt-1 w-full" id="username" required type="text" />
          </div>
          <div className="w-full mb-4">
            <div className="flex justify-between items-end">
              <Label
                className="text-gray-700 dark:text-gray-200"
                htmlFor="password"
              >
                Password
              </Label>
              <Link className="text-sm text-gray-400 hover:underline" href="#">
                Forgot password?
              </Link>
            </div>
            <Input
              className="mt-1 w-full"
              id="password"
              required
              type="password"
            />
          </div>
          <div className="mt-6">
            <Button
              className="w-full py-2 px-4 text-center bg-[#62a3ae] rounded-md text-white text-sm hover:bg-green-600"
              type="submit"
            >
              Login
            </Button>
          </div>
        </form>
        <p className="mb-auto mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link
            className="text-[#62a3ae] hover:text-green-600 underline"
            href="/signup"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
