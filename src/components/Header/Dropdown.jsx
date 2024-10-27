import { useRef, useState } from 'react';
import clsx from 'clsx';
import classes from './styles.module.scss';
import Arrow from './Arrow';
import { manrope, ubuntu } from '@/fonts/fonts';

export default function Dropdown({ items, onSelect, selectedItem, isUpperCase = false, className, isVisible }) {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleSelect = (item) => {
        onSelect(item);
        if (isVisible) {
            setDropdownOpen(false);
        }
    };

    const formatSelectedItem = (item) => (isUpperCase ? item.toUpperCase() : item);


    return (
        <>
            <div
                ref={dropdownRef}
                className={clsx(classes.dropdownContainer, className)}
                onMouseEnter={() => setDropdownOpen(!dropdownOpen)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <button
                    className={clsx(classes.appointment, ubuntu.className)}

                >
                    {formatSelectedItem(selectedItem)} {/* Відображаємо перекладений текст */}
                    <Arrow />
                </button>

                <div className={`${classes.dropdown} ${dropdownOpen ? classes.active : ''}`}>
                    {items.map((item) => (
                        <button
                            key={item.id}
                            className={clsx(classes.dropdownItem, {
                                [classes.active]: item.label === selectedItem || item.id === selectedItem,

                            }, manrope.className)}
                            onClick={() => handleSelect(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
            <div
                ref={dropdownRef}
                className={clsx(classes.dropdownContainer, className, classes.dropdownContainerMobile)}
                onClick={() => setDropdownOpen(!dropdownOpen)}
            >
                <button
                    className={clsx(classes.appointment, ubuntu.className)}

                >
                    {formatSelectedItem(selectedItem)} {/* Відображаємо перекладений текст */}
                    <Arrow />
                </button>

                <div className={`${classes.dropdown} ${dropdownOpen ? classes.active : ''}`}>
                    {items.map((item) => (
                        <button
                            key={item.id}
                            className={clsx(classes.dropdownItem, {
                                [classes.active]: item.label === selectedItem || item.id === selectedItem,

                            }, manrope.className)}
                            onClick={() => handleSelect(item.id)}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}