const Button = ({ buttonText, onClick, btnLook }) => {
	return (
		<>
			<button
				className={
					btnLook == null || btnLook === ''
						? 'btn btn-outline-primary'
						: btnLook
				}
				type='button'
				onClick={onClick}
			>
				{buttonText}
			</button>
		</>
	);
};

export default Button;
