// app/components/Footer.tsx
import { AtSymbolIcon } from "@heroicons/react/24/outline";


export default function Footer() {
    return (
      <footer className="mt-16 text-center">
        {/* <p className="uppercase text-sm tracking-widest text-gray-900 dark:text-white">Ceramics Studio</p> */}
        <p className="mt-1 text-sm text-gray-600">Spuistraat 56 Sous, 1012TV, Amsterdam</p>
        <div className="flex justify-center items-center mt-4">
         
            

          <a href="https://instagram.com/mato.ceramics" target="_blank" rel="noopener noreferrer" 
            className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 transition">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" 
              className="w-6 h-6 text-gray-600 hover:text-pink-500 transition">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M8 3h8a5 5 0 015 5v8a5 5 0 01-5 5H8a5 5 0 01-5-5V8a5 5 0 015-5z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M17.5 6.5h.01" />
            </svg>

            <span>mato.ceramics</span>
          </a>
      </div>
      <p className="text-sm  font-thin font-light text-gray-400">© {new Date().getFullYear()} Mato Ceramics. All rights reserved. KVK: 96194367</p>

      </footer>
    );
  }
  