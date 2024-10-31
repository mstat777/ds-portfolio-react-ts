import "./MainBtn.scss";
import { ButtonProps } from "../../configs/types";

export default function MainBtn(props: ButtonProps) {
    const {type, text, onClick} = props;

    return (
        <button 
            type={type}
            onClick={() => onClick} 
            className="main_btn">
                {text}
        </button>
    );
}