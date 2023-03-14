import "../css/navbar.css";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

export default function Nav() {

  return (
    <nav className="nav">
      <Link to="/" className="nav-title">
        <span className="site-title">Pure <span className="quality">Quality</span></span>
      </Link>
      <ul className="desktop-nav">
        <CustomLink to="/about">About</CustomLink>
        <CustomLink to="/services">Services</CustomLink>
        <CustomLink to="/gallery">Gallery</CustomLink>
        <CustomLink to="/contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end: true });
  return (
    <li className={isActive ? "active" : "hvr-underline-from-right"}>
      <Link to={to}>{children}</Link>
    </li>
  );
}
