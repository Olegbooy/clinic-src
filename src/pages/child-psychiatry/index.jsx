import Direction from "@/components/Direction/Direction";
import TabsQa from "@/components/TabsQA/TabsQa";
import useDoctorsBySpecialty from "@/hooks/useDoctorsBySpeciality";
import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";


const index = () => {
    const doctors = useDoctorsBySpecialty('child-psychiatry')

    const { t } = useTranslation();

    let rearrangedDoctors = [...doctors];

    if (rearrangedDoctors.length >= 4) {
        const lastDoctor = rearrangedDoctors.pop();
        rearrangedDoctors.splice(3, 0, lastDoctor);
    }

    return (
        <>
            <NextSeo
                title={t('head:pagesDirections:4')}
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
                doctor={rearrangedDoctors}
                nameDirection='directionPages:nameDirection:4'
                titleDirection='directionPages:titleDirection:4'
                subtitleDirection='directionPages:subtitleDirection:4'
            />

            <TabsQa />
        </>
    );
};

export default index;


