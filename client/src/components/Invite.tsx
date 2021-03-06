import React from 'react';
import { useSelector } from 'react-redux';
import Clipboard from 'clipboard';
import { selectRoomId } from '../store/ducks/rooms/selectors';

export const Invite: React.FC = () => {
    const roomId = useSelector(selectRoomId);
    new Clipboard('.copy-btn');

    return (
        <div className="invite__container">
            <h2>Пригласи своих друзей!</h2>
            <div className="invite-link__container">
                <p className="invite__link">{roomId}</p>
                <button
                    className="copy-btn"
                    data-title="Скопировано"
                    data-clipboard-text={roomId}
                >
                    Скопировать
                </button>
            </div>
        </div>
    );
}
