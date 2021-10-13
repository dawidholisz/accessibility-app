import React from 'react'
import { useData } from 'contexts/DataContext'
import ProductListingItem from 'components/ProductListingItem'
import { useHistory } from 'react-router-dom/cjs/react-router-dom'
import { useSpeechRecognition } from 'react-speech-recognition'

const ProductListing = () => {
const {products} = useData()


  const { getProductIdByVoiceCommand } = useData()
  const history = useHistory()

  const commands = [
    {
      command: ['Go to *'],
      callback: (product) => {
        const productId = getProductIdByVoiceCommand(product)
        if (productId !== undefined) {
          history.push(`/details/${productId}`)
        }
      }
    }
  ]
  const { browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands,
  })


  return (
    <div className="product-listing">
      {!browserSupportsSpeechRecognition && <span>Browser doesn't support speech recognition.</span>}
      {products.map(product=><ProductListingItem product={product} key={product.id}/>)}
    </div>
  )
}

export default ProductListing
