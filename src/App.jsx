import React from 'react';
import { Footer, Navbar, Hero, Features} from "./components";



const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className="flex justify-center items-center">
      <div className="xl:max-w-[1280px] w-full">
        <Navbar />
      </div>
    </div>

    <div className="bg-darkBlue flex justify-center items-center">
      <div className="xl:max-[1280px] w-full:">
        <Hero />
      </div>
    </div>

    <div className="bg-primary sm:px-16 px-6 flex justify-center items-center">
      <div className="xl:max-[1280px] w-full:">
        <Features />
      </div>
    </div>
    <div className="bg-gray-800 sm:px-16 px-6 mt-5 flex justify-center items-center">
      <div className="xl:max-[1280px] w-full:">
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
