import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const templatePath = path.resolve(distDir, 'index.html');
const serverEntryPath = path.resolve(rootDir, 'dist-ssr', 'entry-server.js');

async function prerender() {
  console.log('--- Starting Static Pre-Rendering (SSG) ---');
  
  if (!fs.existsSync(templatePath)) {
    throw new Error(`Client template not found at ${templatePath}. Run vite build first.`);
  }

  if (!fs.existsSync(serverEntryPath)) {
    throw new Error(`SSR bundle not found at ${serverEntryPath}. Run vite build --ssr first.`);
  }

  const template = fs.readFileSync(templatePath, 'utf-8');
  const { render } = await import(serverEntryPath);

  const pages = [
    {
      route: '/',
      outPath: path.resolve(distDir, 'index.html'),
      title: 'Townframe | Websites for Calgary Local Businesses',
      description: 'Custom websites for Calgary businesses. Free build, live in a week, $299/month for hosting, updates and support.',
      canonical: 'https://townframe.ca/',
      ogImage: 'https://townframe.ca/og-home.png',
      schemaDescription: 'Custom websites for Calgary businesses. Free build, live in a week, $299/month for hosting, updates and support.'
    },
    {
      route: '/contractors',
      outPath: path.resolve(distDir, 'contractors', 'index.html'),
      fallbackPath: path.resolve(distDir, 'contractors.html'),
      title: 'Contractor Websites in Calgary | Townframe',
      description: 'Websites for Calgary renovation contractors. Free build, live in a week, $299/month. Built by a former construction project engineer.',
      canonical: 'https://townframe.ca/contractors',
      ogImage: 'https://townframe.ca/og-contractors.png',
      schemaDescription: 'Websites for Calgary renovation contractors. Free build, live in a week, $299/month. Built by a former construction project engineer.'
    }
  ];

  for (const page of pages) {
    console.log(`Pre-rendering route: ${page.route}`);
    const { html: appHtml } = render(page.route);

    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "Townframe",
      "areaServed": "Calgary",
      "telephone": "+1-403-988-8659",
      "url": "https://townframe.ca",
      "description": page.schemaDescription
    };

    const headTags = `
    <title>${page.title}</title>
    <meta name="description" content="${page.description}" />
    <link rel="canonical" href="${page.canonical}" />

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${page.canonical}" />
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:image" content="${page.ogImage}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />

    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:url" content="${page.canonical}" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${page.ogImage}" />

    <!-- JSON-LD ProfessionalService Schema -->
    <script type="application/ld+json">
${JSON.stringify(jsonLd, null, 2)}
    </script>
`;

    // Replace default <title>...</title> and inject metadata tags
    let pageHtml = template.replace(/<title>.*?<\/title>/i, headTags);
    
    // Inject rendered body into <div id="root"></div>
    pageHtml = pageHtml.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

    // Ensure output directory exists
    const outDir = path.dirname(page.outPath);
    if (!fs.existsSync(outDir)) {
      fs.mkdirSync(outDir, { recursive: true });
    }

    fs.writeFileSync(page.outPath, pageHtml, 'utf-8');
    console.log(`  -> Written to ${page.outPath} (${Buffer.byteLength(pageHtml, 'utf-8')} bytes)`);

    if (page.fallbackPath) {
      fs.writeFileSync(page.fallbackPath, pageHtml, 'utf-8');
      console.log(`  -> Fallback written to ${page.fallbackPath}`);
    }
  }

  // Remove temporary dist-ssr directory
  const ssrDir = path.resolve(rootDir, 'dist-ssr');
  if (fs.existsSync(ssrDir)) {
    fs.rmSync(ssrDir, { recursive: true, force: true });
  }

  console.log('--- Static Pre-Rendering Complete! ---');
}

prerender().catch((err) => {
  console.error('Prerender failed:', err);
  process.exit(1);
});
