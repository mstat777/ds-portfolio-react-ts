import "./TypeWriter.css";
import { useState, useEffect, useRef } from "react";

export default function TypeWriter({text}: {text: string}) {
    const [index, setIndex] = useState<number>(0);

    const mainString = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const timeout = setInterval(() => {
            setIndex(index+1);
        }, 150);

        if (index === text.length) {
            clearInterval(timeout);
        }

        return () => clearInterval(timeout);
    },[index]);
/*
    useEffect(() => {
        if (mainString.current?.children.length) {
            console.log(mainString.current.children[0]);
            //mainString.current.className = "new_letter";
        }
    },[index]);*/

    return (
        <div ref={mainString} className="typewriter_ctn">
            <span>{text.charAt(0)}</span>{/* in order to get div height on initialization */}
            {text
                .split("")
                .slice(1, index)
                .map((char, i) => (
                <span key={i}>{char}</span>
                ))
            }
        </div>
    );
}

/* ------------- Variant: String with Slice ----------------
export default function TypeWriter({text}: {text: string}) {
    const [index, setIndex] = useState<number>(0);

    const mainString = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const timeout = setInterval(() => {
            setIndex(index+1);
        }, 1800);

        if (index === text.length) {
            clearInterval(timeout);
        }

        return () => clearInterval(timeout);
    },[index]);

    useEffect(() => {

    },[]);

    return (
        <div className="typewriter_ctn">
            <span ref={mainString} className="main_string">{text.slice(0, index)}</span>
            <span className="new_letter">{text.slice(index, index+1)}</span>
        </div>
    ) 
}*/