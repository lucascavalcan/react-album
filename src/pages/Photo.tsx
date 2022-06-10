import {useParams, useNavigate} from "react-router-dom";

import {useState, useEffect} from "react";
import { api } from "../api";
import { Photo } from "../types/Photos";
import { AlbumItem } from "../components/AlbumItem";
import { PhotoItem } from "../components/PhotoItem";

export const PagePhoto = () => {
    
    const params = useParams();
    const navigate = useNavigate();

    function handleBackButton() {
        navigate(-1);
    }

    const [photos, setPhotos] = useState<Photo[]>([])
    const [loading, setLoading] = useState(false)

    useEffect (() => {
        loadPhotos()
      },[]);

     async function loadPhotos() {
       setLoading(true)
       let json = await api.getPhotos();
       setLoading(false);
       setPhotos(json);
    }

return (
    <div>
        <button onClick={handleBackButton}>Voltar</button>
        <div>Foto{params.slug}</div>

        {loading &&
          <div>Carregando...</div>
        }


        {!loading && photos.length > 0 &&
            <>
                
            </>
        }

        {!loading && photos.length === 0 &&
            <>
                
            </>
        } 

    </div>
    )
}