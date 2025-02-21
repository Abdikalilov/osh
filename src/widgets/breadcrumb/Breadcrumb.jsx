import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.scss"
export const Breadcrumb = () => {
    const location = useLocation();
    const paths = location.pathname.split("/").filter(Boolean);
  
    return (
        <nav className="breadcrumb">
        <Link to="/" className="breadcrumb__link">ГЛАВНАЯ СТРАНИЦА</Link>
        {paths.length > 0 && <span className="breadcrumb__separator">{'>'}</span>}
        {paths.map((path, index) => {
          const href = "/" + paths.slice(0, index + 1).join("/");
          const isLast = index === paths.length - 1;
  
          return (
            <span key={href} className={isLast ? "breadcrumb__active" : "breadcrumb__link"}>
              {isLast ? path.toUpperCase() : <Link to={href}>{path.toUpperCase()}</Link>}
            </span>
          );
        })}
      </nav>
    );
  }