import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";
import Image from "next/image";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/memes": { name: "Memes" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-6 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
      <div className="flex items-center gap-3 sm:gap-5">
        <a>
          <Image
            src="/profile.png"
            alt="Profile photo"
            className="rounded-full bg-gray-100 grayscale hover:grayscale-0"
            unoptimized
            width={50}
            height={50}
            priority
          />
        </a>
        <Link href="/" className="text-2xl sm:text-3xl font-semibold tracking-tight">
          {metaData.title}
        </Link>
      </div>

        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative"
            >
              {name}
            </Link>
          ))}
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
