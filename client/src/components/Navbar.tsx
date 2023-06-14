import '../style/Navbar.css'

export interface IAppProps {
}

export function Navbar () {
  return (
    <div className='navbar-container'>
      <div className='logo-container'>
        <p>STOCK APP</p>
      </div>
    </div>
  );
}
