import { forwardRef, Ref } from "react";

type Props = {
    text: string;
}

const BlinkingText = forwardRef((props: Props, ref: Ref<HTMLDivElement>) => {
    const { text } = props;

    return (
        <div ref={ref}>
            <span>{text}</span>
        </div>
    );
});

export default BlinkingText;