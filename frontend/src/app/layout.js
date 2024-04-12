import { inter } from './assets/fonts'
import {sourceSerif} from './assets/fonts'
import style from './assets/style.module.css'

export const metadata = {
  title: "Midnight",
  description: "Book app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={style.pageContent}>{children}</body>
    </html>
  );
}
