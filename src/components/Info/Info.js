import React from 'react' 

import './info.css'
const Info = () => { 

    return (
        <div className='wrapper'>
<h3 className='heading'>WHY CHOOSE US</h3>
<div className="card mb-5 mx-5 mt-5" >
  <div className="row no-gutters">
    <div className="col-md-3 px-0 mx-0">
      <img src="images/img1.avif" className="card-img" alt="technology driven solutions" />
    </div>
    <div className="col-md-9">
      <div className="card-body text-wrap" >
        <h3 className="card-title" >Technology Driven Solutions</h3>
        <p className="card-text px-2 fs-5 first" >BuildNRun uses advanced technology to develop solutions that solve complex problems faced by Africans. By leveraging the latest innovations in AI, machine learning, and other emerging technologies, BuildNRun is able to provide cutting-edge solutions that are efficient, effective, and affordable.</p>
        
      </div>
    </div>
  </div>
</div> 
<div className="card mb-5 mx-5 even-card">
  <div className="row no-gutters ">

    <div className="col-md-8 ">
      <div className="card-body">
        <h3 className="card-title">Sustainable Impact</h3>
        <p className="card-text fs-5 ">BuildNRun is committed to making a sustainable impact in Africa by addressing key challenges faced by the continent. Our solutions are designed to be scalable and sustainable, with a focus on creating long-term value for our clients and their communities. This ensures that the impact of our solutions is felt for years to come.</p>
        
      </div>
    </div> 
    <div className="col-md-4">
      <img src="images/img2.avif" className="card-img fit" alt="sustainable impact"/>
    </div>
  </div>
</div>  
<div className="card mb-5 mx-5 mt-5" >
  <div className="row no-gutters">
    <div className="col-md-4 px-0 mx-0">
      <img src="images/img3.jpg" className="card-img" alt="improved effeciency"/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title">Improved Efficiency</h3>
        <p className="card-text fs-5 " style={{"paddingRight":"5 rem"}}>BuildNRun's solutions are designed to improve efficiency and productivity. For example, our AI assistant for students reduces the time and effort required for teachers to provide individualized attention to students. Similarly, our marketplace for small scale vendors helps them reach a wider audience and sell more products, thereby improving their revenue and profitability.</p>

      </div>
    </div>
  </div> 
  </div>

<div className="card mb-5 mx-5 even-card" >
  <div className="row no-gutters">

    <div className="col-md-9">
      <div className="card-body">
        <h3 className="card-title">User Friendly Design</h3>
        <p className="card-text fs-5">BuildNRun's solutions are designed with the end-user in mind. We understand that technology can be intimidating for some users, which is why we strive to make our solutions user-friendly and accessible to all. Our AI assistant for students and marketplace for small scale vendors are both designed with a simple, intuitive interface that anyone can use with ease.</p>

      </div>
    </div>  
    <div className="col-md-3">
      <img src="images/img4.avif" className="card-img" alt="user friendly design"/>
    </div>

  </div>
</div>

        </div>
    )
}

export default Info