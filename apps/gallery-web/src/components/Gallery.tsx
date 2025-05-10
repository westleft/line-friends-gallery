import { supabaseClient } from '@packages/utils'
import { useEffect, useState } from 'react'
import BlurImage from './BlurImage'

function Gallery() {
  const [images, setImages] = useState<any[]>([])

  async function getImages() {
    const { data, error } = await supabaseClient.from('gallery').select('*')
    if (error) {
      console.error('Error fetching images:', error)
    }
    setImages(data as any)
    return data
  }

  useEffect(() => {
    getImages()
  }, [])

  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-5 gap-4">
        {images.map(image => (
          <div key={image} className="mb-4 break-inside-avoid">
            <BlurImage image={image} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Gallery
