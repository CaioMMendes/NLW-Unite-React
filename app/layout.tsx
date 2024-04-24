import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/header"
import Footer from "./components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pass in",
  description: "Nlw project",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <Header />
        <div className="flex flex-col max-w-screen-2xl mx-auto flex-1 w-full">
          {children}
        </div>

        <Footer />
      </body>
    </html>
  )
}
