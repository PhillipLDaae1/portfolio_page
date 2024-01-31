import Image from "next/image"

export default function School(){
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-10">
                <h1 className="text-2xl p-10">School projects</h1>
                <div className="flex flex-col">
                    <div className="flex flex-col md:flex-row p-5 m-2 bg-[#17181b] rounded-lg">
                        <Image className="rounded-2xl"
                            src="/images/School_page.png"
                            width={500}
                            height={500}
                            alt="Picture of my school webpage"
                        />
                        <div className="flex flex-col items-center p-5">
                            <h2 className="text-2xl m-4">School webpage</h2>
                            <p className="text-center">This is the webpage I made for my school, feel free to take a look!</p>
                            <a className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-all m-4" href="https://phillipldaae1.github.io/Amalie_Skram_IM_Linjen/index.html">Link</a>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}