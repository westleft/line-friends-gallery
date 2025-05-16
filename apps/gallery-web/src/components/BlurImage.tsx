import type { Database } from '@packages/types'
import { useEffect, useRef, useState } from 'react'
import { Blurhash } from 'react-blurhash'

export type GalleryItem = Database['public']['Tables']['gallery']['Row']

function BlurImage(image: GalleryItem) {
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [height, setHeight] = useState<number>(0)
  const element = useRef<HTMLDivElement>(null)

  function handleImageLoad() {
    setIsLoading(false)
  }

  useEffect(() => {
    const containerWidth = element.current?.clientWidth
    // 根據寬高比計算高度
    const calculatedHeight = containerWidth! * (image.height / image.width)

    setHeight(calculatedHeight)
  }, [])

  return (
    <div
      ref={element}
      style={{ height: `${height}px` }}
      className={`aspect-[${image.width}/${image.height}] w-full relative`}
    >

      <Blurhash
        hash={image.hash}
        width="100%"
        height={height}
        className="absolute top-0 left-0 w-full h-full object-cover opacity-100 transition-opacity duration-500 ease-in-out "
      />

      <img
        src={image.url}
        alt={`Gallery image ${image.id}`}
        onLoad={handleImageLoad}
        style={{ height: `${height}px` }}
        className={`w-full object-cover absolute top-0 left-0 transition-opacity duration-1000 ease-in-out ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      />

    </div>
  )
}

export default BlurImage
