import React from 'react'
import '../App.css';
import { Link } from 'react-router-dom';
export default function Home() {

    const burger=()=>{
        var a=document.querySelector('.cross')
      
        var x = document.getElementById("ul");
        var z=document.querySelector('.burger');
        var dlogo=document.querySelector('#dlogo')
        var logo=document.querySelector('#logo')
        var h1=document.querySelector('#h1');
        var pre=document.querySelector('#pre');
if (x.style.display === "flex") {
x.style.display = "none";
a.style.visibility="hidden"
z.style.visibility="visible"
dlogo.style.display="block"
h1.style.display="block";
logo.style.display="none"
pre.style.display="block";
} else {
x.style.display = "flex";

x.style.flexDirection="column"
x.style.height="100vh"
x.style.backgroundColor="black"

z.style.visibility="hidden"
a.style.visibility="visible"
logo.style.display="block";
logo.style.margin="0px 1em 0px 0px"
dlogo.style.display="none";
h1.style.display="none";
pre.style.display="none";


}
    }
    const dev=()=>{
        var b=document.querySelector('#dev');
        if(b.style.display==="flex"){
            b.style.display="none";
        }
        else{
            b.style.display="flex";
        }
    }



  return (
    

         <>
          <header className="navbar ">

              <div className="dlogoul">
                  <img alt='' id="dlogo" src="./img/logo2.jpeg" />
                  <div className="logoul">
                      <ul id="ul">

                          <img alt='' id="logo" src="./img/logo2.jpeg" />

                          <li className="list"><Link to="/">Home</Link></li>
                          <li className="list"><Link  to="/DSA">DSA</Link></li>
                          <li className="list"><a href="https://raks-hit.github.io/a2oj-client/server/">CP</a></li>
                          <li className="list"><Link to="/">Free Courses</Link></li>
                          <li className="list"><Link to="/">Development</Link></li>
                          <li className="list"><Link to="/">Roadmaps</Link></li>
                          <li className="list"><Link to="/">Blogs</Link></li>
                          <li className="list"><Link to="/">Updates</Link></li>
                          <li className="list"><Link to="/">College-Study-Material</Link> </li>

                      </ul>
                  </div>
              </div>

              <div id="onimg">
                 
                  <div><h1 id="h1">Let's Crack it Together.....</h1></div>
                 
                  
                  <pre id='pre'>
                  <div> while(noSuccess)	&#123;</div>
                  <div> try again();</div>
                  <div> if(dead)&#123;</div>
                  <div>      break;</div>
                  <div>    &#125;</div>
                  <div>  &#125;</div>
                  
                  </pre>


              </div>

              <div className="burger" onClick={burger}>
                  <div className="line"></div>
                  <div className="line"></div>
                  <div className="line"></div>
              </div>
              <div className="cross" onClick={burger}>
                  <div className="line1"></div>
                  <div className="line2"></div>

              </div>


          </header>


          
          <div className="content">

              <div className="imglogo">
                  <img src="./img/c-.png" alt="" className="plogo" />
                  <img src="./img/css-3.png" alt="" className="plogo" />
                  <img src="./img/java.png" alt="" className="plogo" />
                  <img src="./img/html-5.png" alt="" className="plogo" />
                  <img src="./img/python.png" alt="" className="plogo" />
                  <img src="./img/letter-c.png" alt="" className="plogo" />
              </div>


              <div className="dream">
                  <h1 id="hd">Our Aim:</h1>
                  <img alt='' id="maang" src="./img/faang1.jpg" />
              </div>


              <div className="create">

                  <div id="journey">
                      <h1 id="hj">Start Your Journey-</h1>
                  </div>

                  <ul id="ut">

                      <li className="tags"><Link to="/PL">Programming Langauges</Link></li>
                      <li className="tags"><img alt='' className="icon" src="./img/black-plane.png" /></li>
                      <li className="tags"><Link to="./components/dsa.html">Data Structures</Link></li>
                      <li className="tags"> <img alt='' className="icon" src="./img/black-plane.png" /></li>
                      <li className="tags"><a href="https://raks-hit.github.io/a2oj-client/server/">Competitive programming</a></li>
                      <li className="tags"><img alt='' className="icon" src="./img/black-plane.png" /></li>
                      <li className="tags"><Link to='/' id="development" onClick={dev}>Development</Link></li>
                      <li><div id="dev">
                          <Link to="/">Web development</Link>
                          <Link to="/">App development</Link>
                          <Link to="/">Machine learning and AI</Link>
                          <Link to="/">Blockchain </Link>
                      </div></li>
                      <li className="tags"><img alt='' className="icon" src="./img/black-plane.png" /></li>
                      <li className="tags"><Link to="/">Competitive Exams</Link></li>
                      <li className="tags"> <img alt='' className="icon" src="./img/black-plane.png" /></li>
                      <li className="tags"><Link to="/">College-Study-Material</Link> </li>


                  </ul>

              </div>



              <div className="box">
                  <h1 id="hb">Study Material:</h1>
                  <div className="bgrid">

                      <button className="btnbox ">
                          <h1 className="hbb">Free Courses</h1>
                          <p>Get access to all the quality courses</p>
                      </button>


                      <button className="btnbox ">
                          <h1 className="hbb">Updates</h1>
                          <p>Gets updates of contests ,hackathons and technology</p>
                      </button>


                      <button className="btnbox">
                          <h1 className="hbb">Roadmaps</h1>
                          <p>Want to learn something ?</p>
                          <p>Here we have roadmaps for everything .</p>
                      </button>


                      <button className="btnbox">
                          <h1 className="hbb">Blogs</h1>
                          <p>Learn something new with quality content</p>
                      </button>

                      <button className="btnbox">
                          <h1 className="hbb">Important Dates</h1>
                          <p>Stay updated with us for all important upcoming events </p>
                      </button>


                      <button className="btnbox">
                          <h1 className="hbb">Projects</h1>
                          <p>Show some creativity in making </p>
                          <p>projects that shines your resume </p>
                      </button>

                  </div>
              </div>


              <div className="ip">
                  <h1 className="hc">Internship and placements:</h1>
                  <div className="ipbox">
                      <div className="ipbc">
                          <h2 className="hip">Opportunties</h2>
                          <p className="pip">We are providing you all the internship and placement opportunities available.So,you can apply to any post you are interested in.Check the latest opportunities daily.</p>
                          <button className="btnip">Explore</button>
                      </div>
                      <div className="ipbc">
                          <h2 className="hip">Placement material</h2>
                          <p className="pip">Want a placement or internship?If yes then checkout our collection of study material for your preparation.</p>
                          <button className="btnip">Explore</button>
                      </div>
                  </div>
              </div>


              <div className="dc">
                  <h1 className="hdc">About us-</h1>
                  <div className="dcbox">
                      <div className="bdc">
                          <img src="./img/vision.jpeg" alt='' />

                          <div>We want to provide the complete study material for computer science students at one place.Now there is no need to visit different sites. We are providing
                              everything you require for your college studies and placement at one stop destination.Hope it will be beneficial for you.</div>
                      </div>



                  </div>


              </div>


          <div className="creator">
              <h1 className="hc">Created By-</h1>
              <div className="cb">
                  <img src="./img/myphoto.jpg" alt='' id="photo" />
                  <h1>Rakshit</h1>
                  <h2>UIET KUK</h2>
                  <h2>Full Stack Web Developer</h2>
                  <div className="logo">
                      <img src="./img/instagram.png" alt='' className="clogo" />
                      <img src="./img/linkedin.png" alt='' className="clogo" />
                      <img src="./img/github.png" alt="" className="clogo" />
                  </div>
              </div>
          </div>
          <div className="footer">

              <div className="email">
                  <h2>Email us at:</h2>

                  <Link to="mailto:coursetechofficial@gmail.com">coursetechofficial@gmail.com</Link>
              </div>
          </div>
  </div>
    <div id="copyright">
       <p> &copy; Copyright.All rights reserved</p>
        <p>Designed with &#128151; for you</p>
    </div>
 
  </>
    
  )
  
}
