import {useRoutes} from "react-router-dom";

import { Home } from "../pages/Home";
import { PageAlbum } from "../pages/Album";
import { PagePhoto } from "../pages/Photo";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {
    return useRoutes([
      {path: "/", element: <Home/>},
      {path: "/album/:slug", element: <PageAlbum/>},
      {path: "/photo/:slug", element: <PagePhoto/>},
      {path: "*", element: <NotFound/>}
    ]);
}