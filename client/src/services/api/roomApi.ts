import axios from "axios";

export const RoomApi = {
    createRoom: (payload: any) => {
        return axios.post('/api/create_room', payload).then(({ data }) => data);
    }
}