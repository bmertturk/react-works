import routes from "../shared/routes";
import Path from "../components/Path";

const Templates = () => {

	return (
		<div>
			{routes.map((item, index) => {
				return <Path item={item} key={index} component={item.component} />;
			})}
		</div>
	)
}

export default Templates
