import React from 'react'
import { ClipboardListIcon } from '@heroicons/react/outline'
import { BriefcaseIcon } from '@heroicons/react/outline'
import { VideoCameraIcon } from '@heroicons/react/outline'

const Skills = () => {
    return (
        <section className="w-full mx-auto bg-gray-100 py-32">
        <h2 className="text-2xl md:text-3xl text-left w-11/12 max-w-6xl mx-auto mb-4 font-semibold">Skills</h2>
          <div className="grid grid-cols-1 gap-6 w-11/12 max-w-6xl  mx-auto md:grid-cols-2 lg:grid-cols-3">
            <div className="flex flex-col bg-white text-left p-6 rounded-xl shadow-sm">
              <ClipboardListIcon 
                className="h-8 w-8 mb-1"
              />
              <h3 className="text-2xl mb-2 font-medium">Sales</h3>
              <p className="text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae justo.</p>
            </div>
            <div className="flex flex-col bg-white text-left p-6 rounded-xl shadow-sm">
              <BriefcaseIcon 
                className="h-8 w-8 mb-1"
              />
              <h3 className="text-2xl mb-2 font-medium">Business Development</h3>
              <p className="text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae justo.</p>
            </div>
            <div className="flex flex-col bg-white text-left p-6 rounded-xl shadow-sm">
              <VideoCameraIcon 
                className="h-8 w-8 mb-1"
              />
              <h3 className="text-2xl mb-2 font-medium">Marketing</h3>
              <p className="text-base font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Velit dignissim sodales ut eu sem integer vitae justo.</p>
            </div>
          </div>
        </section>
    )
}

export default Skills
