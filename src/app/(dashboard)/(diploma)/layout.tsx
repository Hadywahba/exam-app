import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col min-h-screen bg-slate-50 px-4 '>
       {/* children section */}
        <div className="w-full"> {children}</div>
    </div>
  )
}
