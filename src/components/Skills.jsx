import React from 'react'
import htmlImg from '../assets/html.jpg' // Adjust the path/name as needed for your project
import cssImg from '../assets/css.jpg'
import jsImg from '../assets/js.jpg'
import reactImg from '../assets/react.jpg'
import tailwindImg from '../assets/tailwind.jpg'

const Skills = () => {
    const skills = [
        { 
            name: 'HTML 5', 
            image: htmlImg, 
            description: 'Building structured, semantic, and accessible web pages adhering to modern web standards.' 
        },
        { 
            name: 'CSS 3', 
            image: cssImg, 
            description: 'Crafting responsive layouts, animations, and modern designs with scalable stylesheets.' 
        },
        { 
            name: 'JavaScript', 
            image: jsImg, 
            description: 'Developing dynamic, interactive client-side functionality and modern asynchronous operations.' 
        },
        { 
            name: 'React Js', 
            image: reactImg, 
            description: 'Building high-performance, component-based user interfaces and single-page applications.' 
        },
        { 
            name: 'Tailwind CSS', 
            image: tailwindImg, 
            description: 'Designing fast, responsive utility-first user interfaces with custom aesthetic setups.' 
        },
    ]

    return (
        <section id='skills' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            <div className='absolute inset-0 overflow-hidden'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5'>
                        <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
                        <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                            Expertise
                        </span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        My <span className='text-red-500 dark:text-red-400'>Skills</span>
                    </h2>
                    <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16'>
                        Explore the technologies and tools I leverage to build exceptional digital experiences.
                    </p>

                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 lg:gap-12'>
                        {skills.map((skill, index) => (
                            <div
                                key={index}
                                className='flex flex-col items-center text-center p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-105'
                                data-aos='fade-up'
                                data-aos-delay={index * 100}
                            >
                                <div className='w-24 h-24 mb-6 rounded-full p-1 bg-linear-to-tr from-red-500 to-red-700 shadow-lg flex items-center justify-center'>
                                    <div className='w-full h-full rounded-full bg-white dark:bg-gray-900 flex items-center justify-center overflow-hidden p-2'>
                                        <img 
                                            src={skill.image} 
                                            alt={skill.name} 
                                            className='w-full h-full object-cover rounded-full'
                                        />
                                    </div>
                                </div>
                                <h3 className='text-xl font-bold dark:text-white text-gray-900 mb-2'>
                                    {skill.name}
                                </h3>
                                <p className='text-sm text-gray-600 dark:text-gray-400 leading-relaxed'>
                                    {skill.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skills