import classes from './styles.module.scss';
import clsx from 'clsx';

const Arrow = ({ className }) => {
    return (
        <div className={clsx(classes.arrow, className)}>
            <span></span>
            <span></span>
        </div>
    )
}

export default Arrow;