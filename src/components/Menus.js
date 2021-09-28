import links from "../shared/links";
import Menu from "./Menu";

const Menus = () => {
	return (
		<ul>
			{links.map((item, index) => {
				return <Menu item={item} key={index} />;
			})}
		</ul>
	)
}

export default Menus
