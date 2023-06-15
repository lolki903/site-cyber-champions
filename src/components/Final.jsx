import React from "react";
import Footer from "../Screen/Footer";
import { Header } from "../Screen/Header";

const Final = ({icon,button,title ,text}) => {
    return (
        <div className="">
            <Header />
        <div className="flex flex-col items-center pb-40">
            <div className="flex flex-col items-center">
                <img src={icon} alt="icon" />
                <h1 className="text-6xl mobile:text-5xl text-center font-bold my-9 text-white w-10/12">{title}</h1>
                <p className="text-center text-1xl text-white text-center w-8/12">{text}</p>
            </div>
            <button className="px-6 py-4 bg-acheter rounded-2xl leading-19 text-primay mt-10">{button}</button>
        </div>
        <Footer />
        </div>
    );
}

export default Final;