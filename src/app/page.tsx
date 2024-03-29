"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";

const formSchema = z.object({
  mail: z.string().email(),
  password: z.string().min(3),
});

export default function HomePage() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mail: "",
      password: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const URL = process.env.NEXT_PUBLIC_API_URL;
    console.log("values::", values);
    axios
      .post(`${URL}/login`, values, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => sessionStorage.setItem("token", res.data.token))
      .then(() => router.push("/farmer/dashboard"))
      .catch((err) => console.log(err));
  }

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
        <h2 className="text-2xl font-semibold text-center text-gray-700 dark:text-white mt-24 mb-10">
          AgroTech Login
        </h2>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-1 flex flex-col gap-4 min-w-64"
          >
            <div>
              <FormField
                control={form.control}
                name="mail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input {...field} type="password" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <Button type="submit" className="hover:bg-[#4a7b84] bg-[#62a3ae]">
              Submit
            </Button>
          </form>
        </Form>
        <p className="mb-auto mt-4 text-center">
          Don&apos;t have an account?{" "}
          <Link className="text-[#62a3ae] hover:text-green-600" href="/signup">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
