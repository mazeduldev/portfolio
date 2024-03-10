import { Metadata } from "next";
import { Poppins, Ubuntu } from "next/font/google";
import cn from "classnames";
import { Toaster } from "react-hot-toast";
import Navbar from "@/components/navbar";
import "../styles/globals.scss";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});
const ubuntu = Ubuntu({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
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
    <html lang="en">
      <body className={cn(poppins.className, ubuntu.className)}>
        <Navbar />
        {children}
        <Toaster position="top-right" reverseOrder={false} />
      </body>
    </html>
  );
}
