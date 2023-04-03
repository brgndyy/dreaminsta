import "./globals.css";
import Card from "./components/Card/Card";
import Header from "./components/Header/Header";
import ContenCard from "./components/Card/ContenCard";
import localFont from "next/font/local";

export const metadata = {
  title: {
    default: "Instagram clone",
    template: "brngdy instagram || %s",
  },
  description: "instagram clone",
};

const myFont = localFont({
  src: "./fonts/NanumGothic-Regular.ttf",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Card>
          <Header />
          <ContenCard>{children}</ContenCard>
        </Card>
      </body>
    </html>
  );
}
