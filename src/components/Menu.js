import { Link } from "react-router-dom";

const Menu = ({ item }) => {

	const subMenus = item.children?.map((item, index) =>
		<Link to={item.path} key={index}>{item.title}</Link>
	);

	return (
		<li>
			<Link to={item.path}>{item.title}</Link>
			{subMenus && <ul>{subMenus}</ul>}
		</li>
	)
}

export default Menu