import React from 'react'
import Navbar from '../components/Nav'
import { communities } from '../utils/constants';
import CommunityTile from '../components/Community/CommunityTile';

const Explore = () => {
  return (
    <div>
      <Navbar />
      <div className='px-8 py-5 lg:px-16 md:px-10 md:py-5'>
        <h1 className='text-3xl font-Aboreto md:text-5xl'>Live Communities</h1>
        <div className='flex flex-wrap mt-10'>
          {
            communities.map((community) => (
              <CommunityTile key={community.id} data={community} pg="full" />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Explore