import Header from "./components/Header";
import '@/app/Styles/globals.css'

export const metadata = {
  title: "Read For Need",
  description: "Book Library ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}
