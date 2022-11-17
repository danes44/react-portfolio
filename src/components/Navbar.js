import '../App.css';

function Navbar() {
  return (
    <div className="Navbar flex text-white items-center p-5 fixed min-w-full backdrop-blur-md">
      <a className="mr-auto font-bold text-xl" href="/" target="_self" rel="noopener noreferrer">Portfolio</a>
      <button className="font-bold text-xl">
        <i className="bi bi-list text-3xl"></i>
      </button>
    </div>
  );
}

export default Navbar;
