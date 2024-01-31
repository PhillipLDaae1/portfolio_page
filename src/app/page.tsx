import Image from "next/image"

export default function Home() {
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <h1 className="text-2xl">Home (Under Construction)</h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex p-10">
            <Image className="rounded-2xl"
              src="/images/Selfie.jpeg"
              width={500}
              height={500}
              alt="Picture of Phillip"
            />
          </div>
          <div className="flex flex-col justify-center text-3xl max-w-lg p-10 ">
            <h2 className="text-xl text-[#cfcfcf]">Hi! Im</h2>
            <h1>Phillip Daae, a Web Designer and Developer Based in Bergen, Norway</h1>
          </div>
          
        </div>
      </main>
    </>
  );
}
