import type { Metadata } from "next";
import "./global.css";

export const metadata: Metadata = {
  title: "Vivi's Next.js Playground",
  description: "Vivi's Next.js Playground",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-pretendard`}>
        <div>{children}</div>
      </body>
    </html>
  );
}
