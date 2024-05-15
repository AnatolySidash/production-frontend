import { classNames } from "shared/lib/classNames/classNames";
import mainClass from "./Sidebar.module.scss";
import { useState } from "react";
import { ThemeSwitcher } from "shared/ui/ThemeSwitcher";
import { LangSwitcher } from "shared/ui/LangSwitcher";

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {

   const [collapsed, setCollapsed] = useState(false);

   const toggleSidebar = () => {
      setCollapsed(prev => !prev);
   }

   return (
      <div className={classNames(mainClass.Sidebar, { [mainClass.collapsed]: collapsed }, [className])}>
         <button onClick={toggleSidebar}>Toggle</button>
         <div className={mainClass.switchers}>
            <ThemeSwitcher />
            <LangSwitcher className={mainClass.lang} />
         </div>
      </div>
   );
}