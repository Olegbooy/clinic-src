import { manrope } from '@/fonts/fonts';
import { appWithTranslation } from 'next-i18next';
import { I18nProvider } from '../contexts/i18nContext';
import '../../config/i18n';
import '../styles/globals.scss';
import '../styles/variables.scss';
import '../styles/mixins.scss';
import '../styles/headroom.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Layout from '@/components/Layout/Layout';
import Script from 'next/script'




function MyApp({ Component, pageProps }) {


  return (
    <I18nProvider>
        <Script
            id="gtm"
            dangerouslySetInnerHTML={{
                __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M2NTX7NN');`,
            }}
        />
      <Layout className={manrope.className}>
        <Component {...pageProps} />
      </Layout>
    </I18nProvider>
  )
}

export default appWithTranslation(MyApp);
