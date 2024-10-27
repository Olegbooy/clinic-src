import Direction from "@/components/Direction/Direction";
import TabsQa from "@/components/TabsQA/TabsQa";
import useDoctorsBySpecialty from "@/hooks/useDoctorsBySpeciality";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";


const index = () => {
    const doctors = useDoctorsBySpecialty('psychologist')

    const { t } = useTranslation();


    return (
        <>

            <NextSeo
                title={t('head:pagesDirections:3')}
                description={t('head:main:2')}
                openGraph={{
                    url: 'https://dr-isaenko.com',
                    title: t('head:main:0'),
                    description: t('head:main:2'),
                    images: [
                        {
                            url: '/baghe_ua.jpg',
                            width: 1680,
                            height: 960,
                            alt: 'business card',
                        },
                    ],
                    site_name: t('head:main:0'),
                }}
                additionalLinkTags={[
                    {
                        rel: 'icon',
                        href: '/favicon32.png',
                        sizes: '32x32'
                    },
                    {
                        rel: 'icon',
                        href: '/favicon150.png',
                        sizes: '150x150',
                    },
                ]}
            />


            <Direction
                doctor={doctors}
                nameDirection='directionPages:nameDirection:2'
                titleDirection='directionPages:titleDirection:2'
                subtitleDirection='directionPages:subtitleDirection:2'
            />

            <TabsQa />
        </>
    );
};

export default index;


