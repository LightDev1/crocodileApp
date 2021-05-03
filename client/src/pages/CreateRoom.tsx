import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Invite } from '../components/Invite';
import { PlayersList } from '../components/PlayersList';
import { setRoomId, setRounds, setTime, setWords } from '../store/ducks/rooms/actionCreators';
import { createRoom } from '../store/ducks/rooms/actionCreators';
import { selectRoomId, selectRounds, selectTime, selectWords } from '../store/ducks/rooms/selectors';
import { generateMD5 } from '../utils/generateHash';

export const CreateRoom: React.FC = () => {
    const dispatch = useDispatch();
    const roomId = useSelector(selectRoomId);
    const rounds = useSelector(selectRounds);
    const time = useSelector(selectTime);
    const words = useSelector(selectWords);

    useEffect(() => {
        dispatch(setRoomId(generateMD5(Date.now().toString())));
    }, [dispatch]);

    const clickHandler = () => {
        dispatch(createRoom({
            item: {
                id: roomId,
                rounds,
                time,
                words,
                messages: []
            }
        }))
    };

    return (
        <div className="create__container">
            <div className="first-grid">
                <div className="form__container">
                    <h2>Лобби</h2>
                    <div className="rounds__container">
                        <label htmlFor="rounds">Количество раундов</label>
                        <select
                            className="rounds"
                            id="rounds"
                            value={rounds}
                            onChange={(event) => {
                                const payload = Number(event.target.value);
                                dispatch(setRounds(payload));
                            }}
                        >
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                    </div>
                    <div className="time__container">
                        <label htmlFor="time">Время на рисование (в сек.)</label>
                        <select
                            className="time"
                            id="time"
                            value={time}
                            onChange={(event) => {
                                const payload = Number(event.target.value);
                                dispatch(setTime(payload));
                            }}
                        >
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                            <option value={60}>60</option>
                            <option value={70}>70</option>
                            <option value={80}>80</option>
                            <option value={90}>90</option>
                            <option value={100}>100</option>
                            <option value={110}>110</option>
                            <option value={120}>120</option>
                            <option value={130}>130</option>
                            <option value={140}>140</option>
                            <option value={160}>160</option>
                        </select>
                    </div>
                    <label className="customs-check">
                        <input type="checkbox" />
                        Использовать кастомные слова
                </label>
                    <div className="custom-words__container">
                        <label className="custom-words" htmlFor="custom-words">Пользовательские слова</label>
                        <textarea
                            name="custom-words"
                            id="custom-words"
                            placeholder="Здесь вы можете написать свои слова и играть с ними (минимум 4 слова)"
                            value={words}
                            onChange={(event) => {
                                dispatch(setWords(event.target.value));
                            }}
                        >
                        </textarea>
                    </div>
                    <div className="btn__container">
                        <button
                            className="start-btn"
                            onClick={clickHandler}
                        >
                            Начать игру
                        </button>
                    </div>
                </div>
                <PlayersList />
            </div>
            <div className="second-grid">
                <Invite />
            </div>
        </div>
    );
};
