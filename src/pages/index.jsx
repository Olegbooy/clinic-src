import { NextSeo } from "next-seo";
import { useTranslation } from "react-i18next";
import styles from './styles.module.scss';
import Intro from "./parts/Intro";
import AboutClinic from "./parts/AboutClinic";
import TrustCompany from "./parts/TrustCompany";
import IsaenkoSection from "@/components/IsaenkoSection/IsaenkoSection";
import Team from "./parts/Team";
import HoverCardsInfo from "@/components/HoverCardsInfo/HoverCardsInfo";
import OurTeam from "./parts/OurTeam";
import Multimodal from "./parts/Multimodal";
import InpatientTreatment from "./parts/InpatientTreatment";
import TabsQa from "@/components/TabsQA/TabsQa";
import Popup from "./parts/Popup";
import Cookie from "@/components/Cookie";


export default function Index() {
    const { t } = useTranslation('home');

    const info = [
        { title: '30 000+', subtitle: 'home:cardsInfoSection:0' },
        { title: '53', subtitle: 'home:cardsInfoSection:1' },
        { title: 'home:cardsInfoSection:2', subtitle: 'home:cardsInfoSection:3' },
        { title: '1', subtitle: 'home:cardsInfoSection:4' }
    ]

    const infoLicensing = [
        { title: 'home:certificate:0', subtitle: 'home:certificate:3' },
        { title: 'home:certificate:1', subtitle: 'home:certificate:4' },
        { title: 'home:certificate:2', subtitle: 'home:certificate:5' },
        { title: '1', subtitle: 'home:certificate:6' }
    ]



    return (
        <>
            <NextSeo
                title={t('head:main:0')}
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

            <Intro />
            <Cookie />

            {/* Перша група секцій */}
            <main className={styles.firstGroup}>
                <AboutClinic />
                <TrustCompany />
                <IsaenkoSection title={{ __html: t('general:isaenkoTitle:0') }} />,
                <Team />
            </main>

            {/* Друга група секцій */}
            <main className={styles.secondGroup}>
                <HoverCardsInfo info={info} />
                <OurTeam />
                <Multimodal />
                <InpatientTreatment />
                <HoverCardsInfo info={infoLicensing} />

            </main>
            <Popup />
            <TabsQa />
        </>
    );
}


