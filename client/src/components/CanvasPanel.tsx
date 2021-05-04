import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setColor, setRadius, setToClear, setTool } from '../store/ducks/canvas/actionCreators';
import { selectColor, selectToClear } from '../store/ducks/canvas/selectors';

export const CanvasPanel: React.FC = () => {
    const dispatch = useDispatch();
    const color = useSelector(selectColor);
    const toClear = useSelector(selectToClear);
    const currentColor = useRef(null);

    useEffect(() => {
        //@ts-ignore
        currentColor.current.style.backgroundColor = color;
    }, [color]);

    const onlickColor = (event: any): void => {
        const element = event.target;

        dispatch(setColor(element.dataset.color));
    };

    const onClickTool = (tool: string): void => {
        dispatch(setTool(tool));
    };

    const onChangeToClear = () => {
        dispatch(setToClear(!toClear));
    };

    return (
        <div className="canvas-panel__contaner">
            <div className="canvas-panel">
                <div className="current__color" ref={currentColor}></div>
                <div className="colors__bar">
                    <button className="color" id="color1" data-color="#FFFFFF" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color2" data-color="#C1C1C1" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color3" data-color="#EF130B" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color4" data-color="#FF7100" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color5" data-color="#FFE400" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color6" data-color="#00CC00" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color7" data-color="#00B2FF" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color8" data-color="#231FD3" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color9" data-color="#A300BA" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color10" data-color="#D37CAA" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color11" data-color="#A0522D" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color12" data-color="#000000" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color13" data-color="#4C4C4C" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color14" data-color="#740B07" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color15" data-color="#C23800" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color16" data-color="#E8A200" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color17" data-color="#005510" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color18" data-color="#00569E" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color19" data-color="#0E0865" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color20" data-color="#550069" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color21" data-color="#A75574" onClick={(event) => { onlickColor(event) }}></button>
                    <button className="color" id="color22" data-color="#63300D" onClick={(event) => { onlickColor(event) }}></button>
                </div>
                <div className="tools__bar">
                    <button className="brush" onClick={() => { onClickTool('brush') }}></button>
                    <button className="eraser" onClick={() => { onClickTool('eraser') }}></button>
                </div>
                <div className="brush-radius__container">
                    <button className="small" onClick={() => { dispatch(setRadius(5)) }}>
                        <div className="circle-small"></div>
                    </button>
                    <button className="normal" onClick={() => { dispatch(setRadius(10)) }}>
                        <div className="circle-normal"></div>
                    </button>
                    <button className="big" onClick={() => { dispatch(setRadius(15)) }}>
                        <div className="circle-big"></div>
                    </button>
                    <button className="very-big" onClick={() => { dispatch(setRadius(17.5)) }}>
                        <div className="circle-very-big"></div>
                    </button>
                </div>
                <div className="clean" onClick={() => { onChangeToClear() }}></div>
            </div>
        </div>
    );
};