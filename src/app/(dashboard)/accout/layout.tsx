import React from 'react'

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <h1>dgdg</h1>
       {/* children section */}
      <div className="w-full"> {children}</div>
    </main>
  )
}
