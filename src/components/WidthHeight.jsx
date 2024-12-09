import { useState, useEffect } from "react";

const WidthHeight = () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        }
    },[]);

    useEffect(() => {
        document.title = `Size: ${width} X ${height}`;
    }, [width, height])

    const handleResize = () => {
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return (<>
        <p>Window width: {width}px</p>
        <p>Window height: {height}px</p>
    </>)
}

export default WidthHeight;