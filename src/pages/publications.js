import React from 'react';
import {publications} from "../data/publications";

const Publications = () => {

  const [list, setList] = React.useState('journals');


  const pub = () => {
    if(list === 'journals'){
      return (
        <table className="mx-auto w-100">
          <thead>
          <tr>
            <th className="w-3/6 font-semibold text-base text-left py-8 " style={{color: '#414141'}}>Title</th>
            <th className="w-1/6 font-semibold text-base py-8 " style={{color: '#414141'}}>Year</th>
            <th className="w-1/6 font-semibold text-base py-8" style={{color: '#414141'}}>Co. Authors</th>
            <th className="w-1/6 font-semibold text-base py-8" style={{color: '#414141'}}>Publication</th>
          </tr>
          </thead>
          <tbody>
          {
            publications.journals.data.map((journal) => {
              return (
                <tr className="border-t" style={{borderTopColor: '#727272'}}>
                  <td className=" py-12">
                    {journal.title}
                  </td>
                  <td className="text-center">
                    {journal.year}
                  </td>
                  <td className="text-center">
                    {journal['co-authors']}
                  </td>
                  <td className="text-center">
                    {
                      journal.publication
                    }
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      )
    }
    if(list === 'articles'){
      return (
        <table className="mx-auto w-100">
          <thead>
          <tr>
            <th className="w-3/6 font-semibold text-base text-left py-8 " style={{color: '#414141'}}>Article</th>
            <th className="w-1/6 font-semibold text-base py-8 " style={{color: '#414141'}}>date</th>
            <th className="w-1/6 font-semibold text-base py-8" style={{color: '#414141'}}>Newspaper</th>
          </tr>
          </thead>
          <tbody>
          {
            publications.articles.map((article) => {
              return (
                <tr className="border-t" style={{borderTopColor: '#727272'}}>
                  <td className=" py-12">
                    {article.title}
                  </td>
                  <td className="text-center">
                    {article.date}
                  </td>
                  <td className="text-center">
                    {article.newspaper}
                  </td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      )
    }
  }

  return (
    <div>
      <div className="hidden md:block banner-color py-20">
        <div className="site-color font-black text-5xl container mx-auto md:px-16">
          Publications.
        </div>
      </div>
      <div className="flex container mx-auto">
        <div className="md:w-2/3 my-10 mx-8">
          <div>
            <button onClick={() => {
              setList('journals')
            }} className="banner-color publication-button">
              Journals
            </button>
            <button onClick={ () => {
            setList('articles')
            }} className="banner-color publication-button">
              Newspaper Articles
            </button>
            <button className="banner-color publication-button">
              Seminar Presentations & Conferences
            </button>
            <button className="banner-color publication-button">
             Workshop Presentations
            </button>
            <button className="banner-color publication-button">
              Works in Progress
            </button>
          </div>

          {
            pub()
          }

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


