import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='flex flex-col flex-1 h-[1139px] bg-slate-50 px-4 '>
       {/* children section */}
        <div className="w-full flex-1"> {children}</div>
    </div>
  )
}
