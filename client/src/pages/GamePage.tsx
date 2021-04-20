import React, { useState } from 'react';

import { Canvas } from '../components/Canvas';
import { CanvasPanel } from '../components/CanvasPanel';
import { Chat } from '../components/Chat';
import { Dashboard } from '../components/Dashboard';

export const GamePage: React.FC = () => {
    const [color, seTcolor] = useState('#444444');
    const [tool, setTool] = useState('brush');
    const [radiusButton, setRadiusButton] = useState('normal');
    const [toClear, setToClear] = useState(false);

    const changeColor = (color: string): void => {
        seTcolor(color);
    };

    const changeTool = (tool: string): void => {
        console.log(tool);
        setTool(tool);
    };

    const changeRadiusButton = (button: string): void => {
        setRadiusButton(button);
    };

    const changeToClear = (): void => {
        setToClear(!toClear);
    };

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
                <Canvas
                    color={color}
                    tool={tool}
                    radiusButton={radiusButton}
                    toClear={toClear}
                />
                <Chat />
            </div>
            <CanvasPanel
                color={color}
                changeColor={changeColor}
                changeTool={changeTool}
                changeRadiusButton={changeRadiusButton}
                changeToClear={changeToClear}
            />
        </div>
    );
};
