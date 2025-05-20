import type { Database } from '@packages/types'
import { supabaseClient } from '@packages/utils'
import { Masonry } from 'masonic'
import { useEffect, useState } from 'react'
import BlurImage from './BlurImage'

type GalleryType = Database['public']['Tables']['gallery']['Row']

function Gallery() {
  const [images, setImages] = useState<GalleryType[]>([])

  async function getImages() {
    const { data, error } = await supabaseClient.from('gallery').select('*')
    if (!data) {
      console.error('Error fetching images:', error)
      return
    }
    return data
  }

  useEffect(() => {
    (async () => {
      const images = await getImages()
      if (images) {
        setImages(images)
      }
    })()
  }, [])

  return (
    <div className="w-full mx-auto">
      <h1 className="text-2xl font-bold mb-6">Gallery</h1>
      <Masonry
        items={images}
        render={({ data }) => <BlurImage image={data} />}
        columnGutter={16}
        columnWidth={300}
        maxColumnCount={4}
      />
    </div>
  )
}

export default Gallery
