import { SplashScreen,MainCard,ThemePicker } from './components'
import './App.css'
import { useAppContext } from '../appcontext'

function App() {
  const {theme,loaded} = useAppContext();
  return (
    <div data-theme={theme} className="app">
       <div className="app-content">
             <SplashScreen/>
              <ThemePicker/>
              <MainCard/>
        </div>
    </div>
  )
}

export default App
