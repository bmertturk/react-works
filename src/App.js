import './App.scss';
import Header from './components/Header';
import {BrowserRouter as Router} from "react-router-dom";
import Templates from "./templates/Templates";
import Sidebar from "./components/Sidebar";


const App = () => {

	return (
		<Router>
			<div id="wrapper">
				<Sidebar />
				<main>
					<Header />
					<Templates />
				</main>
			</div>
		</Router>
	)
}

export default App;