import { useGames } from '../../hooks/useGames'
import FilterListItems from '../../components/filter-list/FilterList'
import Card from '../../components/UI/card/Card'
import styles from './GameList.module.scss'
import { Link } from 'react-router-dom'
import Modal from '../UI/modal/Modal'

const Test = (props) => {
	const { loading, error, data } = useGames()

	if (loading) return <p>loading...</p>
	if (error) return <p>error...</p>

	const allItems = data.games.data
	const title = 'Bilbioteka Gier:'
	const direction = 'game'

	return (<Modal onHideModal={props.onHideModal}>
        <button onClick={props.onHideModal}>x</button>
		<FilterListItems title={title} allItems={allItems} direction={direction} onHideModal={props.onHideModal} />
        </Modal>
	)
}
export default Test
