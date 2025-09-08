import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router';
import RootLayout from './layout/RootLayout';
import About from './pages/About';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Products from './pages/Products';
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path='products' element={<Products />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='*' element={<div>404 Not Found</div>} />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
