// app/routes/courses/$title.tsx
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { useParams } from '@remix-run/react';
import { courses } from '../data/courses';

export default function About() {

  return (
    <div className="bg-white py-16 sm:py-10">
       {/* Header */}
       <Header />
     
      <div className='pr-5 pl-5 '>

      
      <div className="mx-auto max-w-4xl text-justify mt-2 text-sm  text-gray-900 font-light">
       
      <div className="mt-16 text-center mt-2 text-sm justify-center text-gray-900 font-light">
      <p className="uppercase text-sm font-semibold tracking-widest text-gray-900 dark:text-gray"> Stockist </p>
        </div>
       
      <div className="mt-16 text-center">
        <p className="uppercase text-sm tracking-widest text-gray-900 dark:text-gray">
            By Trinitea
        </p>
        <p>Online</p>
        <a href="https://by-trinitea.com/shop/accessories/" className="mt-1 text-sm text-gray-900">by-trinitea.com</a>
      </div>
       
       
      
      </div>
      {/* Footer */}
      <div className="mt-20 text-center"></div>
      <Footer />
      </div>
    </div>
    
  );
   
}
