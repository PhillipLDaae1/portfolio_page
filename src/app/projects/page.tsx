'use client'
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"
import { useRef } from "react"

function useIsVisible(ref) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting)
    }
    )

    observer.observe(ref.current)
    return () => {
      observer.disconnect()
    }
  }, [ref])
  return isIntersecting
}

export default function Projects() {

    const ref1 = useRef()
    const isVisible1 = useIsVisible(ref1)
  
    const ref2 = useRef()
    const isVisible2 = useIsVisible(ref2)
  
    const ref3 = useRef()
    const isVisible3 = useIsVisible(ref3)

    return (
        <>
            <main className="flex min-h-screen flex-col items-center justify-center p-10">
                <h1 ref={ref1} className={`text-2xl p-10 transition-opacity ease-in duration-300 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>Projects</h1>
                <div className="flex flex-col md:flex-row">
                    <div ref={ref2} className={`flex flex-col items-center p-5 m-2 bg-[#17181b] rounded-lg transition-opacity ease-in duration-500 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
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
                    <div ref={ref3} className={`flex flex-col items-center p-5 m-2 bg-[#17181b] transition-opacity ease-in duration-700 ${isVisible3 ? "opacity-100" : "opacity-0"}`}>
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
