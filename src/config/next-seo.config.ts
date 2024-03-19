import { NextSeoProps } from "next-seo";

const seoConfig: NextSeoProps = {
  openGraph: {
    type: "website",
    locale: "en_us",
    url: "https://mazedulislam.com/",
    title: "Mazedul Islam",
    siteName: "Mazedul Islam",
    description:
      "Fullstack software engineer experienced in JavaScript, Typescript, ReactJS, Next.js, Redux, Apollo GraphQL, Angular, NodeJS, Express, NestJS, Java, Spring-boot, Python, FastAPI, CI/CD pipeline, Docker, Kubernetes, Microservice, MySQL, MongoDB, Postgres etc. for Web Development.",
    images: [
      {
        url: "https://mazedulislam.com/images/og_image.png",
        width: 1200,
        height: 627,
        type: "image/png",
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
  ],
};

export default seoConfig;
