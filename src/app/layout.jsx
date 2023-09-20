import Header from "@/components/Header";
import "./globals.css";
// here we add the header,navbar,search box , ... which is used in all pages

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* header */}
        <Header />

        {/* navbar */}

        {/* searchbox */}
        {children}
      </body>
    </html>
  );
}
