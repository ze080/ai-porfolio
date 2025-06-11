import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

const defaultMeta = {
  title: 'Zayed Binjad | AI Engineer Portfolio',
  description: 'Follow Zayed Binjad’s journey to becoming a top-tier AI engineer. Projects, blogs, and weekly learning timeline.',
  url: 'https://zayedbinjad.dev',
  image: 'https://zayedbinjad.dev/og-image.png', // Optional: set your OG image
  type: 'website',
};

const SEO = ({ title, description, image, url }) => {
  const meta = {
    ...defaultMeta,
    title: title || defaultMeta.title,
    description: description || defaultMeta.description,
    image: image || defaultMeta.image,
    url: url || defaultMeta.url,
  };

  return (
    <HelmetProvider>
      <Helmet>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={meta.type} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:image" content={meta.image} />
        <meta property="og:url" content={meta.url} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Helmet>
    </HelmetProvider>
  );
};

export default SEO;
