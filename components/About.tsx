import { profile } from "@/data/site";
import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="wrap section">
      <Reveal>
        <h2>About</h2>
        <p className="about-text">{profile.about}</p>
      </Reveal>
    </section>
  );
}
