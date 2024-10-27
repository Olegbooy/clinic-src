import { useRouter } from 'next/router';
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AppointmentButton from '../AppointmentButton';
import { useEffect, useState, useRef } from 'react';
import { manrope } from '@/fonts/fonts';

export default function Layout({ children }) {
    const [showButton, setShowButton] = useState(false);
    const router = useRouter();
    const isAdminPanel = router.pathname.startsWith('/admin'); 

    const observerTarget = useRef(null);  // Реф для вашого target елемента

    useEffect(() => {
        const handleScroll = () => {
            const targetPosition = observerTarget.current?.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (window.scrollY > 1000) {
                setShowButton(true);
            } 
            if (window.scrollY < 1000) {
                setShowButton(false);
            } 

            if (targetPosition && targetPosition < windowHeight) {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {!isAdminPanel && <Header />}
            <main style={{ maxWidth: '100%', overflow: 'hidden' }} className={manrope.className}>{children}</main>
            <div ref={observerTarget} style={{ height: '0', background: 'none' }}></div>
            {!isAdminPanel && <Footer />}
            {!isAdminPanel && <AppointmentButton activeButton={showButton} />}
        </>
    );
}
