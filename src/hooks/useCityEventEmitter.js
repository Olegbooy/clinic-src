import { useState, useEffect } from 'react';

const listeners = new Set();

export const useCityEventEmitter = () => {
    const [selectedCity, setSelectedCity] = useState('kharkiv');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const storedCity = localStorage.getItem('selectedCity');
            if (storedCity) {
                setSelectedCity(storedCity);
            }
        }

        listeners.add(setSelectedCity);
        return () => listeners.delete(setSelectedCity);
    }, []);

    const handleCityChange = (cityId) => {
        setSelectedCity(cityId);

        if (typeof window !== 'undefined') {
            localStorage.setItem('selectedCity', cityId);
        }
        listeners.forEach(listener => listener(cityId));
    };

    return [selectedCity, handleCityChange];
};
