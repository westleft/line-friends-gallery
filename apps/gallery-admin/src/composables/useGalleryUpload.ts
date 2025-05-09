import { generateBlurhashFromUrl, supabaseClient } from '@packages/utils'
import { ref } from 'vue'
import { z } from 'zod'

const formDataSchema = z.object({
  url: z.string().url(),
  hash: z.string().min(1, 'Hash is required'),
  width: z.number().int().nonnegative(),
  height: z.number().int().nonnegative(),
})

type FormData = z.infer<typeof formDataSchema>

export function useGalleryUpload() {
  const imageRef = ref<HTMLImageElement | null>(null)
  const formData = ref<FormData>({
    url: '',
    hash: '',
    width: 0,
    height: 0,
  })

  function handleImageLoad() {
    if (!imageRef.value) {
      return
    }
    formData.value.width = imageRef.value.naturalWidth
    formData.value.height = imageRef.value.naturalHeight
  }

  async function handleBlurhashChange() {
    const hash = await generateBlurhashFromUrl(formData.value.url)
    formData.value.hash = hash
  }

  async function handleUpload() {
    const { url, hash, width, height } = formData.value
    const { data, error } = await supabaseClient.from('gallery').insert({
      url,
      hash,
      width,
      height,
    })
    return { data, error }
  }

  async function handleFormSubmit() {
    await handleBlurhashChange()

    const result = formDataSchema.safeParse(formData.value)
    if (!result.success) {
      return { success: false, error: result.error }
    }

    const uploadResult = await handleUpload()
    return { success: true, ...uploadResult }
  }

  return {
    imageRef,
    formData,
    handleImageLoad,
    handleFormSubmit,
  }
}
