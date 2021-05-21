import React, { useCallback, useEffect, useState } from 'react';
import CanvasDraw from 'react-canvas-draw';
import { useSelector } from 'react-redux';
import socket from '../socket';
import { selectColor, selectRadius, selectToClear, selectTool } from '../store/ducks/canvas/selectors';
import { selectRoomId } from '../store/ducks/rooms/selectors';

export const Canvas: React.FC = () => {
    const roomId = useSelector(selectRoomId);
    const color = useSelector(selectColor);
    const tool = useSelector(selectTool);
    const radius = useSelector(selectRadius);
    const toClear = useSelector(selectToClear);
    const [brushColor, setBrushColor] = useState(color);

    let saveableCanvas: any;

    const drawController = useCallback(() => {
        socket.emit('ROOM:DRAW', {
            saveableCanvas: saveableCanvas.getSaveData(),
            roomId,
        });
        console.log(saveableCanvas.getSaveData());
    }, [roomId, saveableCanvas]);

    useEffect(() => {
        socket.on('ROOM:DRAW', (data) => {
            if (!saveableCanvas) {
                return;
            }

            saveableCanvas.loadSaveData(data);
        });
    }, [saveableCanvas]);

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
        drawController();
        // eslint-disable-next-line
    }, [toClear, saveableCanvas]);

    return (
        <div className="temp-canvas" onClick={drawController}>
            <CanvasDraw
                ref={canvasDraw => { saveableCanvas = canvasDraw }}
                style={{ width: '100%', height: '100%' }}
                hideGrid
                brushRadius={radius}
                brushColor={brushColor}
                immediateLoading={true}
            />
        </div>
    );
};