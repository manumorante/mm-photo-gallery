import React from 'react'
import GalleryPhoto from './GalleryPhoto'
import 'mm-masonry/css/mm-masonry.css'

export default function Gallery({ album, dispatch = () => {} }) {
  const colWidth = 285

  return (
    <div className='Gallery mm-masonry'>
      {album.photos.map((photo) => {
        // Width will be the width of the column and height is
        // calculated proportionally to the new width.
        const width = colWidth
        const height = Math.floor((photo.height * colWidth) / photo.width)

        return (
          <GalleryPhoto
            key={photo.id}
            src={`${photo.src}`}
            width={width}
            height={height}
            handleClick={() => {}}
          />
        )
      })}
    </div>
  )
}
