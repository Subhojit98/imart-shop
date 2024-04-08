import type { Metadata } from "next";
import { Chakra_Petch } from "next/font/google";
import "./globals.css";
import { AplloClientProvider } from "@/providers/AplloClientProvider"
import ProductContext from "@/providers/ProductContext";
import GlobalProvider from "@/providers/GlobalProvider";
const chakra = Chakra_Petch({ weight: "400", subsets: ["latin"] });
export const metadata: Metadata = {
  title: "Imart-shop",
  description: "Imart-shop for all your needs",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={chakra.className}>
        <GlobalProvider>
          <ProductContext>

            <AplloClientProvider>
              {children}
            </AplloClientProvider>

          </ProductContext>

        </GlobalProvider>
      </body>
    </html>
  );
}
