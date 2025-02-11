import Image from "next/image";

export default function Navbar() {
    return(
      <header> 
       <nav>
            <div class="logo img">
                <Image src="Creo_Hub_logo_1.png"/>
            </div>
            <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
    </header>

    );
}