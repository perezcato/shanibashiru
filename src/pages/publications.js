import React from 'react';


const Publications = () => {
  return (
    <div>
      <div className="hidden md:block banner-color py-20">
        <div className="site-color font-black text-5xl container mx-auto md:px-16">
          Publications.
        </div>
      </div>
      <div className="flex container mx-auto">
        <div className="md:w-2/3 my-10 mx-16">
          <table className="mx-auto w-100">
            <thead className="border-b border-gray-600">
            <tr>
              <th className="text-color w-3/6 font-semibold text-base text-left py-8 ">Title</th>
              <th className="text-color w-1/6 font-semibold text-base py-8 ">Year</th>
              <th className="text-color w-1/6 font-semibold text-base py-8 ">Co. Authors</th>
              <th className="text-color w-1/6 font-semibold text-base py-8 ">Publication</th>
            </tr>
            </thead>
            <tbody>
            <tr className="border-b border-gray-600">
              <td className=" py-12">
                Referee bias and its impact on low fans attendance
                at stadiums: Standpoints from Ghana.
              </td>
              <td className="text-center">
                2017
              </td>
              <td className="text-center">
                Emmanuel, O.
              </td>
              <td className="text-center">International Journal of Physical Education,
                Sports and Health,</td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className=" py-12">
                Does Quest for Entertainment and Socialization attract
                football fans to stadiums? Insights from Ghana
              </td>
              <td className="text-center">
                2017
              </td>
              <td className="text-center">
                -
              </td>
              <td className="text-center">
                International Journal of Innovative
                Research and Development
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className=" py-12">
                Determining factors that pull crowds to stadiums during football matches in Ghana
              </td>
              <td className="text-center">
                2015
              </td>
              <td className="text-center">
                -
              </td>
              <td className="text-center">
                International Journal of Health, Physical Education and Computer Science in Sports
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className=" py-12">
                Live Broadcast of football matches on television- a booster or blip to fans attendance
              </td>
              <td className="text-center">
                2015
              </td>
              <td className="text-center">
                Winful, C., W., & Mahama, F.
              </td>
              <td className="text-center">
                International Journal of Law, Education, Social and Sports Studies
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className=" py-12">
                Determinants of football fans stadium attendance - Perspectives from Ghana
              </td>
              <td className="text-center">
                2015
              </td>
              <td className="text-center">
                -
              </td>
              <td className="text-center">
                International Journal of Computer Application and Management
              </td>
            </tr>
            <tr className="border-b border-gray-600">
              <td className=" py-12">
                When Refereeing turns ugly: Investigating fans response to
                the specter of Bias Officiating in Ghana Football.
              </td>
              <td className="text-center">
                2017
              </td>
              <td className="text-center">
                Winful, C., W., & Mahama, F.
              </td>
              <td className="text-center">
                International Journal of Innovative Research and Development
              </td>
            </tr>
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

export default Publications;


