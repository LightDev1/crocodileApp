import React, { useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { useSelector } from 'react-redux';
import { selectColor, selectRadius, selectToClear, selectTool } from '../store/ducks/canvas/selectors';

export const Canvas: React.FC = () => {
    const color = useSelector(selectColor);
    const tool = useSelector(selectTool);
    const radius = useSelector(selectRadius);
    const toClear = useSelector(selectToClear);
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