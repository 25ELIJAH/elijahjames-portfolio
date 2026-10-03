import { contact } from "@/data/site";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="wrap section">
      <Reveal>
        <h2>Contact</h2>
        <p className="about-text">Have a project or an idea? Get in touch.</p>
        <ul className="list contact-list">
          <li><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></li>
          <li><strong>Phone:</strong> <a href={`tel:${contact.phoneHref}`}>{contact.phone}</a></li>
          <li><strong>LinkedIn:</strong> <a href={contact.linkedin.href}>{contact.linkedin.label}</a></li>
          <li><strong>GitHub:</strong> <a href={contact.github.href}>{contact.github.label}</a></li>
        </ul>
      </Reveal>
    </section>
  );
}
