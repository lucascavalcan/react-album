import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com"
})

export const api = {
    getAlbuns: async () => {
        let response = await axiosInstance.get("/albums");
        return response.data;
    },

    getPhotos: async () => {
        let response = await axiosInstance.get("/photos");
        return response.data;
    },

    getAlbumItem: async (id: string) => {
        const response = await axiosInstance(`/albums/${id}/photos`);
        return response.data; 
    },

    getPhotoItem: async (id: string) => {
        const response = await axiosInstance.get(`/photos/${id}`);
        return response.data;
    }
};