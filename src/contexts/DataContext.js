import React, { useContext } from 'react'

const DataContext = React.createContext({ products: [] })

export const DataProvider = ({ children }) => {
  const products = [
    { name: 'Bike', voiceCommand: ['bike'], description: 'Suspendisse sit amet suscipit ligula. Nunc nec elit purus. Maecenas nunc ex, ultricies vel dui a, dignissim tempor enim. Proin sollicitudin massa et ante fermentum euismod. Proin pulvinar a justo ac maximus. Sed nec dolor congue, cursus lacus non, congue ex. Nulla at massa nunc. Aliquam eget faucibus lorem, eu tristique ligula. Nam nulla arcu, hendrerit sed placerat eget, maximus id justo. Etiam consequat est elit, quis commodo tortor volutpat at. Integer ultricies felis id congue sagittis. Maecenas ornare consequat turpis id tincidunt. Praesent pharetra odio nunc, vitae malesuada massa lacinia in. Aliquam rutrum vulputate sollicitudin. Curabitur consectetur, mi blandit viverra lobortis, est sapien tempor dolor, vitae elementum massa nulla at ipsum. Aliquam erat volutpat. ', id: 1, imgUrl: 'https://i.pinimg.com/474x/b3/4d/1b/b34d1b34a18bed865adc8bbac7062ac5.jpg' },
    { name: 'Car', voiceCommand: ['car','f***'], description: 'Mauris sed felis massa. Morbi lacus justo, maximus dapibus rutrum eget, dictum et velit. Donec nec metus vitae arcu gravida euismod non eu elit. Sed non laoreet quam, vel tincidunt quam. Aenean facilisis mi ante, eu consectetur turpis lobortis vel. Morbi faucibus nisl a eros congue suscipit. Suspendisse rutrum libero ac feugiat tincidunt. ', id: 2, imgUrl: 'https://www.odkryj-auto.pl/files/car/big/fiat-multipla-1591622485.jpg' },
    { name: 'Doll', voiceCommand: ['doll'], description: 'Ut blandit pretium massa, et lobortis libero vulputate finibus. Cras cursus eu magna nec condimentum. Quisque euismod dictum facilisis. Duis tempus efficitur ligula, efficitur feugiat orci bibendum in. Mauris a ex imperdiet, hendrerit magna ut, luctus urna. Integer tempus arcu eu dictum ultricies. Mauris ornare, justo vel efficitur scelerisque, felis lorem malesuada risus, ac tristique libero justo sed erat. Aliquam at blandit lectus, sed blandit turpis. Sed non eros eros. Praesent feugiat tincidunt felis non tincidunt. Suspendisse potenti. Sed sit amet ex dolor. Sed id dapibus elit. Aenean id pretium tortor. Ut iaculis, orci nec ultricies interdum, arcu nunc rutrum lectus, ut pretium magna erat id felis. Morbi venenatis lacus purus. ', id: 3, imgUrl: 'https://a.allegroimg.com/s1024/0cc656/95c43dd749b29e702f9997fd9e49' },
  ]
  const getProductDetailsById = (id) => products.find(product => product.id === +id)
  const getProductIdByVoiceCommand = (voiceCommand) => products.find(p => p.voiceCommand.includes(voiceCommand.toLowerCase()))?.id

  return (
    <DataContext.Provider value={{ products, getProductDetailsById, getProductIdByVoiceCommand }}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => useContext(DataContext)
