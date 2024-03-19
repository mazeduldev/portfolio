import { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import { Toaster } from "react-hot-toast";
import cn from "classnames";
import Navbar from "@/components/navigation/Navbar";
import "@/styles/globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-primary",
});
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Mazedul Islam",
    default: "Mazedul Islam",
  },
  description:
    "Fullstack software engineer experienced in JavaScript, Typescript, ReactJS, Next.js, Angular, NodeJS, Express, Java, Spring-boot, Python, FastAPI, CI/CD pipeline, Docker, Kubernetes, Microservice, MySQL, MongoDB, Postgres, DynamoDB, AWS, Azure, GCP etc. for Web Development.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn(poppins.variable, ubuntu.variable)}>
      <body>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
