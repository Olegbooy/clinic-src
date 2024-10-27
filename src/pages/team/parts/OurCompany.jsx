import { useEffect, useState } from "react";
import Container from "@/components/Container";
import classes from "../OurCompany.module.scss";
import DoctorCard from "@/components/DoctorCard/DoctorCard";
import { Trans, useTranslation } from "react-i18next";
import FilterButtons from "./FilterButtons";
import { db } from "@/db/firebase";
import { ref, onValue } from "firebase/database";
import Directions from "./Directions";

const OurCompany = () => {
    const [data, setData] = useState([]);
    const [cityFilter, setCityFilter] = useState('all');
    const [onlineFilter, setOnlineFilter] = useState(false);
    const [directionFilter, setDirectionFilter] = useState('all');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [activeSort, setActiveSort] = useState(0);


    const handleDirectionClick = (direction) => {
        setDirectionFilter(direction);
        setCityFilter('all');
        setOnlineFilter(false);
        setIsDropdownOpen(false);
        setActiveSort(4);
    };


    const { t } = useTranslation();

    useEffect(() => {
        const dbRef = ref(db, '/');

        const unsubscribe = onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            setData(data ? Object.values(data) : []);
        });

        return () => unsubscribe();
    }, []);

    const isLoading = data.length === 0;

    const filteredDoctors = data.filter(doctor => {
        return (cityFilter === 'all' || doctor.city === cityFilter) &&
            (!onlineFilter || doctor.appointments.includes('online')) &&
            (directionFilter === 'all' || doctor.directions.includes(directionFilter));
    });

    const priorityDoctorId = 23;
    const priorityDoctor = filteredDoctors.find(doctor => doctor.id === priorityDoctorId);
    const remainingDoctors = filteredDoctors.filter(doctor => doctor.id !== priorityDoctorId);

    let sortedDoctors = remainingDoctors;

    if (priorityDoctor) {
        sortedDoctors = [
            ...remainingDoctors.slice(0, 3),
            priorityDoctor,
            ...remainingDoctors.slice(3),
        ];
    }

    return (
        <section className={classes.ourCompany}>
            <Container className={classes.container}>
                <h2 className={classes.title} dangerouslySetInnerHTML={{ __html: t('header:menu:2') }}></h2>

                <Directions className={classes.dropdownMobile} isDropdownOpen={isDropdownOpen} handleDirectionClick={handleDirectionClick} />


                <FilterButtons
                    cityFilter={cityFilter}
                    setCityFilter={setCityFilter}
                    onlineFilter={onlineFilter}
                    setOnlineFilter={setOnlineFilter}
                    directionFilter={directionFilter}
                    setDirectionFilter={setDirectionFilter}
                    setIsDropdownOpen={setIsDropdownOpen}
                    isDropdownOpen={isDropdownOpen}
                    activeSort={activeSort}
                    setActiveSort={setActiveSort}
                />

                <div className={classes.grid}>
                    {isLoading ? (
                        <p className={classes.loading}>
                            <Trans>
                                loading:0
                            </Trans>
                        </p>
                    ) : (
                        sortedDoctors.map(doctor => (
                            <DoctorCard key={doctor.id} doctor={doctor} />
                        ))
                    )}
                </div>
            </Container>
        </section>
    );
};

export default OurCompany;
