import { Inter } from "next/font/google";
import "./globals.scss";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio",
  description: "Web development using HTML5, CSS3, SASS, SCSS, JavaScript, TypeScript, React.js, React Native, Next.js, Express Server, Node.js, MongoDB, SQL, PHP, Next.js and XAMP. Furthermore, business administration in the area of strategic planning, marketing research, project management, performance evaluation and lecturing",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />

        {children}

        <Footer />
      </body>
    </html>
  );
}
