import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      <a href={socialLinks.twitter} target="_blank">
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a>

      <h1 className="mb-8 text-2xl font-medium tracking-tight">
        Hello there!
      </h1>

      <div className="prose prose-neutral dark:prose-invert">
        <p>
          This is my brain on internet where I will try to share everything I do.
        </p>
        <p>
          I'll share my work, small projects, thoughts and anything that comes to my mind here. 
        </p>
        <p>
          This website is my answer to the question - Tell me about Yourself
        </p>
      </div>
    </section>
  );
}
