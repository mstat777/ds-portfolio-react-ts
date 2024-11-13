import { useState } from 'react';

type Props = {
    imgSrc: string;
    blurImgSrc: string;
    children?: JSX.Element[] | JSX.Element;
    style?: React.CSSProperties;
};

export default function LazyImage({ imgSrc, blurImgSrc, children, style }: Props) {
    const [loaded, setLoaded] = useState<boolean>(false);

    const handleLoad = () => {
        setLoaded(true);
    };

    return (
        <div 
            className="blur_ctn"
            style={{ 
                position: "relative",
                height: "100%",
                overflow: "hidden",
                backgroundImage: loaded ? "unset" :`url(${blurImgSrc})`,
                ...style
            }}
        >
            {/* The 'absolute' div is only to limit the blur effect inside the parent's borders */}
            <div
                style={{ 
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    zIndex: -1,
                    filter: loaded ? "none" : "blur(10px)",
                    msFilter: loaded ? "none" : "blur(10px)",
                    WebkitFilter: loaded ? "none" : "blur(10px)",
                    transition: "filter 1s ease-in-out",
                    msTransition: "filter 1s ease-in-out",
                    WebkitTransition: "filter 1s ease-in-out"
                }} 
            >
            </div>

            <img
                alt=""
                loading="lazy"
                src={imgSrc} 
                onLoad={handleLoad}
            />
        </div>
    );
};