import "./globals.css";
import { Outfit } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import Provider from "@/provider";

const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Interior Design",
  description: "AI Interior Design",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={outfit.className}>
          <Provider>{children}</Provider>
        </body>
      </html>
    </ClerkProvider>
  );
}
