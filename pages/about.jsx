import Image from "next/image";
import style from "../styles/About.module.css";

export default function About() {
  return (
    <div className={style.about}>
      <h1 className="text-3xl">Sobre o projeto</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet ad
        accusantium dignissimos, inventore impedit odit similique vero unde eos
        quos obcaecati dicta sit error labore delectus magnam repudiandae.
        Dolore, mollitia?
      </p>
      <Image
        src="/images/charizard.png"
        width={300}
        height={300}
        alt="Imagem charizard"
      />
    </div>
  );
}
