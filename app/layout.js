import "./globals.css";
import Header from "@/Components/Header";
// import Home from "@/Components/Home";

export const metadata = {
  title: "To-Do list App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="h-full" >
        <Header/>
       
        {children}</body>
    </html>
  );
}
