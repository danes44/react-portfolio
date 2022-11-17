import '../App.css';


function Header() {
  return (
    <header className="App-header p-5 relative">
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
        <p className='Greets text-8xl relative'>
          Hello!
          <p className='Desc absolute text-base -bottom-14 -right-14 text-left'>
            i’m <b>danes</b>, a graphic designer <br/>and a frontend developer.
          </p>
        </p>
      </div>
    </header>
  );
}

export default Header;
