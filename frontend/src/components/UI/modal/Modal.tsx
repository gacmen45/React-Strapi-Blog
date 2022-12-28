import { Fragment, } from 'react'
import  ReactDOM  from 'react-dom'
import styles from './Modal.module.scss'

const Backdrop = props => {
	return <div className={styles.backdrop} onClick={props.hideCartModalHandler}/>
}

const ModalOverlay = props => {
	return (
		<div className={styles.modal}>
			<div className={styles.content}>{props.children}</div>
		</div>
	)
}

const portalElement = document.getElementById('overlays')
const Modal = (props) => {

   return <Fragment>
    {ReactDOM.createPortal(<Backdrop hideCartModalHandler={props.hideCartModalHandler}/>, portalElement)}
    {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
   </Fragment>
}

export default Modal