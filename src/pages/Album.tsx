import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { api } from "../api";
import { Album } from "../types/Albuns";
import {Photo} from "../types/Photos";
import { PhotoItem } from "../components/PhotoItem";


export const PageAlbum = () => {

    const params = useParams();
    const navigate = useNavigate();

    function handleBackButton() {
        navigate(-1);
    }

    const [albumItem, setAlbumItem] = useState<Album>({id: 0, title: '', userId: 0});
    const [photoItem, setPhotoItem] = useState<Photo[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (params.id) {
            loadAlbumItem(params.id);
            loadPhotoItem(params.id)
        }
    }, []);
  

    async function loadAlbumItem(id:string) {
        let AlbumJson = await api.getAlbumItem(id)
        setAlbumItem(AlbumJson);
    };

    async function loadPhotoItem(id:string) {
        setLoading(true)
        let PhotoJson = await api.getPhotoItem(id)
        setLoading(false);
        setPhotoItem(PhotoJson);        
    }

    return (
        <div>

            <button onClick={handleBackButton}>Voltar</button>
            <br/>

            {loading &&
             <div>Carregando...</div>
            }

            <h1>{albumItem.title}</h1>                  

        </div>

    );
}