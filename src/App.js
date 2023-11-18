import './App.css';
import Home from './components/Home/Home';

import { BrowserRouter , Routes , Route ,Navigate } from 'react-router-dom';
import CategoryPage from './components/Categories/CategoryPage';
import Productdetail from './components/Product/Productdetail';
import AppContext from './Utils/Context';
import Cart from './components/Cart/Cart';
import { Provider } from 'react-redux';
import Store from './Store/Store';
import Menu from './components/Header/Menu';
import News from './components/News/News';
import Footer from './components/Footer/Footer';
import About from './components/Pages/About';
import Contact from './components/Pages/Contact';
import CategoriesPage from './components/Pages/CategoriesPage';
import AuthProvider from './components/AuthContext/AuthProvider';

import SignIn from './components/Pages/auth/SignIn.jsx';
import Register from './components/Pages/auth/Register';
import Profile from './components/Pages/auth/Pofile';
import { getToken } from './components/Constant/Helper';

function App() {
  return (
    <>
    <BrowserRouter>
    <Provider store={Store}>
    <AppContext>
    <AuthProvider>
    <Menu/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/category/:id' element={<CategoryPage/>} />
    <Route path='/product/:id' element={<Productdetail/>} />
    <Route path='/cart' element={ <Cart/> } />
    <Route path='/about' element={<About/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/catepage' element={<CategoriesPage/>} />
    
    <Route path='/signin'  element={<SignIn/>} />
    <Route path='/signup'  element={ <Register/> } />
    <Route
    path="/profile"
    element={getToken() ? <Profile /> : <Navigate to="/signin" />}
  />
    </Routes>
    <News />
    <Footer/>
    </AuthProvider>
    </AppContext>
    </Provider>
    </BrowserRouter>
    </>
  );
}

export default App;
