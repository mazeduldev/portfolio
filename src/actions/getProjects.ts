"use server";
import { Project } from "@/model/project";
import crTrackerImage from "@/public/images/cr_tracker.webp";
import timelineImage from "@/public/images/timeline_collage.webp";
import bsSpacingImage from "@/public/images/bs_spacing.webp";
import portfolioImage from "@/public/images/portfolio_cover.webp";
import slimwikiImage from "@/public/images/slimwiki.svg";
import briklStorefrontImage from "@/public/images/brikl_storefront.webp";

export async function getProjects() {
  const projects: Project[] = [
    // {
    //   title: "MediaLib",
    //   description:
    //     "Display popular movies, TV shows and Animes using TMDB and Anilist API connected with GraphQL.",
    //   sourceUrl: "https://github.com/mazid1/media-lib",
    //   demoUrl: "https://media-lib-mzd.vercel.app/",
    //   imageUrl: mediaLibImage,
    //   imageAlt: "MediaLib",
    //   tags: ["nextjs", "graphql", "prisma"],
    //   type: "project",
    // },
    {
      title: "OOZOU | SlimWiki",
      description: "Easy-to-use Wikis for Teams & Individuals",
      liveUrl: "https://beta.slimwiki.com",
      imageUrl: slimwikiImage,
      imagePlaceholder: "empty",
      imageAlt: "SlimWiki",
      tags: ["reactjs", "nextjs", "nodejs", "postgres", "dynamodb", "aws"],
    },
    {
      title: "Brikl | Storefront",
      description: "Create your own storefront under 15 minutes.",
      liveUrl: "https://brikl.com",
      imageUrl: briklStorefrontImage,
      imageAlt: "Brikl-Storefront",
      tags: ["reactjs", "nextjs", "jotai", "netlify"],
    },
    {
      title: "Orbitax | Change Reports Tracker",
      description:
        "Track worldwide tax law changes daily across 50 different tax topics.",
      demoUrl: "https://youtu.be/yc73lMz5zJk?si=923YBlqf2fMKbWi-",
      articleUrl: "https://orbitax.com/solutions/change-reports-tracker",
      imageUrl: crTrackerImage,
      imageAlt: "Change Reports Tracker",
      tags: ["angular", "angular-material", "ngrx"],
    },
    {
      title: "ngx-mzd-timeline",
      description:
        "Angular material theme supported minimalist's vertical timeline library for Angular applications.",
      sourceUrl: "https://github.com/mazid1/ngx-mzd-timeline",
      liveUrl: "https://mazid1.github.io/ngx-mzd-timeline/",
      imageUrl: timelineImage,
      imageAlt: "Timeline",
      tags: ["angular", "angular-material"],
    },
    {
      title: "Portfolio",
      description:
        "Personal portfolio website developed using reactjs and nextjs.",
      liveUrl: "#",
      imageUrl: portfolioImage,
      imageAlt: "Portfolio",
      tags: ["reactjs", "nextjs", "vercel"],
    },
    {
      title: "bs-spacing",
      description:
        "An article on how to generate bootstrap like spacing classes using Sass.",
      sourceUrl: "https://github.com/mazid1/bs-spacing",
      articleUrl:
        "https://dev.to/mazid1/generate-bootstrap-like-spacing-classes-using-sass-49g8",
      imageUrl: bsSpacingImage,
      imageAlt: "Timeline",
      tags: ["sass", "scss", "css"],
    },
  ];
  return projects;
}
