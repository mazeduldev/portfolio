import { NextSeoProps } from "next-seo";

const seoConfig: NextSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_us",
    url: "https://mazedulislam.com",
    site_name: "Mazedul Islam",
    images: [
      {
        url: "https://mazedulislam.com/images/og_image.jpeg",
        width: 1200,
        height: 627,
        type: "image/jpeg",
      },
    ],
  },
  twitter: {
    handle: "@mazedul__islam",
    site: "@mazedul__islam",
    cardType: "summary_large_image",
  },
  titleTemplate: "Mazedul Islam | %s",
  defaultTitle: "Mazedul Islam",
  additionalLinkTags: [
    {
      rel: "icon",
      href: "https://mazedulislam.com/favicon.ico",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&family=Ubuntu:wght@400;500;700&display=swap",
    },
  ],
};

export default seoConfig;
