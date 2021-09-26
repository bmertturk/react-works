import './App.scss';
import Header from './components/Header';
import {BrowserRouter as Router} from "react-router-dom";

const App = () => {

	return (
		<Router>
			<Header />			
		</Router>
	)
}

export default App;