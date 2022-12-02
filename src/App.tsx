import './i18n'
import Header from './components/header/Header'
import { Toggle } from './themes/Toggle'
import { useDarkMode } from './themes/useDarkMode'
import { GlobalStyles, lightTheme, darkTheme } from './themes/globalStyles'
import { ThemeProvider } from 'styled-components'
import useAuth from './hooks/useAuth'
import './assets/sass/global/global.scss'
import { appThemes } from './utils/constants'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import Routes from './route/Routes'

const App = () => {
  useAuth()
  const [theme, toggleTheme] = useDarkMode()
  const themeMode = theme === appThemes.LIGHT_THEME ? lightTheme : darkTheme
  return (
    <ThemeProvider theme={themeMode}>
      {window.location.pathname != '/invoices' ? (
        <Header toggleTheme={toggleTheme} />
      ) : null}
      {/* <Header toggleTheme={toggleTheme} /> */}
      <GlobalStyles />
      <Routes toggleTheme={toggleTheme}/>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <ToastContainer />
    </ThemeProvider>
  )
}

export default App
