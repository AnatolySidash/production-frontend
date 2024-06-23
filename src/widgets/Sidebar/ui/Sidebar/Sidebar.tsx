import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';
import { LangSwitcher } from 'shared/ui/LangSwitcher';
import { Button } from 'shared/ui/Button/Button';
import mainClass from './Sidebar.module.scss';

interface SidebarProps {
   className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const toggleSidebar = () => {
        setCollapsed((prev) => !prev);
    };

    return (
        <div
            className={
                classNames(mainClass.Sidebar, { [mainClass.collapsed]: collapsed }, [className])
            }
        >
            <Button
                type="button"
                onClick={toggleSidebar}
            >
                Toggle
            </Button>
            <div className={mainClass.switchers}>
                <ThemeSwitcher />
                <LangSwitcher className={mainClass.lang} />
            </div>
        </div>
    );
};
