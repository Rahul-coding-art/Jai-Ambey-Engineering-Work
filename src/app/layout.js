import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./globals.css";

export const metadata = {
  title: {
    default:
      "Jai Ambey Engineering Works | Plastic Mould & Die Manufacturer",
    template: "%s | Jai Ambey Engineering Works",
  },

  description:
    "Jai Ambey Engineering Works, established in 2009, specializes in plastic moulds, injection moulds, blow moulds, bottle cap dies, handle dies and cap dies.",

  keywords: [
    "plastic mould manufacturer",
    "plastic moulding die maker",
    "injection mould manufacturer",
    "blow mould manufacturer",
    "bottle cap die manufacturer",
    "handle die manufacturer",
    "cap die manufacturer",
    "die mould manufacturer",
    "Jai Ambey Engineering Works",
  ],

  authors: [
    {
      name: "Jai Ambey Engineering Works",
    },
  ],

  creator: "Jai Ambey Engineering Works",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title:
      "Jai Ambey Engineering Works | Plastic Mould & Die Manufacturer",
    description:
      "Precision plastic moulds and dies manufactured by Jai Ambey Engineering Works since 2009.",
    type: "website",
    locale: "en_IN",
    siteName: "Jai Ambey Engineering Works",
  },

  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}