import React from 'react'

const About = () => {
  return (
    <main className='min-h-screen w-full p-16 flex flex-col items-center justify-center'>
        <h1 className='border-2 border-slate-100'>Welcome to about page</h1>
        <section className='w-full h-auto border-2 border-slate-100 p-4'>
          <h2>Section one title</h2>
          <ul>
            <li>
              One
            </li>
            <li>
              One
            </li>
            <li>
              One
            </li>
          </ul>
        </section>
        <section className='w-full h-auto border-2 border-slate-100 p-4'>
          <h2>Section two title</h2>
          <ul>
            <li>
              Two
            </li>
            <li>
              Two
            </li>
            <li>
              Two
            </li>
          </ul>
        </section>
    </main>
  )
}

export default About