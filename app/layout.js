import { Unbounded } from "next/font/google";
import "./globals.css";
import { Providers } from './providers'
const font = Unbounded({ subsets: ["cyrillic"] });

export const metadata = {
  title: "Ежедневник",
  description: "Планируйте и создавайте заметки онлайн",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
