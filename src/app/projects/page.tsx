import Image from "next/image"
import Link from "next/link"

export default function About() {
    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-10">
                <h1 className="text-2xl p-10">Projects</h1>
                <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col items-center p-5 m-2 bg-[#17181b] rounded-lg">
                        <Image className="rounded-2xl"
                            src="/images/Orb.jpg"
                            width={500}
                            height={500}
                            alt="Picture of an orb"
                        />
                        <h2 className="text-2xl m-4">Personal</h2>
                        <p className="text-center">This is all my personal projects, feel free to take a look!</p>
                        <Link className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-all m-4" href="/projects/personal">Link</Link>
                    </div>
                    <div className="flex flex-col items-center p-5 m-2 bg-[#17181b]">
                        <Image className="rounded-2xl"
                            src="/images/School.jpg"
                            width={500}
                            height={500}
                            alt="Picture of an orb"
                        />
                        <h2 className="text-2xl m-4">School</h2>
                        <p className="text-center">This is all my School projects, feel free to take a look!</p>
                        <Link className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-all m-4" href="/projects/school">Link</Link>
                    </div> 
                </div>
            </main>
        </>
    )
}