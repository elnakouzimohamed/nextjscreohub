import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from '../components/navbar';
import Welcome from '../components/welcome';
import Services from '../components/services';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function Home() {
    return (
        <>
            <Navbar />
            <Welcome />
            <Services />
        </>
    );
}


