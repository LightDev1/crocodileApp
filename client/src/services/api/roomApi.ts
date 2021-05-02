import axios from "axios";

interface PayloadInterface {
    id: string;
    rounds: number;
    time: number;
    words: Array<string>;
}

export const createRoom = (payload: PayloadInterface) => {
    return axios.post('/api/create_room', payload).then(({ data }) => data);
};