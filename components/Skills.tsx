import { engineering } from "@/data/site";
import Reveal from "./Reveal";

export default function Skills() {
  return (
    <section id="skills" className="wrap section">
      <Reveal>
        <h2>Software Engineering</h2>
        <ul className="list">
          {engineering.map((s) => (
            <li key={s.label}>
              <strong>{s.label}:</strong> {s.items}
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
}
