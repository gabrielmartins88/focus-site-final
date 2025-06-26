import { Oswald } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["400"],
})

export function LogoFooter() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <div className="flex items-center">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/focus-icon-logo-dCmoEHpyqtdQkPlSHfjxwLR729y1E3.png"
          alt="Focus Logo"
          width={60}
          height={60}
          className="h-[60px] w-auto"
        />
        <span className={`ml-2 text-2xl text-white ${oswald.className}`}>FOCUS</span>
      </div>
    </Link>
  )
}
