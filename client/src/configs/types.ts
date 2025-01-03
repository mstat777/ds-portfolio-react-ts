import { MouseEventHandler, FormEvent } from "react";

export type InputValidationResult = {
    isValid: boolean;
    errMsg: string;
}

export type ButtonProps = {
    type: "submit" | "reset" | "button" | undefined;
    text: string;
    onClick: (event: FormEvent<HTMLFormElement>) => void | MouseEventHandler<HTMLButtonElement> | undefined;
}

export type SkillType = {
    name: string,
    image: string
}