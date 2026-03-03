import type { Metadata, Viewport } from "next"
import "./globals.css"
import { ModeProvider } from "@/components/mode-context"
import { FaviconSwitcher } from "@/components/favicon-switcher"
import { ModeMeta } from "@/components/mode-meta"

export const metadata: Metadata = {
  title: "DK | Full Stack Developer",
}

export const viewport: Viewport = {
  themeColor: "#0a0a0f",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <ModeProvider>
          <FaviconSwitcher />
          <ModeMeta />
          {children}
        </ModeProvider>
      </body>
    </html>
  )
}