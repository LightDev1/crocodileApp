import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import { setMessages } from '../store/ducks/rooms/actionCreators';
import { selectMessages, selectRoomId } from '../store/ducks/rooms/selectors';
import { setMessage } from '../store/ducks/user/actionCreators';
import { selectMessage, selectName } from '../store/ducks/user/selectors';

export const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = useSelector(selectRoomId);
    const messages = useSelector(selectMessages);
    const message = useSelector(selectMessage);
    const username = useSelector(selectName);
    const messagesRef = useRef(null);

    const keyDownHandler = async (event: any) => {
        if (event.key === 'Enter' && message) {
            await socket.emit('ROOM:NEW_MESSAGE', {
                roomId,
                username,
                text: message,
            });

            dispatch(setMessages({ username, text: message }));

            dispatch(setMessage(''));
        }
    };

    useEffect(() => {
        socket.on('ROOM:NEW_MESSAGE', (message) => {
            dispatch(setMessages(message));
        });
    }, [dispatch]);

    useEffect(() => {
        //@ts-ignore
        messagesRef.current.scrollTo(0, 99999);
    }, [messages]);

    return (
        <div className="chat__container">
            <div className="messages__container" ref={messagesRef}>
                {
                    messages.map((message, index) => (
                        <div className="message__container" key={message.username + index}>
                            <span className="from">{message.username}:</span>
                            <div className="message">{message.text}</div>
                        </div>
                    ))
                }
            </div>
            <div className="input__container">
                <input
                    type="text"
                    placeholder="Введите слово"
                    value={message}
                    onChange={(event) => { dispatch(setMessage(event.target.value)) }}
                    onKeyDown={keyDownHandler}
                />
            </div>
        </div>
    );
};
