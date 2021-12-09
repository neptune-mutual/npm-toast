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
        <h1 className="inline-block text-3xl font-extrabold text-gray-900 tracking-tight">
          Welcome to Neptune Mutual
        </h1>
      </main>

      <hr className="mt-8 mb-4" />

      <footer className="mt-1 text-lg text-gray-500">
        &copy; {new Date().getFullYear()}, Neptune Mutual
      </footer>
    </div>
  );
}
