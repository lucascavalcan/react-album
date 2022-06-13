import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
});

export const api = {
    getAlbuns: async () => { //carrega os álbuns
        let response = await axiosInstance.get("/albums");
        return response.data;
    },

    getAlbum: async (id: string) => {  //carrega um ábum específico
        let response = await axiosInstance.get(`/albums/${id}`);
        return response.data;
    },

    getPhotosFromAlbum: async (id: string) => {  //carrega as fotos desse álbum específico
        const response = await axiosInstance(`/albums/${id}/photos`);
        return response.data; 
    },

    getPhotoItem: async (id: string) => {  //carrega uma foto específica
        const response = await axiosInstance.get(`/photos/${id}`);
        return response.data;
    }
};