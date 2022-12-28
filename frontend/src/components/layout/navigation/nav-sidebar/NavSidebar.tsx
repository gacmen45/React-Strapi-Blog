import NavItems from '../nav-items/NavItems'
import Social from '../../social/Social'

import styles from './NavSidebar.module.scss'

interface Props {
	mobileNav: boolean
}


const NavSidebar = (props: Props) => {
	return (
		<div className={`${styles.sidebar} ${props.mobileNav ? styles.active : ''}`}>
			<NavItems matches={false} onShowGameList={props.onShowGameList} onShowTagFilter={props.onShowTagFilter} />
			<Social className={''}/>
		</div>
	)
}

export default NavSidebar
