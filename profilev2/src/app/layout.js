import localFont from "next/font/local";
import "./globals.css";
import { Html } from "next/document";


export default function RootLayout({ children }) {
  return (
    <Html lang='en'>
      <body>
        <div className="container">
          <h1 id="title">Hello welcome to my projects</h1>
        </div>
      </body>
    </Html>
  );
}
