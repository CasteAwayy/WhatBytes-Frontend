import ReduxProvider from "@/lib/ReduxProvider";
import "./global.css";

export const metadata = {
  title: "WhatBytes",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
