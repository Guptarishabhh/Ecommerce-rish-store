import React from 'react'

const Footer = () => {
  return (
    <footer className="text-purple-500 text-gray-400 py-10 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          
          {/* Left Side: Identity */}
          <div className="text-center md:text-left">
            <h3 className="text-purplr-500 text-xl font-bold tracking-tight">Rishabh Gupta</h3>
            <p className="text-xs uppercase tracking-widest text-gray-500 mt-1">Full Stack Developer</p>
          </div>

          {/* Center: Navigation/Socials */}
          <div className="flex space-x-8 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Github</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter</a>
          </div>

          {/* Right Side: Status */}
          <div className="flex items-center space-x-2 bg-white/5 px-4 py-2 rounded-full border border-white/10">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            <span className="text-xs text-gray-300">Open to Work</span>
          </div>

        </div>

        <div className="mt-10 pt-8 border-t border-white/5 text-center md:text-left">
          <p className="text-[10px] text-gray-600 uppercase tracking-widest">
            © 2026 • Crafted with passion.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer