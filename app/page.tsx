import Image from "next/image";
import { socialLinks } from "./config";

export default function Page() {
  return (
    <section>
      {/* <a>
        <Image
          src="/profile.png"
          alt="Profile photo"
          className="rounded-full bg-gray-100 block lg:mt-5 mt-0 lg:mb-5 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
          unoptimized
          width={160}
          height={160}
          priority
        />
      </a> */}
      <div className="prose prose-neutral dark:prose-invert">
        <ul>
          <li>i I'm currently exploring Large Language Models (LLMs) to build cool stuff. check 
            <a
              href="https://www.shriniket.me/projects"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 dark:text-blue-400 text-sm inline-flex items-center gap-1"
            >
              projects
              <span className="text-sm">↗</span>
            </a>.
          </li>
          <li>earlier I worked in product at various B2B start-ups but I like to do everything in general</li>
            <ul>
              <li>worked as a SPM at insure-tech start-up and build thier employee benefit marketplace with health check-ups as the power product</li>
              <li>worked on labelling tools to provide training data to companies like Waymo, Lyft, Nuro AI to build their autonomous vehicles</li>
              <li>interned at Uber right after my college to learn the basics of working at a start-up and Ops</li>
            </ul>
          <li>few of things I like to do frequently</li>
            <ul>
              <li>lift weights</li>
              <li>play poker, table tennis, badminton</li>
              <li>watch rocket launches</li>
              <li>throw and attend parties</li>
            </ul>
        </ul>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
        This website is my answer to the question - Tell me about Yourself
        </p>
      </div>
    </section>
  );
}
