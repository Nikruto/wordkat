import Head from "next/head";
import Link from "next/link";
import { useState } from "react";
import ExampleQuiz from "../components/exampleQuiz";

export default function Home() {
  const [modalActive, setModalActive] = useState(false);

  return (
    <div className="min-h-screen font-poppins">
      <div className="w-full max-w-7xl absolute left-1/2 transform -translate-x-1/2 mx-auto">
        <div className="flex justify-between mx-auto pt-12 px-8 items-center">
          <h1 className="font-bold text-xl">Wordkat</h1>
          <Link href="/app">
            <div
              onClick={() => setModalActive(!modalActive)}
              className="text-white mr-2 bg-black border border-black hover:text-black hover:bg-transparent transition px-4 py-2 font-medium text-sm rounded cursor-pointer select-none"
            >
              Join Now
            </div>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-7xl mx-auto md:grid md:grid-cols-7 md:grid-flow-row flex flex-col items-center pt-40 md:pt-0 px-6">
        <h1 className="font-semibold text-5xl md:text-6xl col-span-4 leading-tight text-center md:text-left">
          Easiest word and language learning app
        </h1>
        <div
          style={{ height: "calc(100vh - 80px" }}
          className="rounded-lg col-start-6 col-span-2 max-h-[600px] max-w-xs md:max-w-xl w-full md:w-auto flex-shrink-0 mt-16 md:mt-8 bg-gradient-to-b from-[#B5FF92] to-[#A0FFB5] pt-16 lg:pt-36 px-8 flex flex-col"
        >
          <ExampleQuiz />
        </div>
      </div>
    </div>
  );
}
