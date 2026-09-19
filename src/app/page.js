import Image from "next/image";
import styles from "./page.module.css";
import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";

export default function Home() {
  return (
    <>
      <Header/>

      <main >
        <Hero/>
       <h1>
        Hello
       </h1>
       <h2></h2>
      </main>
    </>
  );
}
