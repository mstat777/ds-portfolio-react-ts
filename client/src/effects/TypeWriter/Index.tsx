import "./TypeWriter.css";
import { useState, useEffect, forwardRef, Ref } from "react";

type Props = {
    text: string;
    className: string | undefined;
}

const TypeWriter = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
    const { text, className } = props;
    const [index, setIndex] = useState<number>(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            setIndex(index+1);
        }, 150);

        if (index === text.length) {
            clearInterval(timeout);
        }

        return () => clearInterval(timeout);
    },[index]);

    return (
        <div ref={ref} className={`typewriter_ctn ${className}`}>
            <span>{text.charAt(0)}</span>{/* in order to set div some initial height */}
            {text
                .split("")
                .slice(1, index)
                .map((char, i) => (
                <span key={i}>{char}</span>
                ))
            }
        </div>
    );
});

export default TypeWriter;