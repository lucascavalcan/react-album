import {Routes, Route} from "react-router-dom";
import { Home } from "../pages/Home";
import { PageAlbum } from "../pages/Album";
import { PagePhoto } from "../pages/Photo";
import { NotFound } from "../pages/NotFound";

export const MainRoutes = () => {
    return (
        <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/album/:slug" element={<PageAlbum/>}/>
        <Route path="/photo/:slug" element={<PagePhoto/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    );
}