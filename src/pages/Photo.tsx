import {useParams, useNavigate} from "react-router-dom";
import {useState, useEffect} from "react";
import { api } from "../api";
import { Photo } from "../types/Photos";

export const PagePhoto = () => {
    
    const params = useParams();
    const navigate = useNavigate();

    function handleBackButton() {
        navigate(-1);
    }

    const [photoItem, setPhotoItem] = useState<Photo>()
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (params.slug) {
            loadPhotoItem(params.slug)
        }
    }, []);

     async function loadPhotoItem(slug: string) {
       setLoading(true)
       let json = await api.getPhotoItem(slug);
       setLoading(false);
       setPhotoItem(json);
    }

return (
    <div>
        <button onClick={handleBackButton}>Voltar</button>
        <br/>

        {loading &&
          <div>Carregando...</div>
        }

        {photoItem &&
            <>
                <h4>{photoItem.title}</h4>
                <img src={photoItem.url} alt={photoItem.title} />              
            </>
      
        }



    </div>
    )
}