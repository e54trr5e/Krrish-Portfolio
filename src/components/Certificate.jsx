import React from 'react'
import { Award, Calendar, CheckCircle2, FileText } from 'lucide-react'
import uplyxPdf from '../assets/Internship Certificate - Krrish (1).pdf' // Adjust path if needed

const Certificate = () => {
    const certificates = [
        {
            title: 'Web Development Internship',
            issuer: 'Uplyx Solutions',
            date: 'March 25, 2026',
            period: '05-01-26 to 16-03-26',
            certId: 'UPXAB1458',
            description: 'Successfully completed a structured internship in Web Development. Demonstrated strong dedication, technical competence, and problem-solving skills throughout the program.',
            badge: 'Verified',
            pdfUrl: uplyxPdf, 
        },
        {
            title: 'Full-Stack Web Development',
            issuer: 'PW (Physics Wallah)',
            date: '2026',
            period: 'Comprehensive Program',
            certId: 'PW-FSD-2026',
            description: 'Comprehensive certification covering full-stack architecture, modern frontend frameworks, backend server implementation, and database management systems.',
            badge: 'Verified',
            pdfUrl: null,
        },
    ]

    return (
        <section id='certificates' className='min-h-screen flex items-center py-20 px-4 sm:px-6 overflow-hidden relative'>
            {/* Background Decorative Glows */}
            <div className='absolute inset-0 overflow-hidden pointer-events-none'>
                <div className='absolute -top-40 -right-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
                <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-red-500/5 rounded-full blur-3xl'></div>
            </div>

            <div className='max-w-6xl mx-auto w-full relative z-10'>
                <div className='text-center mb-16' data-aos='fade-up'>
                    <div className='inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 mb-5'>
                        <span className='w-2 h-2 rounded-full bg-red-500 animate-pulse'></span>
                        <span className='text-sm font-medium dark:text-gray-300 text-gray-700'>
                            Credentials
                        </span>
                    </div>
                    <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold dark:text-white text-gray-900'>
                        My <span className='text-red-500 dark:text-red-400'>Certificates</span>
                    </h2>
                    <p className='mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-16'>
                        Professional certifications and achievements validating my hands-on technical training and industry experience.
                    </p>

                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12'>
                        {certificates.map((cert, index) => (
                            <div
                                key={index}
                                className='flex flex-col text-left p-8 rounded-2xl bg-white/50 dark:bg-gray-900/50 border border-gray-200/50 dark:border-gray-800/50 backdrop-blur-sm transition-all duration-300 hover:shadow-xl hover:scale-[1.02]'
                                data-aos='fade-up'
                                data-aos-delay={index * 150}
                            >
                                <div className='flex items-center justify-between mb-6'>
                                    <div className='w-14 h-14 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-600 dark:text-red-400'>
                                        <Award size={28} />
                                    </div>
                                    <span className='inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20'>
                                        <CheckCircle2 size={14} />
                                        {cert.badge}
                                    </span>
                                </div>

                                <h3 className='text-2xl font-bold dark:text-white text-gray-900 mb-1'>
                                    {cert.title}
                                </h3>
                                <p className='text-red-600 dark:text-red-400 font-medium text-sm mb-4'>
                                    {cert.issuer}
                                </p>

                                <p className='text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-6'>
                                    {cert.description}
                                </p>

                                {/* PDF View Action Button if available */}
                                {cert.pdfUrl && (
                                    <div className='mb-6'>
                                        <a
                                            href={cert.pdfUrl}
                                            target='_blank'
                                            rel='noopener noreferrer'
                                            className='inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-600 dark:text-red-400 text-sm font-medium transition-colors border border-red-500/20'
                                        >
                                            <FileText size={16} />
                                            View Certificate PDF
                                        </a>
                                    </div>
                                )}

                                <div className='mt-auto pt-4 border-t border-gray-200 dark:border-gray-800 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400'>
                                    <div className='flex items-center gap-2'>
                                        <Calendar size={14} className='text-red-500' />
                                        <span>{cert.period}</span>
                                    </div>
                                    {cert.certId && (
                                        <span className='font-mono bg-gray-100 dark:bg-gray-800 px-2.5 py-1 rounded-md text-gray-700 dark:text-gray-300'>
                                            ID: {cert.certId}
                                        </span>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Certificate