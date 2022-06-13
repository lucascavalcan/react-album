import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { api } from "../api";
import { Album } from "../types/Albuns";
import {Photo} from "../types/Photos"; 
import { PhotoItem } from "../components/PhotoItem/PhotoItem";


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
        if (params.slug) {
            loadAlbumItem(params.slug);
            loadPhotoItem(params.slug)
        }
    }, []);
  

    async function loadAlbumItem(slug:string) {
        let AlbumJson = await api.getAlbum(slug)
        setAlbumItem(AlbumJson);
    };

    async function loadPhotoItem(slug:string) {
        setLoading(true)
        let PhotoJson = await api.getPhotosFromAlbum(slug)
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

            <div>
                {photoItem.map((item, index)=>(
                    <PhotoItem key={index} data={item}/>
                ))}
            </div>


        </div>

    );
}