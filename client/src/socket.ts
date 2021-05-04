import { useCallback } from 'react';
import io, { Socket } from 'socket.io-client';

export const useSocket = () => {
    const connectToSocket = useCallback((): Socket => {
        const socket = io();
        return socket;
    }, []);

    return { connectToSocket }
};
