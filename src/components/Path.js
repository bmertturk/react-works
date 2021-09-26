import {Route, Switch} from "react-router-dom";

const Path = ({item}) => {

	return (
		<Switch>
			<Route exact path={item.path} component={item.component}/>
			{item.subRoutes?.map((item, index) =>
				<Route path={item.path} key={index} component={item.component} />
			)}
		</Switch>
	)
}

export default Path