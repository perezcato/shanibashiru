import React from 'react';

const Homepage = () => {
  return (
    <div>
      <div className="hidden md:block h-56">
      </div>
      <div className="flex items-center justify-center banner-color py-16">
          <img
            className="object-cover -mt-48"
            style={{
              width: '454px',
              height: '550px'
            }}
            src="https://static.wixstatic.com/media/c22c23_2a566c3054914e13bd588d00c0468724~mv2_d_5700_3800_s_4_2.jpg/v1/crop/x_2087,y_0,w_3137,h_3800/fill/w_363,h_440,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-688893733.webp"
            alt="shani bashiru"
          />
        <div className="px-12">
          <div className="site-color font-black text-6xl">
            Shani Bashiru PhD
          </div>
          <div className="font-semibold text-white mt-10">
            Department of History, Accra Technical University, Accra.
          </div>
          <div className="text-justify mt-8 font-medium text-white">
            I'm a paragraph. Click here to add your own text and <br/> edit me. I’m a great place for you
            to tell a story and let <br/> your users know a little more about you.
          </div>
          <div className="mt-12">
            <button className="py-3 px-8 site-background text-white ">
              About Me
            </button>
            <button className="py-3 px-8 text-white site-background ml-5">
              Get in touch
            </button>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
};

export default Homepage;
