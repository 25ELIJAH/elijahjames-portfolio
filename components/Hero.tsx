"use client";

import { useEffect, useRef, useState } from "react";
import { profile } from "@/data/site";

export default function Hero() {
  const [failed, setFailed] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  // The image may fail before hydration, so onError never fires; check on mount too.
  useEffect(() => {
    const img = imgRef.current;
    if (img && img.complete && img.naturalWidth === 0) setFailed(true);
  }, []);

  return (
    <section className="hero">
      <div className="hero-photo">
        {failed ? (
          <div className="photo-fallback">{profile.initials}</div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img ref={imgRef} src={profile.photo} alt={`Photo of ${profile.name}`} onError={() => setFailed(true)} />
        )}
      </div>
      <div className="hero-text">
        <p className="eyebrow">{profile.role}</p>
        <h1>Hi, I&apos;m {profile.name}.</h1>
        <p className="lead">{profile.tagline}</p>
        <div className="actions">
          <a className="btn" href="#projects">View my work</a>
          <a className="btn btn-outline" href="#contact">Contact me</a>
        </div>
      </div>
    </section>
  );
}
