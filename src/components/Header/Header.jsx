import Logo from './components/logo/Logo';
import Button from '../../common/Button/Button';
import './header.css';
import { BUTTON_LABEL_LOGOUT } from '../../constants';
export default Header;

function Header() {
	return (
		// <div className='header'>
		// 	<Logo className='logo' />
		// 	<h4 className='userName'>Sashin</h4>
		// 	<Button buttonText='Logout' onClick={() => alert('Hello world!')} />
		// </div>

		<nav className='navbar navbar-expand-lg bg-body-tertiary'>
			<div className='container'>
				<Logo />

				<div className='navbar' id='navbarSupportedContent'>
					<div className='container'>
						<div className='row'>
							<div className='col'>
								<label className='nav-item'>Courses</label>
							</div>

							<div className='col'>
								<label className='nav-item'>Sashin</label>
							</div>

							<div className='col'>
								<Button
									buttonText={BUTTON_LABEL_LOGOUT}
									btnLook='btn btn-outline-danger'
									onClick={() => alert('Logout!!')}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</nav>
	);
}
