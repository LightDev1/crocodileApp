import React, { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import socket from '../socket';
import { setMessages } from '../store/ducks/rooms/actionCreators';
import { selectMessages, selectRoomId } from '../store/ducks/rooms/selectors';
import { setMessage } from '../store/ducks/user/actionCreators';
import { selectMessage, selectUser } from '../store/ducks/user/selectors';

export const Chat: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = useSelector(selectRoomId);
    const messages = useSelector(selectMessages);
    const message = useSelector(selectMessage);
    const user = useSelector(selectUser);
    const messagesRef = useRef(null);

    console.log('Render');
    const keyDownHandler = useCallback(async (event: any) => {
        if (event.key === 'Enter' && message) {
            await socket.emit('ROOM:NEW_MESSAGE', {
                roomId,
                user,
                text: message,
            });

            dispatch(setMessages({ username: user.name, text: message }));

            dispatch(setMessage(''));
        }
    }, [dispatch, message, roomId, user]);

    const newMessageHandler = useCallback((messageFromServer) => {
        dispatch(setMessages(messageFromServer));
    }, [dispatch])

    useEffect(() => {
        socket.off('ROOM:NEW_MESSAGE', newMessageHandler).on('ROOM:NEW_MESSAGE', newMessageHandler);
    }, [newMessageHandler]);

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
