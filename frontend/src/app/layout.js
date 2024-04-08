import { inter } from './assets/fonts'
import {sourceSerif} from './assets/fonts'

export const metadata = {
  title: "Midnight",
  description: "Book app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={sourceSerif.className}>{children}</body>
    </html>
  );
}
