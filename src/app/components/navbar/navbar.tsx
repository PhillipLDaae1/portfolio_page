import Link from "next/link";

export default function Navbar() {
    return (
        <>
        <header>
          <div className="flex flex-row justify-between content-center p-2">
            <div>
                <Link className="text-2xl hover:text-blue-400 transition" href="/">Phillip Daae</Link>
            </div>
            <div>
                <Link className="p-2 hover:text-blue-400 transition" href="/projects">Projects</Link>
                <Link className="p-2 hover:text-blue-400 transition" href="/about">About Me</Link>
            </div>
          </div>
        </header>
        </>
        
    )
}