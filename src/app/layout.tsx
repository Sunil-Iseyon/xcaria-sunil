import "../global.css";
import { Inter } from "@next/font/google";
import LocalFont from "@next/font/local";
import { Metadata } from "next";
import { Analytics } from "../components/analytics";
import Nav from '../components/nav';

// function generateMetadata() {
//   return {
//     metadataBase: 'https://yourwebsite.com', // replace with your actual website URL
//     // ...other metadata properties
//   };
// }

export const metadata: Metadata = {
  title: {
    default: "xcaria.com",
    template: "%s | xcaria.com",
  },
  description: "Co-founder of unkey.dev and founder of planetfall.io",
  openGraph: {
    title: "chronark.com",
    description:
      "AI and ML solutions for the future of retail analytics",
    url: "https://xcaria.com",
    siteName: "xcaria.com",
    images: [
      {
        url: "https://xcaria.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "xCaria",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: '../../public/fonts/CalSans-SemiBold.ttf',
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")} >
      <head>
        <Analytics />
      </head>
      <body
        className={`bg-black ${process.env.NODE_ENV === "development" ? "debug-screens" : undefined
          }`}
      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
