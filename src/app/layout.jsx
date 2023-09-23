import Header from "@/components/Header";
import "./globals.css";
import Providers from "./Providers";
import NavBar from "@/components/NavBar";
import SearchBox from "@/components/SearchBox";
// here we add the header,navbar,search box , ... which is used in all pages
// in order to make the themes ssr like what next is doing, we create a provider and put everything in the body in to the provider. if we wanted to do in same as the website of themes the page would be csr which we don't
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* header */}
          <Header />

          {/* navbar */}
          <NavBar />

          {/* searchbox */}
          <SearchBox />
          {children}
        </Providers>
      </body>
    </html>
  );
}
