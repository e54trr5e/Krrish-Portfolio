import { ArrowRight } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiLeetcode } from 'react-icons/si'
import about from '../assets/about.jpg' 

const About = () => {
  const socialIcons = [
    {
      icon: FaGithub,
      label: 'Github',
      href: 'https://github.com/e54trr5e', 
      color: 'hover:text-green-500 hover:border-green-500/40',
    },
    {
      icon: FaLinkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/krrish-b5341333a/', 
      color: 'hover:text-blue-500 hover:border-blue-500/40',
    },
    {
      icon: SiLeetcode,
      label: 'LeetCode',
      href: 'https://leetcode.com/u/krrish_75286/',
      color: 'hover:text-yellow-500 hover:border-yellow-500/40',
    },
  ]

  return (
    <section id='about' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
      <div className='max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center relative z-10'>
        {/* Left Column - Content */}
        <div
          className='order-2 lg:order-1 flex flex-col items-center lg:items-start text-center lg:text-left'
          data-aos='fade-right'
        >
          <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-4'>
            <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
            <span className='text-xs sm:text-sm font-semibold tracking-wider uppercase dark:text-red-300 text-red-600'>
              About Me
            </span>
          </div>

          <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 dark:text-white text-gray-900 leading-tight'>
            Turning Ideas Into
            <span className='text-red-600 dark:text-red-400 block'>Digital Reality</span>
          </h2>

          <p className='text-base lg:text-lg mb-8 leading-relaxed dark:text-gray-300 text-gray-700 max-w-xl'>
            I’m a Full Stack Developer dedicated to crafting robust, scalable, and visually compelling digital experiences. My journey in software engineering is driven by a deep passion for solving complex problems and transforming innovative concepts into functional, user-centric applications. With expertise spanning both frontend and backend technologies, I focus on delivering seamless end-to-end solutions that emphasize performance, clean architecture, and modern design standards.
          </p>

          <div className='flex gap-4 mb-8'>
            {socialIcons.map((social, index) => {
              const IconComponent = social.icon
              return (
                <a
                  key={index}
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  aria-label={social.label}
                  data-aos='zoom-in'
                  data-aos-delay={index * 100}
                  className={`w-12 h-12 rounded-full flex items-center justify-center text-xl border border-gray-200 dark:border-gray-800 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm dark:text-gray-300 text-gray-700 transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color}`}
                >
                  <IconComponent />
                </a>
              )
            })}
          </div>

          <a href="#contact" data-aos='fade-up' data-aos-delay='300'>
            <button className='group inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-105'>
              Let's Talk
              <ArrowRight size={18} />
            </button>
          </a>
        </div>

        {/* Right Column - Image */}
        <div
          className='relative order-1 lg:order-2 flex justify-center'
          data-aos='fade-left'
        >
          <div className='relative w-full max-w-sm sm:max-w-md'>
            <div className='absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] filter blur-xl opacity-40 animate-pulse' />
            <div className='absolute inset-0 bg-linear-to-r from-red-600 to-red-800 rounded-[40%_60%_60%/40%_60%_70%] transform rotate-3 scale-105' />
            <img
              src={about}
              alt="About"
              className='relative z-10 rounded-[40%_60%_60%/40%_60%_70%] shadow-2xl w-full h-auto object-cover border-2 border-red-500/30 backdrop-blur-sm'
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About