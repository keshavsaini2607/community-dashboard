import React from 'react'
import Faq from '.'

const FaqSection = () => {
  return (
    <div className='px-20 mt-20 pb-40'>
        <h1 className='text-lg text-primary mb-5'>Frequently asked about the community</h1>
        <h1 className='text-3xl'>FAQ</h1>
        <div className='mt-10'>
            <Faq />
        </div>
    </div>
  )
}

export default FaqSection