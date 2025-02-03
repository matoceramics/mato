// app/routes/courses/$title.tsx
import Header from '~/components/Header';
import Footer from '~/components/Footer';
import { useParams } from '@remix-run/react';
import { courses } from '../data/courses';

export default function About() {

  return (
    <div className="bg-white pr-5 pl-5 py-16 sm:py-10">
       {/* Header */}
       <Header />
     

      <div className="mx-auto max-w-4xl text-justify mt-2 text-sm  font-thin text-gray-600 font-light">
       
      
       
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 p-4">
        <div className="flex justify-center">
          <img 
            src='/images/PHOTO-2025-01-27-17-47-35.jpg'
            alt='' 
            className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover mt-4 mb-4 "
          />
        </div>
        <div className="flex justify-center">
          <div className='pt-5'>
          <div className="mx-auto max-w-4xl text-justify mt-2 text-sm  font-thin text-gray-600 font-light">
        <p className="uppercase text-sm  font-semibold tracking-widest text-gray-600 dark:text-white"> About Me </p>
      </div>
            <p className='p-2'>            I’m originally from Nepal and now living in the Netherlands. I’m a mother who embraced a career change after taking a maternity break, discovering a passion for ceramics along the way. Last year, I started this journey by taking over a small space in Amsterdam as my studio to self-learn the art of ceramics.
            </p>
           
            
           <p className='p-2'> For me, ceramics is more than just shaping clay—it’s about exploration and connection. I’ve learned everything from operating an electric kiln to experimenting with clays and glazes, and I’ve been figuring out what truly resonates with me. I handbuild my pieces instead of using a wheel—initially because it’s less physically demanding and easier to clean. But over time, I’ve fallen in love with the process. It’s amazing how, with just a few simple tools like a spatula, knife, and sponge, you can create pieces that feel so special and unique.
           </p>
            
           <p className='p-2'>
           I also care about the environment and sustainability. That’s why I focus on small-batch ceramics, creating only a limited number of pieces with intention and care. I believe in mindful crafting, not mass production, and I hope each piece brings joy to its new home.
           
            </p> 
           <p className='p-2'>
           Beyond making ceramics, I love sharing this space with others through courses and workshops. It’s not about teaching—it’s about exploring together, connecting, and discovering what feels natural to each person. There are no right or wrong ways to create, just the joy of shaping something with your hands. Whether you're new to clay or have worked with it before, the workshops are a space to slow down, experiment, and enjoy the process in good company.
           
            </p> 
            <p className='p-2'>  <a href="https://instagram.com/ptul.0505" target="_blank" rel="noopener noreferrer">
            Priti
          </a></p>
            
        </div>  
        
        </div>
</div>

       
       
      
      </div>
      {/* Footer */}
      <div className="mt-20 text-center"></div>
      <Footer />
    </div>
    
  );
   
}
