import { Oswald } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
})

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center">
        <Image src="/images/focus-icon-logo.png" alt="Focus Logo" width={52} height={52} className="h-[52px] w-auto" />
        <span className={`ml-2 text-3xl text-focus-black ${oswald.className}`}>FOCUS</span>
      </div>
    </Link>
  )
}
