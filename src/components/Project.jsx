import React, { useRef } from 'react'
import { FolderGit2, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react'
import taskImg from '../assets/task.jpg'
import quizImg from '../assets/quiz.jpg'
import workshopImg from '../assets/workshop.jpg'
import portfolioImg from '../assets/portfolio.jpg'
import studentImg from '../assets/student.jpg'

const Projects = () => {
    const scrollContainerRef = useRef(null)

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            const { scrollLeft, clientWidth } = scrollContainerRef.current
            const scrollAmount = clientWidth * 0.75
            scrollContainerRef.current.scrollTo({
                left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    const projects = [
        {
            title: 'Student Management System',
            description: 'A comprehensive educational portal designed to track student records, evaluate analytics, and manage backend data efficiently.',
            tech: ['Node.js', 'Express.js', 'MongoDB', 'JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/e54trr5e/Student-Management-System',
            badge: 'Full Stack',
            image: studentImg,
        },

        {
            title: 'Online Quiz System',
            description: 'An interactive online testing platform designed to conduct quizzes, evaluate scores automatically, and display detailed results.',
            tech: ['Node.js', 'Express.js', 'MySQL', 'JavaScript', 'HTML', 'CSS'],
            github: 'https://github.com/e54trr5e/Online-quiz-System',
            badge: 'Full Stack',
            image: quizImg,
        },
        {
            title: 'Task Management app', 
            description: 'A comprehensive task management application designed to organize daily workflows, track team progress, and manage project milestones efficiently[cite: 1].', //[cite: 1]
            tech: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS'],
            github: 'https://github.com/username/TaskFlow-Pro',
            badge: 'Full Stack', 
            image: taskImg, 
        },
        {
            title: 'Smart Mechanical Workshop',
            description: 'A service workshop web application for scheduling mechanical repairs, managing equipment service records, and streamlining operations.',
            tech: ['JavaScript', 'HTML5', 'CSS3'],
            github: 'https://github.com/e54trr5e/Smart-Mechanical-Workshop',
            badge: 'Featured',
            image: workshopImg,
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, fully responsive developer portfolio featuring dark mode support, glassmorphism card styling, interactive components, and smooth animations.',
            tech: ['React', 'Tailwind CSS', 'Javascript', 'HTML5', 'CSS3'],
            github: 'https://github.com/e54trr5e/Krrish-Portfolio',
            badge: 'Frontend',
            image: portfolioImg,
        },
    ]

    return (
        <section id='projects' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            {/* Background Decorative Glows */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                <div className='flex flex-col md:flex-row md:items-end justify-between mb-12' data-aos='fade-up'>
                    <div>
                        <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5'>
                            <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
                            <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                                Portfolio
                            </span>
                        </div>
                        <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                            Featured <span className='text-red-500 dark:text-red-400'>Projects</span>
                        </h2>
                    </div>

                    {/* Navigation Buttons for Sideways Scroll */}
                    <div className='flex items-center gap-3 mt-6 md:mt-0'>
                        <button
                            onClick={() => scroll('left')}
                            className='p-3 rounded-full bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 transition-all duration-300 shadow-md cursor-pointer'
                            aria-label='Scroll Left'
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className='p-3 rounded-full bg-white/50 dark:bg-gray-900/50 border border-gray-200 dark:border-gray-800 text-gray-700 dark:text-gray-300 hover:bg-red-500 hover:text-white dark:hover:bg-red-600 transition-all duration-300 shadow-md cursor-pointer'
                            aria-label='Scroll Right'
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Horizontal Scrollable Container */}
                <div
                    ref={scrollContainerRef}
                    className='flex gap-6 overflow-x-auto pb-8 pt-2 px-2 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-red-500/20 scrollbar-track-transparent focus:outline-none'
                    style={{ scrollbarWidth: 'thin' }}
                    data-aos='fade-up'
                    data-aos-delay='100'
                >
                    {projects.map((project, index) => (
                        <div
                            key={index}
                            className='min-w-[300px] sm:min-w-[380px] max-w-[380px] flex-shrink-0 snap-start flex flex-col p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:border-red-500/40 hover:-translate-y-2 group'
                        >
                            {/* Project Thumbnail / Top Bar */}
                            <div className='relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-gray-100 dark:bg-gray-800 border border-gray-200/50 dark:border-gray-700/50'>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out'
                                />
                                <div className='absolute top-3 right-3'>
                                    <span className='px-3 py-1 rounded-full text-xs font-semibold bg-red-500/90 text-white shadow-md'>
                                        {project.badge}
                                    </span>
                                </div>
                            </div>

                            <h3 className='text-xl font-bold dark:text-white text-gray-900 mb-2 group-hover:text-red-500 transition-colors duration-300'>
                                {project.title}
                            </h3>

                            <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6 flex-grow'>
                                {project.description}
                            </p>

                            {/* Tech stack tags */}
                            <div className='flex flex-wrap gap-2 mb-6'>
                                {project.tech.map((techItem, techIndex) => (
                                    <span
                                        key={techIndex}
                                        className='text-xs font-medium px-2.5 py-1 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 transition-colors duration-300 group-hover:border-red-500/30'
                                    >
                                        {techItem}
                                    </span>
                                ))}
                            </div>

                            {/* Action Buttons */}
                            <div className='flex items-center gap-4 pt-4 border-t border-gray-200 dark:border-gray-800 mt-auto'>
                                <a
                                    href={project.github}
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-red-500 dark:hover:text-red-400 transition-colors duration-300'
                                >
                                    <FolderGit2 size={16} />
                                    Code
                                </a>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Projects