import { RenderCounter } from "@/components/RenderCounter";
import { ToastPusher } from "@/components/ToastPusher";
import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-16">
      <Head>
        <title>Neptune Mutual</title>
        <meta
          name="description"
          content="A toast library for Neptune Mutual App"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="inline-block text-h1 mb-4 font-extrabold text-black tracking-tight">
          Welcome to Neptune Mutual
        </h1>

        <ToastPusher />

        <RenderCounter></RenderCounter>
      </main>

      <hr className="mt-8 mb-4" />

      <footer className="mt-1 text-lg text-3A4557">
        &copy; {new Date().getFullYear()}, Neptune Mutual
      </footer>
    </div>
  );
}
