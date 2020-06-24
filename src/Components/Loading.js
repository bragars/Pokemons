import React, { Component } from "react";
import FadeIn from "react-fade-in";
import Lottie from "react-lottie";
import "bootstrap/dist/css/bootstrap.css";
import * as legoData from '../legoloading.json'

const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: legoData.default,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
    }
}

export default class Loading extends Component {

    render() {
        return (
            <div className="loading-icon">
                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>fetching users</h1>
                        <Lottie options={defaultOptions} height={120} width={120} />                      
                    </div>
                </FadeIn>

                <FadeIn>
                    <div className="d-flex justify-content-center align-items-center">
                        <h1>fetching data</h1>
                        <Lottie options={defaultOptions} height={120} width={120} />                      
                    </div>
                </FadeIn>
            </div>
        )
    }
}