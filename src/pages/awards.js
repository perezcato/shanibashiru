import React from 'react';
import {awards} from "../data/awards";

const Awards = () => {

  const award = (award, year, place) => {

    return (
      <tr className="border-t " style={{borderTopColor: '#727272'}}>
        <td className=" py-12" style={{color: '#414141'}}>
          {award}
        </td>
        <td className="text-center" style={{color: '#414141'}}>
          {year}
        </td>
        <td className="text-center" style={{color: '#414141'}}>
          {place}
        </td>
      </tr>
    )
  }

  return (
    <div>
      <div className="hidden md:block banner-color py-20">
        <div className="site-color font-black text-5xl container mx-auto md:px-16">
          Awards.
        </div>
      </div>

      <div className="flex container mx-auto">
        <div className="md:w-2/3 my-10 mx-16">
          <table className="mx-auto w-100">
            <thead>
            <tr >
              <th className="w-3/5 font-semibold text-base text-left py-8" style={{color: '#414141'}}>Award</th>
              <th className="text-color w-1/5 font-semibold text-base py-8" style={{color: '#414141'}}>Year</th>
              <th className="text-color w-1/5 font-semibold text-base py-8" style={{color: '#414141'}}>Place</th>
            </tr>
            </thead>
            <tbody>
            {
              awards.map((congrats) => award(congrats.title, congrats.year, congrats.location))
            }
            </tbody>
          </table>
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

export default Awards;
