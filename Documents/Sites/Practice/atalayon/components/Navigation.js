'use client';

import { usePathname } from "next/navigation";
import { useState } from "react";

const URLS = [
  { name: 'Home', href: '/' },
  { name: 'Larose', href: '/larose' },
  { name: 'Curved Menu', href: '/larose/curved-menu' },
]


const Navigation = () => {

  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname()
  console.log(pathname)
  // if the path is '/' then I want home to be highlighted


  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }


  return ( <>

  <div 
  onClick={() => toggleMenu()}
  className="fixed bottom-2 right-2 p-5 h-10 w-10 rounded-full bg-neutral-950"></div>
  <div className={`fixed ${isOpen ? 'left-0'  : 'left-[-250px]'} w-[9vw] bg-neutral-50 top-[300px] h-[300px] shadow-md transition-all duration-300 ease-in-out`}>
    {URLS.map((url) => (
      <a
      href={url.href}
      key={url.href}
      className={`${pathname === url.href ? 'bg-neutral-950 text-white' : 'bg-neutral-100 text-black'} w-full h-[50px] flex items-center justify-center p-2 text-neutral-900 text-sm`}>
        {url.name}
      </a>
    ))}

  </div>
  
  </> );
}
 
export default Navigation;