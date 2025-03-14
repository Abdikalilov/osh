import { Link, useLocation } from "react-router-dom";
import "./breadcrumb.scss"

export const Breadcrumb = ({ routes }) => {
  const location = useLocation();

  if (location.pathname === '/') return null;

  const paths = location.pathname.split("/").filter(Boolean);

  return (
    <nav className="breadcrumb container">
      <Link to="/" className="breadcrumb__link">ГЛАВНАЯ СТРАНИЦА</Link>
      {paths.length > 0 && <span className="breadcrumb__separator">{'>'}</span>}
      {paths.map((path, index) => {
        const href = "/" + paths.slice(0, index + 1).join("/");
        const isLast = index === paths.length - 1;

        const route = routes.find(r => {
          const routePath = r.path.split('/');
          const currentPath = href.split('/');

          if (routePath.length !== currentPath.length) return false;

          return routePath.every((segment, i) =>
            segment.startsWith(':') || segment === currentPath[i]
          );
        });

        if (!route?.title) return null;

        return (
          <span key={href} className={isLast ? "breadcrumb__active" : "breadcrumb__link"}>
            {isLast ? route.title : <Link to={href}>{route.title}</Link>}
          </span>
        );
      })}
    </nav>
  );
}