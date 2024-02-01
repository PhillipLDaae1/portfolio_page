'use client'
import Image from "next/image";
import { useEffect, useState, useRef, RefObject } from "react";

function useIsVisible(ref: RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIntersecting(entry.isIntersecting);
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);

  return isIntersecting;
}

export default function School() {
  const ref1 = useRef<HTMLHeadingElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center p-10">
        <h1
          ref={ref1}
          className={`text-2xl p-10 text-center transition-opacity ease-in duration-300 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          School projects
        </h1>
        <div className="flex flex-col">
          <div
            ref={ref2}
            className={`flex flex-col md:flex-row p-5 m-2 bg-[#17181b] rounded-lg transition-opacity ease-in duration-500 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              className="rounded-2xl"
              src="/images/School_page.png"
              width={500}
              height={500}
              alt="Picture of my school webpage"
            />
            <div className="flex flex-col items-center p-5">
              <h2 className="text-2xl m-4 text-center">School webpage</h2>
              <p className="text-center">
                This is the webpage I made for my school, feel free to take a
                look!
              </p>
              <a
                className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition-all m-4"
                href="https://phillipldaae1.github.io/Amalie_Skram_IM_Linjen/index.html"
              >
                Link
              </a>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
