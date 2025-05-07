import Category from './components/Category'
import Gallery from './components/Gallery'

function App() {
  const images = [
    { id: 1, url: 'https://picsum.photos/400/600' },
    { id: 2, url: 'https://picsum.photos/400/400' },
    { id: 3, url: 'https://picsum.photos/400/800' },
    { id: 4, url: 'https://picsum.photos/400/300' },
    { id: 5, url: 'https://picsum.photos/400/500' },
    { id: 6, url: 'https://picsum.photos/400/700' },
    { id: 7, url: 'https://picsum.photos/400/450' },
    { id: 8, url: 'https://picsum.photos/400/550' },
    { id: 9, url: 'https://picsum.photos/400/650' },
    { id: 10, url: 'https://picsum.photos/400/350' },
  ]

  return (
    <div className="p-4">
      <div className="flex">
        <Category />
        <Gallery />
      </div>
    </div>
  )
}

export default App
