import "./globals.css";


import { AppProvider } from "./context/app-context";
import ThemeProvider from "./providers/ThemeProviders";
import Navbar from "./components/shared/navbar";




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider>
          <AppProvider>

            <Navbar />

            <main className="min-h-screen">
              {children}
            </main>

          </AppProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}