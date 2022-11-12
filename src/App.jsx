import { useState } from 'react'
import './App.css'
import logo from "../src/img/logo.png"
import prop from "../src/img/prop.jpeg"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="main_cont">
      <div className="App">
        <div className="logo"><img className='logo_img' src={logo} alt="logo" srcset="" /></div>
        <div className='inner_div'>
          <h1 className='heading'>Across The Line</h1>
          <a href="#" className='button'>Download Now</a></div>
      </div>

      <div className="blur-filter">
      </div>

      <div className="App_screen_2">
        <p className="sub_heading">Escape the <span>darkness</span> and the <span>terror</span> of the Ghoul.</p>

        <div className="card_grp">
          <div className="card">
            <img src={prop} alt="prop" srcset="" />
            <p className="card_text">Escape</p>
          </div>
          <div className="card">
            <img src={prop} alt="prop" srcset="" />
            <p className="card_text">Uncover</p>
          </div>
          <div className="card">
            <img src={prop} alt="prop" srcset="" />
            <p className="card_text">Survive</p>
          </div>
        </div>


        <div className="screen_3">
          <p className="sub_heading left">Dive into the depth of <span>darkness</span> filled with <span>horror</span>.</p>

          <div className="youtube_cont">
            <iframe width="640" height="360" src="https://www.youtube.com/embed/UC1f9q_Y7wo" title="Farewell North - Demo Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <p className="desc">Deep into the darkness peering long I stood there, wondering, fearing doubting, dreaming dreams no mortal ever dared to dream before. I reside in dark to outlive the long intervals of horrible sanity. The walls of hell breaths fire and the floors are covered in layers of blood, upon which the dead and the devil feeds, but when I don’t find peace in that flaming furnace, I walk on earth to feed upon the fear, terror and flesh of the mortal. <br /><br />
              I’m a Ghoul and I’m coming for you.
            </p>
          </div>
        </div>

        <div className="screen_4">
          <div className="logo_new"><img className='logo_img_new' src={logo} alt="logo" srcset="" /></div>
          <div className='inner_div'>
            <h1 className='heading new'>Across The Line</h1>
            <p className="desc sec">Coming Soon...</p>
          </div>
        </div>

        <div className="footer">
          <div className="first_row">
            <p className="footer_text">CONTACT</p>
            <div className="horizontal_line"></div>
            <div className="footer_text">TEAM</div>
          </div>
          <div className="second_row">
            <p className="desc third">©2022 BrainDed Entertainment</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default App
