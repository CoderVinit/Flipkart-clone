import { Box, styled } from '@mui/material';
import Header from './components/header/Header'
import Home from './components/home/Home';
import DataProvider from './context/DataProvider';
import DetailsView from './components/details/DetailsView';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cart from './components/cart/Cart';

const HomeBox = styled(Box)`
  margin-top:54px;
`

function App() {
  return (
    <DataProvider>
      <Router>
        <Header />
        <HomeBox>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailsView />} />
            <Route path='/cart' element={<Cart />} />
          </Routes>
        </HomeBox>
      </Router>
    </DataProvider >
  );
}

export default App;
