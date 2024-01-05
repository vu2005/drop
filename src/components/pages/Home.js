import React from "react";
import MySlider from "../inc/Silder";
import {Link} from 'react-router-dom';
import Myfooter from "../inc/Footer";


function Home() {
    return (
        <div>
            <MySlider/>
            <section className="section">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading">Our Company</h3>
                            <div className="underline mx-auto"></div>
                            
                            
                            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
                        
                            <Link to="/about" className="btn btn-warring shadow"> Read More</Link>
                        
                        </div>

                    </div>
                </div>
            </section>
            <Myfooter />
        </div>

     
    );
}
export default Home;