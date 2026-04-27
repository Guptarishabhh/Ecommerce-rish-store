import React, { useRef, useState } from 'react' // 1. Added useRef and useState
import { motion } from 'framer-motion'
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone, FaTwitter } from 'react-icons/fa'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef(); // 2. Initialized the ref
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    emailjs.sendForm(
      'service_hcfcpjo', 
      'template_3nmhjxm', 
      form.current, 
      '9s74epF9nv32KzudF'
    )
    .then((result) => {
        setStatus("Message sent successfully!");
        e.target.reset(); 
    }, (error) => {
        setStatus("Failed to send. Please try again.");
        console.error(error);
    });
  };

  return (
     <motion.div
         initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            viewport={{ once: false, amount: 0.2 }}
            id='contact'
            className='py-20 bg-[#1f1f1f] text-white'
     >
        <div className='container mx-auto px-6'>
            <h2 className='text-3xl font-bold text-center mb-4'>
                Get In <span className='text-purple-500'>Touch</span>
            </h2>
            <p className='text-gray-300 text-center max-w-2xl mx-auto mb-16'>
                Have a Project In mind or want to collaborate? Let's talk!
            </p>

            <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/*----contact form----*/}
                <div>
                    {/* 3. Added ref and onSubmit */}
                    <form ref={form} onSubmit={sendEmail} className='space-y-6'>
                        <div>
                            <label className='block text-gray-300 mb-2'>Your name</label>
                            <input 
                              name="from_name" // 4. Matches EmailJS template {{from_name}}
                              required
                              className='w-full bg-[#2d2d2d] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500' 
                              type="text" 
                            />
                        </div>
                         <div>
                            <label className='block text-gray-300 mb-2'>E-mail address</label>
                            <input 
                              name="reply_to" // 4. Matches EmailJS template {{reply_to}}
                              required
                              className='w-full bg-[#2d2d2d] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500' 
                              type="email" 
                            />
                        </div>
                         <div>
                            <label className='block text-gray-300 mb-2'>Your Message</label>
                            <textarea 
                              name="message" // 4. Matches EmailJS template {{message}}
                              required
                              className='w-full h-40 bg-[#2d2d2d] border border-gray-700 rounded-lg px-4 py-3 outline-none focus:border-purple-500' 
                            />
                        </div>
                        <button type='submit' className='w-full px-6 py-3 bg-purple-500 rounded-lg font-medium hover:bg-purple-700 transition duration-300 cursor-pointer'>
                            Send
                        </button>
                        
                        {/* 5. Displaying the status message */}
                        {status && <p className='text-center mt-4 text-purple-400'>{status}</p>}
                    </form>
                </div>

                {/*----contact information (Same as your original)----*/}
                <div className='space-y-8'>
                    <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4'><FaMapMarkerAlt /></div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Location</h3>
                            <p className='text-gray-400'>Uttar Pradesh, Mirzapur</p>
                        </div>
                    </div>
                     <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4'><FaEnvelope /></div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>E-mail</h3>
                            <p className='text-gray-400'>rishabhguptass123@gmail.com</p>
                        </div>
                    </div>
                     <div className='flex items-start'>
                        <div className='text-purple-500 text-2xl mr-4'><FaPhone /></div>
                        <div>
                            <h3 className='text-lg font-semibold mb-2'>Phone</h3>
                            <p className='text-gray-400'>+91 9554146180</p>
                        </div>
                    </div>
                    <div className='pt-4'>
                        <h3 className='text-lg font-semibold mb-4'>Follow Me</h3>
                        <div className='flex space-x-4'>
                            <a href="https://github.com/Guptarishabhh" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-purple
                             hover:bg-purple-500 hover:text-white transition duration-300'>
                                <FaGithub />
                            </a>

                             <a href="https://www.linkedin.com/in/rishabh-gupta-b30274251" className='w-12 h-12 rounded-full bg-[#2d2d2d] flex items-center justify-center text-purple
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