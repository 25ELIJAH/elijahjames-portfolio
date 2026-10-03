import { profile } from "@/data/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">© {new Date().getFullYear()} {profile.name}</div>
    </footer>
  );
}
