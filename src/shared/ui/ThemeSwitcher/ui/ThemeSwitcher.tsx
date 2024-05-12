import { classNames } from "shared/lib/classNames/classNames";
import mainClass from "./ThemeSwitcher.module.scss";
import { Theme, useTheme } from "app/providers/themeProvider";
import LightIcon from 'shared/assets/icons/theme-light.svg';
import DarkIcon from 'shared/assets/icons/theme-dark.svg';
import { Button, ThemeButton } from "shared/ui/Button/Button";

interface ThemeSwitcherProps {
   className?: string;
}

export const ThemeSwitcher = ({ className }: ThemeSwitcherProps) => {

   const { theme, toggleTheme } = useTheme();

   return (
      <Button
         theme={ThemeButton.CLEAR}
         className={classNames(mainClass.ThemeSwitcher, {}, [className])}
         onClick={toggleTheme}>
         {theme === Theme.LIGHT ? <DarkIcon width={30} height={30} /> : <LightIcon width={30} height={30} />}
      </Button>
   );
}