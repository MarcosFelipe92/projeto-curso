import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center  ${inter.className}`}
    >
      <h1>PokeNext</h1>
    </main>
  );
}
