import { useState } from 'react';
import { Fab } from '@mui/material';
import Menus from "./Menus";
import MenuIcon from '@mui/icons-material/Menu';

const Sidebar = () => {

	const [closeState, isCloseState] = useState(false);

	function toggleDrawer() {
		isCloseState(!closeState);
	}

	return (
		<aside className={closeState ? 'closed' : 'opened'}>
			<Fab size="medium" color="primary" aria-label="toggle" onClick={toggleDrawer}>
				<MenuIcon />
			</Fab>
			<Menus />
		</aside>
	)
}

export default Sidebar