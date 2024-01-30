import Image from "next/image";

export default function LoginHomepage() {
  return (
    <main className="flex min-h-screen items-center justify-between p-24">
      {/* <Image
        className="absolute"
        src="/vercel.svg"
        alt="background"
        width={400}
        height={400}
      /> */}
      <div className="bg-cyan-400 w-[55%] h-[550px] m-auto rounded-lg flex">
        <div className="w-1/2">Image container</div>
        <div className="w-1/2">Rest of the text</div>
      </div>
    </main>
  );
}
