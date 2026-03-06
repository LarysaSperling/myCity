import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

function PageTitle() {
  const { pathname } = useLocation();

  useEffect(() => {
    let title = "Page Not Found";

    if (pathname === "/") {
      title = "Home";
    } else if (pathname === "/categories") {
      title = "Categories";
    } else if (pathname === "/favorites") {
      title = "Favorites";
    } else if (pathname === "/about") {
      title = "About";
    } else if (matchPath("/categories/:categoryId/places/:placeId", pathname)) {
      title = "Place";
    } else if (matchPath("/categories/:categoryId", pathname)) {
      title = "Category";
    }

    document.title = title;
  }, [pathname]);

  return null;
}

export default PageTitle;