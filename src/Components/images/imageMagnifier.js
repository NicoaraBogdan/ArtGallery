import { useEffect, useRef, useState } from 'react';
import { clamp } from '../../Utils/MathExtensions';
import './imageMagnifier.css'
import '../general.css'

const zoomScale = 50;
const borderWidth = 1;

export default function ImageMagnifier({src = '', close}){
    const [height, setHeight] = useState();
    const [width, setWidth] = useState();
    const [updatedImgPosition, setUpdatedImgPosition] = useState();
    const [isMoving, setIsMoving] = useState(false);
    const [mousePivotPoint, setMousePivotPoint] = useState();
    const [distMovedFromOrigin, setDistMovedFromOrigin] = useState([0, 0]);
    const [scaleHeight, setScaleHeight] = useState(true);

    const imgRef = useRef();
    const containerRef = useRef();

    const handelPageResize = () =>{
        const containerBoudingClient = containerRef.current.getBoundingClientRect();
        const imgBoudingClient = imgRef.current.getBoundingClientRect();

        if(containerBoudingClient.width < imgBoudingClient){
            imgRef.current.style.position = 'absolute';
        }
        else{
            imgRef.current.style.position = 'relative';
        }
    }

    const handleZoom = (zoomIn) => {
        var zoomFactor =  zoomIn ? 1 : -1;
        var localHeight = imgRef.current.clientHeight;
        var localWidth = imgRef.current.clientWidth;
        
        localHeight +=  zoomFactor * zoomScale;
        localWidth +=  zoomFactor * zoomScale;

        const imgStyle = imgRef.current.style;
        const imgSize = imgRef.current.getBoundingClientRect();
        const containerSize = containerRef.current.getBoundingClientRect();

        if(imgSize.width > containerSize.width && imgSize.height > containerSize.height){
            imgStyle.position = 'absolute';

            if(zoomIn === false){
                var newX = updatedImgPosition?.x;
                var newY = updatedImgPosition?.y;

                if(imgSize.height > containerSize.height){
                    if(imgSize.bottom - zoomScale < containerSize.bottom){
                        newY = updatedImgPosition?.y + (containerSize.bottom - imgSize.bottom + zoomScale - borderWidth );
                    }
                }

                if(imgSize.width > containerSize.width){
                    if(imgSize.right - zoomScale < containerSize.right){
                        newX = updatedImgPosition?.x + (containerSize.right - imgSize.right + zoomScale - borderWidth)
                    }
                }

                setUpdatedImgPosition({
                    'x': newX,
                    'y': newY
                })
            }
        }
        else{
            imgStyle.position = 'relative';
            setUpdatedImgPosition({
                'x' : 0,
                'y' : 0
            })
        }

        if(scaleHeight){
          setHeight(localHeight)
        }else{
          setWidth(localWidth)
        }
    }

    function handleMouseMove(e){
        const parentCoord = containerRef.current.getBoundingClientRect();
        const imgCoord = imgRef.current.getBoundingClientRect();
        var newX = (mousePivotPoint?.x - e.x) * (-1);
        var newY = (mousePivotPoint?.y - e.y) * (-1);
        
        const widthDiff = Math.max(imgCoord.width - parentCoord.width, 0);
        const heightDiff = Math.max(imgCoord.height - parentCoord.height, 0);
        
        newX = clamp(-widthDiff, 0, newX);
        newY = clamp(-heightDiff, 0, newY);
        
        setUpdatedImgPosition({
            "x" :  newX,
            "y" :  newY
        })
    }

    const handleMouseDown = e =>{
      setMousePivotPoint({
          "x" : e.clientX - distMovedFromOrigin[0],
          "y" : e.clientY - distMovedFromOrigin[1]
      });
      setIsMoving(true);
    } 

    const handleMouseUp = () => {
      if(updatedImgPosition !== undefined){
          setDistMovedFromOrigin([updatedImgPosition?.x, updatedImgPosition?.y]);
      }
      else{
          setDistMovedFromOrigin([0, 0]);
      }
      setIsMoving(false);
    }

    const handleScroll = e => {
      if(e.detail < 0){
          handleZoom(true)
      }
      else{
          handleZoom(false);
      }
    }

    const reset = () => {
      if(scaleHeight){
        setHeight(containerRef.current.getBoundingClientRect().height);
      }else{
        setWidth(containerRef.current.getBoundingClientRect().width);
      }
      imgRef.current.style.position = 'relative';
      imgRef.current.style.top = 'unset';
      imgRef.current.style.left = 'unset';
    }

    const setInitialDimension = event => {
      if(event.target.width > event.target.height) {
        setScaleHeight(false);
      }else{
        setScaleHeight(true);
      }
    }

    useEffect(() => {
        if(isMoving){
            window.addEventListener("mousemove", handleMouseMove);
        }

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        }
    }, [isMoving])

    useEffect(() => {
        handelPageResize();
        window.addEventListener("resize", handelPageResize);
        window.addEventListener("DOMMouseScroll", handleScroll);

        return () => {
            window.removeEventListener("resize", handelPageResize);
            window.removeEventListener("DOMMouseScroll", handleScroll);
        }
    })

    return(
        <div className='zoom-page-container'>
            <div className='background-fade'/>
            <div ref={containerRef} className='zoom-page'>
                <div className='cross-mark-container'>
                    <span onClick={close} className='cross-mark'/>
                </div>
                <img  
                    alt=""
                    draggable="false"
                    onLoad={event => setInitialDimension(event)}
                    onMouseDown={e => handleMouseDown(e)}
                    onMouseUp={() => handleMouseUp()}
                    ref={imgRef}
                    style={{backgroundColor: 'black', 
                      height: height, 
                      width: width, 
                      top: `${updatedImgPosition?.y}px`, 
                      left: `${updatedImgPosition?.x}px`}}
                    src={src}
                    />
                <div onClick={reset} className='reset-button'>
                    <span>Reset</span>
                </div>
            </div>
        </div>
    );
}