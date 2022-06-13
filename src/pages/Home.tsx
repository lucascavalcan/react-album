import {useState, useEffect} from "react";
import { api } from "../api";
import { Album } from "../types/Albuns";
import { AlbumItem } from "../components/AlbumItem/AlbumItem";

export const Home = () => {
   
    const [albuns, setAlbuns] = useState<Album[]>([])
    const [loading, setLoading] = useState(false)
  
    useEffect (() => {
      loadAlbum()
    },[]);
  
  
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
  
        {!loading && albuns.length > 0 &&
          <>
            <div>
              {albuns.map((item, index)=>(
                <AlbumItem key={index} data={item}/>
              ))}
            </div>
          </>
        }

      </div>
    );
}