import { useEffect } from "react";
import { useLocation, matchPath } from "react-router-dom";

function PageTitle() {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    let title = "Page Not Found";

    if (pathname === "/") {
      title = "Home";
    } else if (pathname === "/districts") {
      title = "Districts";
    } else if (matchPath("/districts/:districtId/places/:placeId", pathname)) {
      title = "Place";
    } else if (matchPath("/districts/:districtId", pathname)) {
      title = "District";
    }

    document.title = title;
  }, [pathname]);

  return null;
}

export default PageTitle;