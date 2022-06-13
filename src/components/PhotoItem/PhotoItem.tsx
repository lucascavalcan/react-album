import {Link} from "react-router-dom";
import {Photo} from "../../types/Photos";
import './style.css';

type Props = {
    data: Photo
}

export const PhotoItem = ({data}: Props) => {
    return (
        <Link to={`/photo/${data.id}`} key={data.id} className="Photo">
            <img src={data.thumbnailUrl} alt={data.title}/>        
        </Link>

    );
}