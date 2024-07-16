import Articles from '@/src/components/Article/Articles'
import BlogOverview from '@/src/components/BlogCards/BlogOverview'
import ContactForm from '@/src/components/ContactForm/ContactForm'
import Projects from '@/src/components/Projects/Projects'
import React from 'react'

const page = () => {
  return (
    <div className='my-24 mt-[200px]' >
      <BlogOverview/>
      <Projects/>
      <Articles/>
      <ContactForm/>
    </div>
  )
}

export default page