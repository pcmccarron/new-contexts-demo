import { useEffect, useState } from 'react'
import './App.css'
import MasonryImageList from './components/Image-gallery'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useFlags } from 'launchdarkly-react-client-sdk'
import { Box } from '@mui/system'

function App() {
  // location information for use in App
  const [city, setCity] = useState("")
  const [timezone, setTimezone] = useState("")
  const [country, setCountry] = useState("")
  const [subdivision, setSubdivision] = useState("")

  //gather flag data
  const {background, dateFormat} = useFlags();
  console.log(dateFormat)

  useEffect(() => { 
		fetch('/session-data')
		.then(response => 
			response.json()) 
		.then(data => {
			setCity(data.city),
      setTimezone(data.timezone),
      setCountry(data.country.code),
      setSubdivision(data.subdivision.name)
    }
		)}, [])

    // custom theming
    const theme = createTheme({
    palette: {
      mode: 'dark',
    },
    components: {
		MuiCssBaseline: {
			styleOverrides: {
			body: {
          backgroundImage: `${background}`,
			},
    },
	},
	}
})

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
    <Box sx={{ width: 900, height: 150 }} >
    <img 
      src="./ld-logo.png"
      style={{width: 800}}
    />
    </Box>
    <div className="App">
      <h1>Thanks for joining us from <strong>{city}</strong>!</h1>
      <div>
        <MasonryImageList />
      </div>
      <p> Looks like you're in the <strong>{timezone}</strong> timezone</p>
      <img src ={`https://flagcdn.com/96x72/${country.toLowerCase()}.png`} className="geolocation__flag" alt={`${country}`} />
      </div>
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
