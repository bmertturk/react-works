import './App.scss';
import Header from './components/Header';
import {BrowserRouter as Router} from "react-router-dom";
import Templates from "./templates/Templates";

const App = () => {

	return (
		<Router>
			<Header />
			<Templates />
		</Router>
	)
}

export default App;