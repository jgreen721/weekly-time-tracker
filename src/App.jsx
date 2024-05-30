import { SplashScreen,MainCard,ThemePicker,Footer } from './components'
import './App.css'
import { useAppContext } from '../appcontext'

function App() {
  const {theme,loaded} = useAppContext();
  return (
    <div data-theme={theme} className="app">
       <div className="app-content">
             <SplashScreen/>
                <MainCard/>
                <ThemePicker/>
              <Footer/>
        </div>
    </div>
  )
}

export default App
