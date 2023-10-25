import React from 'react' 
import './card.css'

const Card = () => {
  return (
    <div>
      
      <div className="section2">
            <h2>Why choose us</h2>

            <div className="flex">
                <div className="content">
                    <h3>Technology Driven Solutions</h3>
                    <p>BuildNRun uses advanced technology to develop solutions that solve complex problems faced by Africans. By leveraging the latest innovations in AI, machine learning, and other emerging technologies, BuildNRun is able to provide cutting-edge solutions that are efficient, effective, and affordable.</p>
                </div>

                <div className="image">
                    <img src="./images/img1.avif" alt="expertise img"/>
                </div>
            </div>


            <div className="flex">
                <div className="image">
                    <img src="./images/img2.avif" alt="accessible solutions"/>
                </div>
                <div className="content">
                    <h3>Sustainable Impact</h3>
                    <p> BuildNRun is committed to making a sustainable impact in Africa by addressing key challenges faced by the continent. Our solutions are designed to be scalable and sustainable, with a focus on creating long-term value for our clients and their communities. This ensures that the impact of our solutions is felt for years to come.</p>
                </div>


            </div>


            <div className="flex">
                <div className="content">
                    <h3>Improved Efficiency</h3>
                    <p>BuildNRun's solutions are designed to improve efficiency and productivity. For example, our AI assistant for students reduces the time and effort required for teachers to provide individualized attention to students. Similarly, our marketplace for small scale vendors helps them reach a wider audience and sell more products, thereby improving their revenue and profitability.</p>
                </div>

                <div className="image">
                    <img src="images/img3.jpg"/>
                </div>
            </div>
            <div className="flex">
                <div className="image">
                    <img src="./images/img4.avif" alt="customer service"/>
                </div>
                <div className="content">
                    <h3>User Friendly Design</h3>
                    <p>BuildNRun's solutions are designed with the end-user in mind. We understand that technology can be intimidating for some users, which is why we strive to make our solutions user-friendly and accessible to all. Our AI assistant for students and marketplace for small scale vendors are both designed with a simple, intuitive interface that anyone can use with ease.
</p>
                </div>


            </div>


        </div>
    </div>
  )
}

export default Card