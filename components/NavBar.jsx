import Image from "next/image";
import Link from "next/link";
import style from "../styles/NavBar.module.css";

export default function NavBar() {
  return (
    <nav className={style.navbar}>
      <div className={style.logo}>
        <Image
          src="/images/pokeball.png"
          width={30}
          height={30}
          alt="PokeNext"
        />
        <h1>PokeNext</h1>
      </div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Sobre</Link>
        </li>
      </ul>
    </nav>
  );
}
