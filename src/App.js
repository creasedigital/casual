import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Store from './pages/Store';
import NoPage from './pages/NoPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				{/*<Route path='/' element={<Layout />}>
					<Route index element={<Home />} />
					<Route path='about' element={<About />} />
					<Route path='products' element={<Products />} />
					<Route path='store' element={<Store />} />
	<Route path='*' element={<NoPage />} />
				</Route>*/}
				<Route index element={<Home />} />
			</Routes>
		</BrowserRouter>
	);
}
export default App;
