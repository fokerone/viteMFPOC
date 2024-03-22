// Imports de los MF
import Dashboard from 'app-dashboard/Dashboard';
import Menu from 'app-menu/Menu';
import Pagos from 'app-pagos/Pagos'

function App() {
  return (
    <>
    <div className='menuView'>
    <Menu/>
    </div>
    <div className='dash'>
    <Dashboard/>
    </div>
    <Pagos/>
    </>
  )
}

export default App;