import Link from "next/link";

import { api, HydrateClient } from "~/trpc/server";
import HomePage from "./_components/Home/Home";

export default async function Home() {
  return (
    <main className="flex  min-h-screen flex-col items-center bg-[#1b1d23]">
      
      <HomePage />
    </main>
  );
}
