import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import ProductDetailPage from 'pages/ProductDetailPage'
import HomePage from 'pages/HomePage'

import { DataProvider } from 'contexts/DataContext'

import Navbar from 'components/Navbar'
import { ContrastProvider } from 'contexts/ContastContext'
import Layout from 'components/Layout'

const App = () => (
  <div className="App">
    <Router>
      <DataProvider>
        <ContrastProvider>
          <Layout>
            <Navbar/>
            <Switch>
              <Route path="/details/:id" component={ProductDetailPage}/>
              <Route path="/" component={HomePage}/>
            </Switch>
          </Layout>
        </ContrastProvider>
      </DataProvider>
    </Router>
  </div>
)

export default App
