import { classNames } from 'shared/lib/classNames/classNames';
import mainClass from './Navbar.module.scss';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher';

interface NavbarProps {
   className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {

   return (
      <div className={classNames(mainClass.Navbar, {}, [className])}>
         <ThemeSwitcher />
         <nav className={mainClass.links}>
            <AppLink
               theme={AppLinkTheme.SECONDARY}
               to={'/'}>Главная
            </AppLink>
            <AppLink
               theme={AppLinkTheme.SECONDARY}
               to={'/about'}>О сайте
            </AppLink>
         </nav>
      </div>
   );
};
