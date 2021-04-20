import React, { useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';

interface CanvasProps {
    color: string;
    tool: string;
    radiusButton: string;
    toClear: boolean;
}

export const Canvas: React.FC<CanvasProps> = ({ color, tool, radiusButton, toClear }: CanvasProps) => {
    const [radius, setRadius] = useState(10);
    const [brushColor, setBrushColor] = useState(color);

    let saveableCanvas: any;

    useEffect(() => {
        switch (tool) {
            case 'brush':
                setBrushColor(color);
                break;

            case 'eraser':
                setBrushColor('#ffffff');
                break;

            default:
                break;
        }
    }, [tool, setBrushColor, color]);

    useEffect(() => {
        switch (radiusButton) {
            case 'small':
                setRadius(5);
                break;

            case 'normal':
                setRadius(10);
                break;

            case 'big':
                setRadius(15);
                break;

            case 'very-big':
                setRadius(17.5);
                break;

            default:
                break;
        }
    }, [radiusButton]);

    useEffect(() => {
        saveableCanvas.clear();
    }, [toClear, saveableCanvas]);

    return (
        <div className="temp-canvas">
            <CanvasDraw
                ref={canvasDraw => { saveableCanvas = canvasDraw }}
                style={{ width: '100%', height: '100%' }}
                hideGrid
                brushRadius={radius}
                brushColor={brushColor}
            />
        </div>
    );
};