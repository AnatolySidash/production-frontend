import { classNames } from "shared/lib/classNames/classNames";
import mainClass from "./Button.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export const enum ThemeButton {
   CLEAR = 'clear'
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
   className?: string;
   theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {

   const {
      className,
      children,
      theme,
      ...otherProps } = props;

   return (
      <button
         className={classNames(mainClass.Button, {}, [className, mainClass[theme]])}
         {...otherProps}
      >
         {children}
      </button>
   );
}