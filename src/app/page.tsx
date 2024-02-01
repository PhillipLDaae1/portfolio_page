'use client'
import Image from "next/image"
import { useEffect, useState } from "react"
import { useRef } from "react"

export function useIsVisible(ref) {
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

export default function Home() {

  const ref1 = useRef()
  const isVisible1 = useIsVisible(ref1)

  const ref2 = useRef()
  const isVisible2 = useIsVisible(ref2)

  const ref3 = useRef()
  const isVisible3 = useIsVisible(ref3)
  
  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <div ref={ref1} className={`transition-opacity ease-in duration-300 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <h1 className="text-2xl">Home (Under Construction)</h1>
        </div>
        
        <div className="flex flex-col md:flex-row">
        <div ref={ref2} className={`transition-opacity ease-in duration-500 ${isVisible2 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex py-10">
            <Image className="rounded-2xl"
              src="/images/Selfie.jpeg"
              width={500}
              height={500}
              alt="Picture of Phillip"
            />
          </div>
        </div>
        <div ref={ref3} className={`transition-opacity ease-in duration-700 ${isVisible1 ? "opacity-100" : "opacity-0"}`}>
          <div className="flex flex-col justify-center text-3xl max-w-lg p-10 ">
            <h2 className="text-xl text-[#cfcfcf]">Hi! Im</h2>
            <h1>Phillip Daae, a Web Designer and Developer Based in Bergen, Norway</h1>
          </div>
        </div>
        </div>
      </main>
    </>
  );
}
