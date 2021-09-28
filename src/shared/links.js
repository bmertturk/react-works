const links = [
	{
		path: "/",
		title: "Home"
	},
	{
		path: "/about",
		title: "About"
	},
	{
		path: "/contact",
		title: "Contact",
		children: [
			{
				path: "/contact/map",
				title: "Map"
			}
		]
	}
];

export default links