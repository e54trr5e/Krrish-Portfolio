import React, { useState, useEffect } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import { Download, Mail } from 'lucide-react'
import hero from '../assets/hero.jpgcd'
import cvPdf from '../assets/cv.pdf' // Make sure cv.pdf is placed in your src/assets folder

const Hero = () => {
    const roles = ['Full Stack Developer', 'Frontend Developer', 'UI/UX Enthusiast']
    const [currentRoleIndex, setCurrentRoleIndex] = useState(0)
    const [currentText, setCurrentText] = useState('')
    const [isDeleting, setIsDeleting] = useState(false)
    const [typingSpeed, setTypingSpeed] = useState(150)

    useEffect(() => {
        const fullText = roles[currentRoleIndex]

        const handleTyping = () => {
            if (!isDeleting) {
                setCurrentText(fullText.substring(0, currentText.length + 1))
                if (currentText === fullText) {
                    setTimeout(() => setIsDeleting(true), 2000) // Pause at full word
                    setTypingSpeed(100)
                }
            } else {
                setCurrentText(fullText.substring(0, currentText.length - 1))
                if (currentText === '') {
                    setIsDeleting(false)
                    setCurrentRoleIndex((prev) => (prev + 1) % roles.length)
                    setTypingSpeed(150)
                }
            }
        }

        const timer = setTimeout(handleTyping, typingSpeed)
        return () => clearTimeout(timer)
    }, [currentText, isDeleting, currentRoleIndex, typingSpeed])

    const socialIcons = [
        {
            icon: FaGithub,
            alt: 'GitHub',
            link: 'https://github.com/e54trr5e',
        },
        {
            icon: FaLinkedin,
            alt: 'LinkedIn',
            link: 'https://www.linkedin.com/in/krrish-b5341333a/',
        },
        {
            icon: SiLeetcode,
            alt: 'LeetCode',
            link: 'https://leetcode.com/u/krrish_75286/',
        },
    ]

    return (
        <div>
            <section
                id="home"
                className="min-h-screen flex items-center relative overflow-hidden"
            >
                <div className="container mx-auto px-4 sm:px-8 lg:px-14 py-12 lg:-mt-14 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">

                        <div className='w-full lg:w-2/5 flex justify-center flex-col items-center group relative' data-aos='fade-right'>
                            <div className='absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-full filter blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-500' />
                            <div className='relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96'>
                                <img src={hero} alt="hero" className='w-full h-full object-cover rounded-full relative z-10 transform group-hover:scale-105 transition-transform duration-500' />
                                <div className='absolute inset-0 border-2 border-red-500/30 rounded-full scale-110 group-hover:scale-125 transition-transform duration-500 pointer-events-none' />
                                <div className='absolute inset-0 border-2 border-red-500/30 rounded-full scale-125 group-hover:scale-150 transition-transform duration-500 pointer-events-none' />
                            </div>
                        </div>

                        <div
                            className="lg:w-3/5 w-full flex flex-col items-center lg:items-start text-center lg:text-left lg:self-start lg:pt-10"
                            data-aos="fade-left"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5">
                                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />

                                <span className="text-sm font-medium dark:text-red-400 text-gray-700">
                                    Available for work
                                </span>
                            </div>
                            <h1 className='text-4xl sm:text-5xl lg:text-6xl font-bold mb-3 text-gray-900 dark:text-white'>
                                Hi, I'm <span className='text-red-600 dark:text-red-300'>Krrish</span>
                            </h1>
                            <h2 className='text-xl sm:text-2xl font-mono mb-4 text-red-600 dark:text-red-400 min-h-[2rem]'>
                                <span className='text-gray-400 dark:text-gray-500'>&lt;</span>
                                <span className="mx-1">{currentText}</span>
                                <span className="animate-pulse text-red-500">|</span>
                                <span className='text-gray-400 dark:text-gray-500'>&gt;</span>
                            </h2>
                            <p className='text-gray-600 dark:text-gray-300 max-w-xl text-base sm:text-lg mb-8 leading-relaxed'>
                                Building scalable web applications with modern technologies. Passionate about clean code, UI/UX design, and solving complex problems.
                            </p>

                            {/* Download CV & Hire Me Buttons */}
                            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8">
                                <a
                                    href={cvPdf}
                                    download="Krrish_CV.pdf"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold bg-red-600 hover:bg-red-700 transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transform hover:scale-105 cursor-pointer"
                                >
                                    <Download size={18} />
                                    Download CV
                                </a>

                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold bg-linear-to-r from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 transition-all duration-300 shadow-lg hover:shadow-[0_0_35px_rgba(239,68,68,0.7)] transform hover:scale-105 cursor-pointer"
                                >
                                    <Mail size={18} />
                                    Hire Me
                                </a>
                            </div>

                        </div>
                        
                    </div>

                </div>
            </section>
        </div>
    )
}

export default Hero