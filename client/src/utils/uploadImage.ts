import axios from "axios";

export const uploadImage = async (image: File) => {
    const formData = new FormData();
    formData.append('image', image);

    const { data } = await axios.post('/api/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });

    return data;
};