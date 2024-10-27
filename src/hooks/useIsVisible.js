import { useState, useEffect } from 'react';

const useIsVisible = (breakpoint = 992) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsVisible(window.innerWidth >= breakpoint);
        };

        if (typeof window !== 'undefined') {
            handleResize();
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, [breakpoint]);

    return isVisible;
};

export default useIsVisible;