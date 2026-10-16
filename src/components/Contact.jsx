import React, { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2, MessageSquare } from 'lucide-react'

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', message: '' })
        }, 4000)
    }

    const contactInfo = [
        {
            icon: Mail,
            title: 'Email Me',
            value: 'krrishsinghchd1@gmail.com',
            link: 'mailto:krrishsinghchd1@gmail.com',
        },
        {
            icon: Phone,
            title: 'Call Me',
            value: '+91 9877541180',
            link: 'tel:+919876543210',
        },
        {
            icon: MapPin,
            title: 'Location',
            value: 'India',
            link: '#',
        },
    ]

    return (
        <section id='contact' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            {/* Background Decorative Glows */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                {/* Section Header */}
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5'>
                        <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
                        <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                            Get In Touch
                        </span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        Let's <span className='text-red-500 dark:text-red-400'>Talk</span>
                    </h2>
                    <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto'>
                        Have a project in mind, an opportunity, or just want to connect? Drop me a message below!
                    </p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-3 gap-10 items-start'>
                    {/* Contact Info Cards (Left Column) */}
                    <div className='lg:col-span-1 flex flex-col gap-6' data-aos='fade-right'>
                        {contactInfo.map((item, index) => {
                            const IconComponent = item.icon
                            return (
                                <a
                                    key={index}
                                    href={item.link}
                                    className='flex items-center gap-5 p-6 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02] group'
                                >
                                    <div className='w-12 h-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400 group-hover:bg-red-500 group-hover:text-white transition-colors duration-300'>
                                        <IconComponent size={22} />
                                    </div>
                                    <div>
                                        <h3 className='text-sm font-medium text-gray-500 dark:text-gray-400'>
                                            {item.title}
                                        </h3>
                                        <p className='text-base font-semibold dark:text-white text-gray-900 mt-0.5'>
                                            {item.value}
                                        </p>
                                    </div>
                                </a>
                            )
                        })}
                    </div>

                    {/* Contact Form (Right Column) */}
                    <div
                        className='lg:col-span-2 p-8 sm:p-10 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm shadow-xl'
                        data-aos='fade-left'
                    >
                        {submitted ? (
                            <div className='flex flex-col items-center justify-center py-16 text-center' data-aos='zoom-in'>
                                <div className='w-16 h-16 rounded-full bg-emerald-500/10 text-emerald-500 flex items-center justify-center mb-4 border border-emerald-500/20'>
                                    <CheckCircle2 size={32} />
                                </div>
                                <h3 className='text-2xl font-bold dark:text-white text-gray-900 mb-2'>
                                    Message Sent Successfully!
                                </h3>
                                <p className='text-gray-600 dark:text-gray-400 max-w-sm'>
                                    Thank you for reaching out. I'll get back to you as soon as possible.
                                </p>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
                                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                                            Your Name
                                        </label>
                                        <input
                                            type='text'
                                            name='name'
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            placeholder='John Doe'
                                            className='px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm'
                                        />
                                    </div>
                                    <div className='flex flex-col gap-2'>
                                        <label className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                                            Your Email
                                        </label>
                                        <input
                                            type='email'
                                            name='email'
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            placeholder='john@example.com'
                                            className='px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm'
                                        />
                                    </div>
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                                        Your Message
                                    </label>
                                    <textarea
                                        name='message'
                                        rows='5'
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder='Type your message here...'
                                        className='px-4 py-3 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 dark:text-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all text-sm resize-none'
                                    ></textarea>
                                </div>

                                <button
                                    type='submit'
                                    className='group inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full text-white font-semibold bg-linear-to-r from-red-600 to-red-800 hover:shadow-[0_0_40px_rgba(220,38,38,0.7)] transition-all duration-300 transform hover:scale-[1.02] cursor-pointer'
                                >
                                    Send Message
                                    <Send size={16} className='group-hover:translate-x-1 transition-transform' />
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact
