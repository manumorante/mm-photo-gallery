import React from 'react'
import ReactDOM from 'react-dom/client'
import Gallery from '../Gallery/Gallery'
import { ALBUM } from '../../example-album.js'

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='App'>
      <Gallery album={ALBUM} />
    </div>
  </React.StrictMode>
)
