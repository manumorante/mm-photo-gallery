import React, { useState, useRef } from 'react'
// import { useIntersection } from './useIntersection'
import Loading from './Loading'

export default function GalleryPhoto({
  src,
  width,
  height,
  index,
  handleClick,
}) {
  const [isInView, setIsInView] = useState(true)
  const [loading, setLoading] = useState(true)
  const imgRef = useRef()

  // useIntersection(imgRef, () => {
  //   setIsInView(true)
  //   setLoading(true)
  // })

  const handleLoad = () => {
    setLoading(false)
  }

  return (
    <div
      ref={imgRef}
      className='GalleryPhoto mm-masonry__item'
      style={{ '--w': width, '--h': height }}>
      {isInView && (
        <>
          <img
            className='GalleryPhoto__img mm-masonry__img'
            src={src}
            onLoad={handleLoad}
            onClick={() => handleClick(index)}
          />
          {loading && <Loading />}
        </>
      )}
    </div>
  )
}
