import React, { useState } from 'react'
import {
    FaHome,
    FaUser,
    FaCode,
    FaCertificate,
    FaProjectDiagram,
    FaEnvelope
} from 'react-icons/fa'
import { motion } from 'framer-motion'
import { Sun, Moon } from 'lucide-react'

const Navbar = ({ darkMode, toggleDarkMode }) => {
    const [active, setActive] = useState('Home')

    const navItems = [
        { name: 'Home', link: '#home', icon: FaHome },
        { name: 'About', link: '#about', icon: FaUser },
        { name: 'Skills', link: '#skills', icon: FaCode },
        { name: 'Certificates', link: '#certificates', icon: FaCertificate },
        { name: 'Projects', link: '#projects', icon: FaProjectDiagram },
        { name: 'Contact', link: '#contact', icon: FaEnvelope }
    ]

    return (
        <div className="fixed z-50 bottom-0 left-0 right-0 flex justify-center">
            <motion.nav
                initial={{ y: 100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className="relative w-[95%] max-w-4xl mb-4"
            >
                {/* Updated background to dark glassmorphism with subtle red border & shadow glow */}
                <div className="relative bg-gray-900/80 dark:bg-black/80 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(220,38,38,0.2)] border border-red-500/30 px-3 py-2">

                    {/* Dark mode button */}
                    <div className="absolute -top-5 right-3">
                        <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={toggleDarkMode}
                            className="p-2 rounded-full bg-gray-800 dark:bg-gray-100 border border-red-500/30 transition-colors backdrop-blur-sm"
                        >
                            {darkMode ? (
                                <Sun className="w-5 h-5 text-black" />
                            ) : (
                                <Moon className="w-5 h-5 text-white" />
                            )}
                        </motion.button>
                    </div>

                    {/* Navigation links */}
                    <div className="flex items-center justify-around gap-1">
                        {navItems.map((item) => {
                            const Icon = item.icon
                            const isActive = active === item.name

                            return (
                                <motion.a
                                    key={item.name}
                                    href={item.link}
                                    onClick={() => setActive(item.name)}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="flex flex-col items-center gap-0.5 py-1.5 px-2 relative group flex-1"
                                >
                                    {isActive && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className="absolute -top-2 left-1/2 -translate-x-1/2 w-6 h-1 bg-red-500 rounded-full shadow-[0_0_8px_#ef4444]"
                                            transition={{ duration: 0.3 }}
                                        />
                                    )}
                                    <Icon
                                        className={`w-5 h-5 transition-all duration-300 ${isActive
                                            ? 'text-red-500'
                                            : 'text-gray-400 group-hover:text-red-400'
                                            }`}
                                    />
                                    <span
                                        className={`text-[10px] font-medium transition-all duration-300 ${isActive
                                                ? 'text-red-500'
                                                : 'text-gray-400 group-hover:text-red-400'
                                            }`}
                                    >
                                        {item.name}
                                    </span>
                                </motion.a>
                            )
                        })}
                    </div>

                </div>
            </motion.nav>
        </div>
    )
}

export default Navbar