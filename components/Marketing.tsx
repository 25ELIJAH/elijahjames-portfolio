import { marketing } from "@/data/site";
import Reveal from "./Reveal";

export default function Marketing() {
  return (
    <section id="marketing" className="section section-alt">
      <div className="wrap">
        <Reveal><h2>Digital Marketing Strategy</h2></Reveal>
        <div className="grid">
          {marketing.map((m) => (
            <Reveal key={m.title}>
              <div className="card">
                <h3>{m.title}</h3>
                <p>{m.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
