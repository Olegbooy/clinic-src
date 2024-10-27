import { useEffect, useState } from 'react';
import { db } from '@/db/firebase';
import { ref, onValue } from 'firebase/database';

const useDoctorsBySpecialty = (direction) => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        const dbRef = ref(db, '/');

        const unsubscribe = onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                // Фільтруємо лікарів за спеціальністю
                const filteredDoctors = Object.values(data).filter(doctor => doctor.directions && doctor.directions.includes(direction));

                // Знаходимо лікаря з ідентифікатором 23
                const priorityDoctor = filteredDoctors.find(doctor => doctor.id === 23);

                // Фільтруємо масив, видаляючи лікаря з ідентифікатором 23
                const remainingDoctors = filteredDoctors.filter(doctor => doctor.id !== 23);

                // Додаємо лікаря з ідентифікатором 23 на початок списку
                const sortedDoctors = priorityDoctor ? [priorityDoctor, ...remainingDoctors] : remainingDoctors;

                setDoctors(sortedDoctors);
            } else {
                setDoctors([]);
            }
        });

        return () => unsubscribe();
    }, [direction]);

    return doctors;
};

export default useDoctorsBySpecialty;
