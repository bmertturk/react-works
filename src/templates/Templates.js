import routes from "../shared/routes";
import Path from "../components/Path";

const Templates = () => {

	return (
		<section>
			{routes.map((item, index) => {
				return <Path item={item} key={index} component={item.component} />;
			})}
		</section>
	)
}

export default Templates
