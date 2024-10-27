import { SitemapStream, streamToPromise } from 'sitemap';
import { createGzip } from 'zlib';
import { Readable } from 'stream';

export default async function handler(req, res) {
    const baseUrl = 'https://dr-isaenko.com'; 

    const smStream = new SitemapStream({ hostname: baseUrl });
    const pipeline = smStream.pipe(createGzip());

    try {
        smStream.write({ url: '/', changefreq: 'daily', priority: 1.0 });
        smStream.write({ url: '/about', changefreq: 'weekly', priority: 0.9 });
        smStream.write({ url: '/team', changefreq: 'weekly', priority: 0.8 });
        smStream.write({ url: '/inpatient-treatment', changefreq: 'weekly', priority: 0.7 });
        smStream.write({ url: '/multimodal', changefreq: 'weekly', priority: 0.6 });
        smStream.write({ url: '/contact', changefreq: 'monthly', priority: 0.5 });


        smStream.end();

        const sitemapOutput = await streamToPromise(pipeline);

        res.setHeader('Content-Type', 'application/xml');
        res.setHeader('Content-Encoding', 'gzip');

        res.write(sitemapOutput);
        res.end();
    } catch (e) {
        console.error(e);
        res.status(500).end();
    }
}
