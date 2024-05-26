import { Unbounded } from "next/font/google";
import "./globals.css";
import api from './api';
const font = Unbounded({ subsets: ["cyrillic"] });



export const metadata = {
  title: "Ежедневник",
  description: "Планируйте и создавайте заметки онлайн",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ru">
      <body className={font.className}>
        {children}
      </body>
    </html>
  );
}

