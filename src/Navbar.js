function Navbar() {
  return (
    <div className="Navbar">
    	<nav className="navbar">
	      <img src="logo1.png" height="100" width="170"/>
	      <div className="links">
	        <a href="/">Capsules</a>
	        <a href="/create" style={{ 
	          color: 'white', 
	          backgroundColor: '#4f4a98',
	          borderRadius: '8px' 
	        }}>Dragons</a>
	      </div>
	    </nav>
    </div>
  );
}

export default Navbar;
