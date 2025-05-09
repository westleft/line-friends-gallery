import { encode } from 'blurhash'

const X_COMPONENTS = 4
const Y_COMPONENTS = 4

function getImageDataFromElement(image: HTMLImageElement): ImageData {
  const canvas = document.createElement('canvas')
  canvas.width = image.width
  canvas.height = image.height

  const context = canvas.getContext('2d')
  if (!context) {
    throw new Error('Failed to get 2D context from canvas.')
  }

  context.drawImage(image, 0, 0)
  return context.getImageData(0, 0, image.width, image.height)
}

function loadImage(url: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.crossOrigin = 'anonymous' // Allow CORS image access
    img.src = url

    img.onload = () => resolve(img)
    img.onerror = () => reject(new Error('Failed to load image.'))
  })
}

export async function generateBlurhashFromUrl(url: string): Promise<string> {
  const image = await loadImage(url)
  const imageData = getImageDataFromElement(image)

  return encode(
    imageData.data,
    imageData.width,
    imageData.height,
    X_COMPONENTS,
    Y_COMPONENTS,
  )
}
