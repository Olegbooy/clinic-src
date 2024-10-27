// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config) => {
//     config.resolve.alias['@'] = path.resolve(__dirname, 'src');
//     return config;
//   },

// }

// export default nextConfig;


const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/child-psychiatry',
        destination: '/child-psychiatry',
        permanent: true,
      },
      {
        source: '/narсologist',
        destination: '/narсologist',
        permanent: true,
      },
      {
        source: '/neurologist',
        destination: '/neurologist',
        permanent: true,
      },
      {
        source: '/neurophysiologist',
        destination: '/neurophysiologist',
        permanent: true,
      },
      {
        source: '/pathopsychologist',
        destination: '/pathopsychologist',
        permanent: true,
      },
      {
        source: '/psychiatrist',
        destination: '/psychiatrist',
        permanent: true,
      },
      {
        source: '/psychologist',
        destination: '/psychologist',
        permanent: true,
      },
      {
        source: '/psychotherapist',
        destination: '/psychotherapist',
        permanent: true,
      },
      {
        source: '/sexologist',
        destination: '/sexologist',
        permanent: true,
      },
      {
        source: '/therapist',
        destination: '/therapist',
        permanent: true,
      },
      {
        source: '/ultrasound',
        destination: '/ultrasound',
        permanent: true,
      },
      {
        source: '/about',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/team',
        destination: '/team',
        permanent: true,
      },
      {
        source: '/inpatient-treatment',
        destination: '/inpatient-treatment',
        permanent: true,
      },
      {
        source: '/contacts',
        destination: '/contacts',
        permanent: true,
      },
      {
        source: '/multimodal',
        destination: '/multimodal',
        permanent: true,
      },
      {
        source: '/',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
