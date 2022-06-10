import {Album} from "../types/Albuns";

type Props = {
    data: Album
    key: number
}

export const AlbumItem = ({data, key}: Props) => {
    return (
        <div key={data.id}>
            <h4>{data.title}</h4>
        </div>
    );
}