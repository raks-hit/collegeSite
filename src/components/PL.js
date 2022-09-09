import React from 'react'
import '../css/PL.css';
export default function PL() {
  return (
    <div>
         <a href="/" id="backto">Back to Home</a>
     
     <p class="pl">Programming Languages</p>
     {/* <!-- <iframe class="ebook" src="https://1lib.in/"></iframe> --> */}
     <div class="pl1">
         <h2>Select Your Language-</h2>
         <div class="lang">
             
         <li ><a href="#C++" >C++</a></li>
         <img src="../img/c-.png"/>
     </div>
     <div class="vl"></div>
     <div class="lang">
         <li ><a href="#C" >C</a></li>
         <img src="../img/letter-c.png"/>
     </div>
     <div class="vl"></div>
         <div class="lang">
             <li ><a href="#JAVA" >Java</a></li>
         <img src="../img/java.png"/>  
         </div>
         <div class="vl"></div>
         <div class="lang">
             
         <li ><a href="#PYTHON" >Python</a></li>
         <img src="../img/python.png"/>
     </div>
          
      
     </div>
     {/* <!-- <div> */}
         {/* <details class="details">
             <summary class="summary">
                 Notes
             </summary>
             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci quisquam consequatur sint itaque distinctio incidunt atque ea reiciendis recusandae tempora, esse quos? Illo earum alias reprehenderit, dolorem fugit praesentium magnam.
         </details> */}
     {/* </div> --> */}
     {/* <!-- <div> */}
         {/* <table>
             <thead>
                 <tr>
                     <th>Notes</th>
                     <th>Video lectures</th>
                     <th>Books</th>
                     <th>Courses</th>
                 </tr>
             </thead>
             <tbody>
                 <tr>
                     <th></th>
                 </tr>
             </tbody>
         </table> */}
     {/* </div> --> */}
     <div class="langname" id="C++">C++</div>
     <div class="accordion">
     <div class="accordion accordion-flush" id="accordionFlushExample">
         <div class="accordion-item">
           <h2 class="accordion-header" id="flush-headingOne">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
               Accordion Item #1
             </button>
           </h2>
           <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
             <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
           </div>
         </div>
         <div class="accordion-item">
           <h2 class="accordion-header" id="flush-headingTwo">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
               Accordion Item #2
             </button>
           </h2>
           <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
             <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
           </div>
         </div>
         <div class="accordion-item">
           <h2 class="accordion-header" id="flush-headingThree">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
               Accordion Item #3
             </button>
           </h2>
           <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
             <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
           </div>
         </div>
       </div>
     </div>
 
 
     <div class="langname" id="C">C</div>
 
 
     <div class="accordion">
         <div class="accordion accordion-flush" id="accordionFlushExample">
             <div class="accordion-item">
               <h2 class="accordion-header" id="flush-headingOne">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                   Accordion Item #1
                 </button>
               </h2>
               <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                 <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
               </div>
             </div>
             <div class="accordion-item">
               <h2 class="accordion-header" id="flush-headingTwo">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                   Accordion Item #2
                 </button>
               </h2>
               <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                 <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
               </div>
             </div>
             <div class="accordion-item">
               <h2 class="accordion-header" id="flush-headingThree">
                 <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                   Accordion Item #3
                 </button>
               </h2>
               <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                 <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
               </div>
             </div>
           </div>
         </div>
 
 
         <div class="langname" id="JAVA">JAVA</div>
 
 
         <div class="accordion">
             <div class="accordion accordion-flush" id="accordionFlushExample">
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="flush-headingOne">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                       Accordion Item #1
                     </button>
                   </h2>
                   <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                   </div>
                 </div>
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="flush-headingTwo">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                       Accordion Item #2
                     </button>
                   </h2>
                   <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                   </div>
                 </div>
                 <div class="accordion-item">
                   <h2 class="accordion-header" id="flush-headingThree">
                     <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                       Accordion Item #3
                     </button>
                   </h2>
                   <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                     <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                   </div>
                 </div>
               </div>
             </div>
 
 
             <div class="langname" id="PYTHON">PYTHON</div>
 
 
             <div class="accordion">
                 <div class="accordion accordion-flush" id="accordionFlushExample">
                     <div class="accordion-item">
                       <h2 class="accordion-header" id="flush-headingOne">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                           Accordion Item #1
                         </button>
                       </h2>
                       <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                         <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                       </div>
                     </div>
                     <div class="accordion-item">
                       <h2 class="accordion-header" id="flush-headingTwo">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                           Accordion Item #2
                         </button>
                       </h2>
                       <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                         <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the second item's accordion body. Let's imagine this being filled with some actual content.</div>
                       </div>
                     </div>
                     <div class="accordion-item">
                       <h2 class="accordion-header" id="flush-headingThree">
                         <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                           Accordion Item #3
                         </button>
                       </h2>
                       <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                         <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the third item's accordion body. Nothing more exciting happening here in terms of content, but just filling up the space to make it look, at least at first glance, a bit more representative of how this would look in a real-world application.</div>
                       </div>
                     </div>
                   </div>
                 </div>
    </div>
  )
}
