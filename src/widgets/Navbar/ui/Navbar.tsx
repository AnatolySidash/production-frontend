import { classNames } from 'shared/lib/classNames/classNames';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import mainClass from './Navbar.module.scss';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
    <div className={classNames(mainClass.Navbar, {}, [className])}>

        <nav className={mainClass.links}>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/"
            >
                Главная
            </AppLink>
            <AppLink
                theme={AppLinkTheme.SECONDARY}
                to="/about"
            >
                О сайте
            </AppLink>
        </nav>
    </div>
);
