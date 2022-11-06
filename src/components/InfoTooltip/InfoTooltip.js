import './InfoTooltip.css';

function InfoTooltip({ children, isOpen, onClose }) {
	function handleCloseInfoTooltip(event) {
		if (event.target === event.currentTarget) {
			onClose();
		}
	}
	
	return (
		<div className={`infotooltip ${isOpen ? 'infotooltip_opened' : ''}`}
			onMouseDown={handleCloseInfoTooltip}>
			<div className='infotooltip__container'>
				<button 
					type='button' 
					className='infotooltip__close'
					aria-label='Закрыть сообщение' 
					onClick={() => onClose()}/>
				<h2 className='infotooltip__message'>{children}</h2>
			</div>
		</div>
	);
}

export default InfoTooltip;