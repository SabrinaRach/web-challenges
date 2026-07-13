import "./styles.css";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Link from "./components/Link";
import Avatar from "./components/Avatar";
import Logo from "./components/Logo";

export default function App() {
  return (
    <>
      <Header>
        {/*Alles zwischen Header wird nun automatisch als children übergeben */}
        <Logo />
        <Navigation>
          <Link href="#home">Home</Link>
          {/*href="#home" wird als Prop an die Link-Komponente übergeben */}
          <Link href="#about">About</Link>
          <Link href="#impressum">Impressum</Link>
        </Navigation>
        <Avatar />
      </Header>
      <main>content goes here…</main>
    </>
  );
}
