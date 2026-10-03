import { projects } from "@/data/site";
import Reveal from "./Reveal";

export default function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="wrap">
        <Reveal><h2>Projects</h2></Reveal>
        <div className="grid">
          {projects.map((p) => (
            <Reveal key={p.title}>
              <article className="card">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <p className="tags">{p.tags.join(" · ")}</p>
                <p className="links">
                  {p.links.map((l) => (
                    <a key={l.label} href={l.href}>{l.label} →</a>
                  ))}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
