import {Link} from "react-router-dom";
import {Album} from "../../types/Albuns";
import "./style.css";

type Props = {
    data: Album
}

export const AlbumItem = ({data}: Props) => {
    return (
        
        <Link to={`/album/${data.id}`} className="Album">
            <div key={data.id}>
                <h4>{data.title}</h4>
            </div>        
        </Link>

    );
}