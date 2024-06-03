import React from 'react';
import P1 from '/P2.png';
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { motion } from 'framer-motion';
import { FaBootstrap } from "react-icons/fa";
import random from '/Random.png';
import apna from '/Apna.png'
import Netflix from '/Netflix.png'
import Todo from '/Todo.png'
import Tech from '/tech.png'

function Projects({ ProjectRef }) {
    const cardItems = [
        {
            id: 1,
            img: P1,
            title: "Portfolio Website (Sp.Dev)",
            Dec: "This project is a portfolio website created using React for building the UI components and Tailwind CSS for styling.",
            Tech: <>&nbsp;<FaReact /> React, &nbsp;&nbsp;<RiTailwindCssFill /> Tailwind</>,
            live: "https://mr-sudarshan-patil.github.io/Sp-Dev/",
            view: "https://github.com/Mr-Sudarshan-Patil/Sp-Dev",
        },
        {
            id: 2,
            img: Tech,
            title: "Tech-News App",
            Dec: "Crafted a dynamic Tech-News platform with ReactJS, Bootstrap, and the News API, showcasing frontend proficiency and real-time data integration expertise.",
            Tech: <>&nbsp;<FaReact /> React, &nbsp;&nbsp;<FaBootstrap /> Bootstrap</>,
            view: "https://github.com/Mr-Sudarshan-Patil/News-app",
            
        },
        {
            id: 3,
            img: apna,
            title: "Apna College Website Clone",
            Dec: "This project is a responsive clone of the Apna College website, developed using Flexbox, Media Queries, and Grid for seamless adaptability across devices.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS3</>,
            live: "https://mr-sudarshan-patil.github.io/Apna_College/",
            view: "https://github.com/Mr-Sudarshan-Patil/Apna_College",
            
        },
        {
            id: 4,
            img: random,
            title: "Random Link Generator",
            Dec: "This project is a simple web application that generates random links at the click of a button. It's implemented using HTML for structure, CSS for styling, and JavaScript for dynamic behavior.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS3, &nbsp;&nbsp;<IoLogoJavascript />JavaScript</>,
            live: "https://mr-sudarshan-patil.github.io/Randome-Link-Generator/",
            view: "https://github.com/Mr-Sudarshan-Patil/Randome-Link-Generator",
            
        },
        {
            id: 5,
            img: Netflix,
            title: "Netflix Clone",
            Dec: "This Netflix clone replicates the sleek, user-friendly interface of the original, ensuring optimal viewing across devices. Using CSS media queries, the layout seamlessly adapts to various screen sizes.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS3</>,
            live: "https://mr-sudarshan-patil.github.io/Netflix-Clone/",
            view: "https://github.com/Mr-Sudarshan-Patil/Netflix-Clone",
            
        },
        {
            id: 6,
            img: Todo,
            title: "ToDo List",
            Dec: "This project is a To-Do List application built using HTML, CSS, and JavaScript. It allows users to add, edit, and delete tasks while providing a clean and intuitive interface.",
            Tech: <>&nbsp;<FaHtml5 />HTML5, &nbsp;&nbsp;<FaCss3Alt />CSS3, &nbsp;&nbsp;<IoLogoJavascript />JavaScript</>,
            live: "https://mr-sudarshan-patil.github.io/ToDo-List-WebPage/",
            view: "https://github.com/Mr-Sudarshan-Patil/ToDo-List-WebPage",
            
        },
        
    
        // Add more card items if needed
    ];

    return (
        <>
            <div className='text-center mt-20' ref={ProjectRef} style={{ paddingTop: '70px' }}>
                <div className='mb-9'>
                    <div className='text-2xl font-semibold'>Projects</div>
                    <p className='text-md font-medium'>Things I've built so far</p>
                </div>
                <div className='flex flex-wrap justify-center gap-4'>
                    {cardItems.map(({ id, img, title, Dec, Tech , live, view}) => (
                        <motion.div 
                            key={id} 
                            className="w-full max-w-[350px] p-4 mx-auto text-center"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 300 }}
                        >
                            <div className="w-full h-auto bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <img className="rounded-t-lg w-full h-auto" src={img} alt="" />
                                <div className="flex flex-col justify-between p-5 h-[270px]">
                                    <div>
                                        <h5 className="mb-2 text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                                        <p className="mb-3 text-xs md:text-sm text-gray-700 dark:text-gray-400 overflow-hidden text-ellipsis">{Dec}</p>
                                        <p className="mb-3 text-sm text-gray-700 dark:text-gray-400 font-semibold flex justify-center items-center flex-wrap">Tech Stack: {Tech}</p>
                                    </div>
                                    <div className="flex justify-between mt-auto">
                                    { id !== 2 && live ? (
                                                <a href={live} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-pink-700 rounded-lg hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800 md:py-3 md:px-4">
                                                    Live Link
                                                </a>
                                            ) : (
                                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-gray-400 bg-gray-200 rounded-lg cursor-not-allowed md:py-3 md:px-4" disabled>
                                                    No Live Link
                                                </button>
                                            )}
                                        
                                        <a href={view} target="_blank" className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gray-700 rounded-lg hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800 md:py-3 md:px-4">
                                            View Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <br/>
            <hr />
        </>
    );
}

export default Projects;
