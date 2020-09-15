import React from 'react';

const About = () => {
  return (
    <div>
      <div className="hidden md:block banner-color py-20">
        <div className="site-color font-black text-5xl container mx-auto md:px-16">
          Shani Bashiru PhD.
        </div>
      </div>
      <div className="flex container mx-auto">
        <div className="md:w-2/3 md:px-16">
          <div className="mt-16">
            <div className="font-black text-color text-xl">Bio</div>
            <div className="mt-4 font-medium text-color">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </div>
          </div>

          <div className="mt-16">
            <div className="font-black text-color text-xl">Education</div>
            <div className="mt-4 font-medium text-color">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </div>
          </div>

          <div className="mt-16">
            <div className="font-black text-color text-xl">Employment</div>
            <div className="mt-4 font-medium text-color">
              I'm a paragraph. Click here to add your own text and edit me. It’s easy. Just click
              “Edit Text” or double click me to add your own content and make changes to the font.
              I’m a great place for you to tell a story and let your users know a little more about you.
            </div>
          </div>

          <div className="mt-16 mb-16">
            <button className="py-3 px-8 text-white site-background">
              Download CV
            </button>
          </div>
        </div>
        <div className="md:w-1/3">
          <img
            className="object-cover -mt-32"
            style={{
              width: '336px',
              height: '408px'
            }}
            src="https://static.wixstatic.com/media/c22c23_2a566c3054914e13bd588d00c0468724~mv2_d_5700_3800_s_4_2.jpg/v1/crop/x_2087,y_0,w_3137,h_3800/fill/w_363,h_440,al_c,q_80,usm_0.66_1.00_0.01/GettyImages-688893733.webp"
            alt="shani bashiru"
          />
        </div>
      </div>
    </div>
  )
}

export default About;
