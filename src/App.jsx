import NavBar from './Components/NavBar/NavBar'
import Jobs from './Components/JobDiv/Jobs'
import Search from './Components/SearchDiv/Search'

const App = () => {
  return (
    <div className='w-[85%] m-auto bg-white'>
     <NavBar />
     <Search />
     <Jobs />
    </div>
  );
}

export default App