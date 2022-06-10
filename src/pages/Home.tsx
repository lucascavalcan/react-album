import {useParams, useNavigate} from "react-router-dom";

import {useState, useEffect} from "react";
import { api } from "../api";
import { Album } from "../types/Albuns";
import { Photo } from "../types/Photos";
import { AlbumItem } from "../components/AlbumItem";
import { PhotoItem } from "../components/PhotoItem";

export const Home = () => {
   
    const [albuns, setAlbuns] = useState<Album[]>([])
    const [photos, setPhotos] = useState<Photo[]>([])
    const [loading, setLoading] = useState(false)
  
    useEffect (() => {
      loadPhotos()
    },[]);
  
    useEffect (() => {
      loadAlbum()
    },[]);
  
    async function loadPhotos() {
      setLoading(true)
      let json = await api.getPhotos();
      setLoading(false);
      setPhotos(json);
    }
  
    async function loadAlbum() {
      setLoading(true)
      let json = await api.getAlbuns()
      setLoading(false);
      setAlbuns(json);
    }
   
    return (
        <div>
  
        {loading &&
          <div>Carregando...</div>
        }
  
        {!loading && photos.length > 0 && albuns.length > 0 &&
          <>
            <div>Total de photos: {photos.length}</div> <br/>
            <div>Total de albums: {albuns.length}</div>
            <div>
              {albuns.map((item, index)=>(
                <AlbumItem key={index} data={item}/>
              ))}
            </div>
          </>
        }
  
        {!loading && photos.length === 0 && albuns.length === 0 &&
          <>
            Não há nada para exibir.
          </>
        }
      </div>
    );
}