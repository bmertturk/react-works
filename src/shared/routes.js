import About from '../templates/About';
import Contact from '../templates/Contact';
import Map from '../templates/Map';

const routes = [
	{
		path: "/about",
		component: About
	},
	{
		path: "/contact",
		component: Contact,
		routes: [
			{
				path: "/map",
				component: Map
			}
		]
	}
];

export default routes