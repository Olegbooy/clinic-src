import { memo } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';

const Container = ({ children, className }) => {
    return (
        <div className={clsx(classes.root, className)}>
            {children}
        </div>
    );
};

export default memo(Container);