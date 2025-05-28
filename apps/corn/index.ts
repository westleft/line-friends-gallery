import { supabaseClient } from '@packages/utils'

supabaseClient

async function corn() {
  const { _, error } = await supabaseClient.from('gallery').select('*')
  if (error) {
    console.error(error)
  }
}

corn()
