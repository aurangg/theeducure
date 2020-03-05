import React from 'react';
import './homepage.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function Homepage(){
    const url="https://aurangg.github.io/sinecure.io"
    return (
        <div className="home_bg">
            <h2>Welcome to Theeducure</h2>
            <h3 id="color">Find the best institute for yourself!</h3>
            <div className="row" style={{marginLeft:'0', marginRight: '0'}}>
                <div className="col-md-6 offset-md-3">
                    <form>
                        <input aria-label="Search" placeholder="Search any college or university"></input>
                        <button className="search_icon" aria-label="Search">
                            <img src="/assets/logo192.png" alt="search_icon"></img>
                        </button>
                    </form>
                    <p>A product by <a href={url}>Sinecure</a></p>
                </div>
            </div>
        </div>
    )
}

export default Homepage;