import React from "react";
import type { Metadata } from "next";
import { MemeGallery } from "./meme-gallery";
import { getMemes } from "app/lib/getMemes";

export const metadata: Metadata = {
  title: "Memes",
  description: "My Meme Collection",
};

export default function MemesPage() {
  const memes = getMemes();

  return (
    <section>
      {/* <h1 className="mb-8 text-2xl font-medium tracking-tight">Memes</h1> */}
      <MemeGallery images={memes} />
    </section>
  );
}