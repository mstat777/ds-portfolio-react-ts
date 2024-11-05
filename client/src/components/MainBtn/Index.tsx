import "./MainBtn.scss";
import { forwardRef, Ref } from "react";
import { ButtonProps } from "../../configs/types";

const MainBtn = forwardRef((props: ButtonProps, ref: Ref<HTMLButtonElement>) => {
    const {type, text, onClick} = props;

    return (
        <button 
            ref={ref}
            type={type}
            onClick={() => onClick} 
            className="main_btn">
                {text}
        </button>
    );
});

export default MainBtn;