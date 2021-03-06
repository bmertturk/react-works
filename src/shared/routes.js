import Dashboard from '../templates/Dashboard';
import About from '../templates/About';
import Contact from '../templates/Contact';
import Map from '../templates/Map';

const routes = [
	{
		path: "/",
		component: Dashboard
	},
	{
		path: "/about",
		component: About
	},
	{
		path: "/contact",
		component: Contact,
		subRoutes: [
			{
				path: "/contact/map",
				component: Map
			}
		]
	}
];

export default routes