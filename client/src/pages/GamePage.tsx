import React from 'react';

import { Canvas } from '../components/Canvas';
import { CanvasPanel } from '../components/CanvasPanel';
import { Chat } from '../components/Chat';
import { Dashboard } from '../components/Dashboard';

export const GamePage: React.FC = () => {
    return (
        <div className="game__container">
            <div className="top__panel">
                <div className="round__block">
                    <h3 className="time">Время: 80с</h3>
                    <h3 className="current__round">Раунд 1 из 3</h3>
                </div>
                <div className="word__block">
                    <h2>Загаданное слово</h2>
                </div>
            </div>
            <div className="main__panel">
                <Dashboard />
                <Canvas />
                <Chat />
            </div>
            <CanvasPanel />
        </div>
    );
};
