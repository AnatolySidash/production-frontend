import { classNames } from 'shared/lib/classNames/classNames';
import mainClass from './PageLoader.module.scss';
import { Loader } from '../Loader/Loader';

interface PageLoaderProps {
    className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(mainClass.PageLoader, {}, [className])}>
        <Loader />
    </div>
);
