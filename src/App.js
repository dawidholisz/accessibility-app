import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProductDetailPage from 'pages/ProductDetailPage'
import HomePage from 'pages/HomePage'

import { DataProvider } from 'contexts/DataContext'

import Navbar from 'components/Navbar'

const App = () => (
  <div className="App">
    <Router>
      <DataProvider>
        <Navbar/>
        <Switch>
          <Route path="/details/:id" component={ProductDetailPage}/>
          <Route path="/" component={HomePage}/>
        </Switch>
      </DataProvider>
    </Router>
  </div>
)

export default App
