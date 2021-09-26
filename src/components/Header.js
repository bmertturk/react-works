import links from "../shared/links";
import Menu from './Menu';
import { Container } from '@mui/material';

const Header = () => {
	return (
		<header>
			<Container>
				{links.map((item, index) => {
					return <Menu item={item} key={index} />;
				})}
			</Container>
		</header>
	)
}

export default Header
