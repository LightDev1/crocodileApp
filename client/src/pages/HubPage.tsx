import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { JoinModal } from '../components/JoinModal';
import socket from '../socket';
import avatar from '../images/avatar.png';
import { createRoom, setUsers } from '../store/ducks/rooms/actionCreators';
import { generateMD5 } from '../utils/generateHash';
import { selectName, selectUser } from '../store/ducks/user/selectors';
import { selectUsers } from '../store/ducks/rooms/selectors';
import { setHost, setJoined, setName } from '../store/ducks/user/actionCreators';
import axios from 'axios';
import { uploadImage } from '../utils/uploadImage';

export interface ImageObj {
    blobUrl: string;
    file: File;
}

export const HubPage: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = generateMD5(Date.now().toString());
    const user = useSelector(selectUser);
    const users = useSelector(selectUsers);
    const name = useSelector(selectName);
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [image, setImage] = useState<ImageObj>();

    const createRoomRequest = async () => {
        if (name) {
            await dispatch(createRoom({
                item: {
                    id: roomId,
                    started: false,
                    rounds: 2,
                    time: 30,
                    words: '',
                    messages: [],
                    users
                }
            }));

            await dispatch(setHost(true));

            await socket.emit('ROOM:JOIN', {
                roomId,
                user,
            });

            const { data } = await axios.get(`/api/room_data/${roomId}`);

            dispatch(setUsers(data.users));

            dispatch(setJoined(true));
        } else {
            alert('Введите имя');
        }
    };

    const handleClickImageUpload = () => {
        if (inputFileRef.current) {
            inputFileRef.current.click();
        }
    };

    const handleChangeFileInput = useCallback((event: Event) => {
        if (event.target) {
            const target = (event.target as HTMLInputElement);
            const file = target.files?.[0];

            if (file) {
                const fileBlob = new Blob([file]);
                const obj = {
                    blobUrl: URL.createObjectURL(fileBlob),
                    file,
                };
                setImage(obj);
                localStorage.setItem('avatar', JSON.stringify(obj));
            }
        }
    }, []);

    useEffect(() => {
        if (inputFileRef.current) {
            inputFileRef.current.addEventListener('change', handleChangeFileInput);
        }
    }, []);

    useEffect(() => {
        socket.on('ROOM:SET_USERS', (users) => {
            dispatch(setUsers(users));
            console.log(users);
        });
    }, [dispatch]);

    useEffect(() => {
        if (localStorage.getItem('avatar')) {
            const avatarString = localStorage.getItem('avatar');
            // @ts-ignore
            const avatar = JSON.parse(avatarString);
            setImage(avatar);
        }
    }, []);

    return (
        <div className="hub__container">
            <div className="logo__container">
                <h1>scratch.io</h1>
            </div>
            <div className="form__container">
                <input
                    type="text"
                    placeholder="Введите имя"
                    value={name}
                    onChange={(event) => { dispatch(setName(event.target.value)) }}
                />
                <div className="avatar-choose__container">
                    <img
                        src={image ? image.blobUrl : avatar}
                        alt="Аватар пользователя"
                    />
                    <label htmlFor="upload__file">
                        <button
                            className="upload-btn"
                            onClick={handleClickImageUpload}
                        >
                            Загрузить
                        </button>
                    </label>
                    <input
                        ref={inputFileRef}
                        type="file"
                        id="upload__file"
                        className="file__input"
                    />
                </div>
                <div className="create-room__container">
                    <h3>Создать комнату:</h3>
                    <button onClick={createRoomRequest} className="create__private">Приватная</button>
                </div>
                <JoinModal />
            </div>
        </div>
    );
};
