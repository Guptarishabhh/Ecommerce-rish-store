import React from 'react'
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
     <motion.div
         initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-[#1f1f1f]'
     >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In 
                <span className='text-purple-500'>Touch</span>
            </h2>
            <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>
                Have a Project In mind or want to collaborate? Let's talk!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>

                {/*----contact form----*/}
                <div>
                    <form className='space-y-6'>
                        <div>
                            <label htmlFor="name" className='block text-gray-300 mb-2'>
                                Your name
                            </label>
                            <input className='w-full bg-[#2d2d2d] border border-dark-400 rounded-lg
                             px-4 py-3 outline-none' 
                            type="text" />
                        </div>
                         <div>
                            <label htmlFor="e-mail" className='block text-gray-300 mb-2'>
                                E-mail address
                            </label>
                            <input className='w-full bg-[#2d2d2d] border border-dark-400 rounded-lg
                             px-4 py-3 outline-none' 
                            type="e-mail" />
                        </div>
                         <div>
                            <label htmlFor="Message" className='block text-gray-300 mb-2'>
                                Your Message
                            </label>
                            <textarea className='w-full h-40 bg-[#2d2d2d] border border-dark-400 rounded-lg
                             px-4 py-3 outline-none' 
                            type="text" />
                        </div>
                        <button type='submit' className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium
                        hover:bg-purple-700 transition duration-300 cursor-pointer'>
                            Send
                        </button>
                    </form>
                </div>

                {/*----contact information----*/}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4' >
                            <FaMapMarkerAlt />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Location
                            </h3>
                            <p className='text-gray-400'>
                                Uttar Pradesh, Mirzapur
                            </p>
                        </div>
                    </div>
                     <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4' >
                            <FaEnvelope />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                E-mail
                            </h3>
                            <p className='text-gray-400'>
                               rishabhguptass123@gmail.com
                            </p>
                        </div>
                    </div>
                     <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4' >
                            <FaPhone />
                        </div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>
                                Phone
                            </h3>
                            <p className='text-gray-400'>
                                +91 9554146180
                            </p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href="#" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-purple
                             hover:bg-purple-500 hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>

                             <a href="#" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-purple
                             hover:bg-purple-500 hover:text-white transition duration-300'>
                                <FaLinkedin />
                            </a>

                             <a href="#" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-blue
                             hover:bg-blue-500 hover:text-white transition duration-300'>
                                <FaTwitter />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

     </motion.div>
  )
}

export default Contact