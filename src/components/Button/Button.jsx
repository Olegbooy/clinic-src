import clsx from 'clsx';
import classes from './styles.module.scss';
import Link from 'next/link';
import { manrope } from '@/fonts/fonts';

const ButtonLink = ({ children, className, href }) => {
    return (
        <Link href={href} className={clsx(classes.button, className, manrope.className)}>
            {children}
        </Link>
    );
};

export default ButtonLink;