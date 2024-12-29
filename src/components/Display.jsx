import React, { useEffect, useRef } from 'react' // Add useRef import
import { Routes, Route, useLocation } from 'react-router-dom'
import DisplayHome from './DisplayHome'
import DisplayAlbum from './DisplayAlbum'
import { albumsData } from '../assets/assets'

const Display = () => {
  const displayRef = useRef()
  const location = useLocation()
  const isAlbum = location.pathname.includes("album")
  const albumId = isAlbum ? location.pathname.slice(-1) : ""
  
  useEffect(() => {
    if (isAlbum) {
      const bgColor = albumsData[Number(albumId)].bgColor
      displayRef.current.style.background = `linear-gradient(${bgColor},#121212)`
    } else {
      // Set a default background color when not on album page
      displayRef.current.style.background = `linear-gradient(#121212,#121212)`
    }
  }, [isAlbum, albumId]) // Add dependencies to useEffect

  return (
    <div 
      ref={displayRef} 
      className='w-[100%] m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0'
    >
      <Routes>
        <Route path='/' element={<DisplayHome />} />
        <Route path='/album/:id' element={<DisplayAlbum />} />
      </Routes>
    </div>
  )
}

export default Display