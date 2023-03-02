import { useEffect, useState } from 'react'
import './App.css'
import MasonryImageList from './components/Image-gallery'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { useFlags } from 'launchdarkly-react-client-sdk'
import { Box } from '@mui/system'
import Clock from './components/Clocks'
import { Button, Typography } from '@mui/material'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Grid from '@mui/material/Grid'

function App() {
  // location information for use in App
  const [city, setCity] = useState("")
  const [timezone, setTimezone] = useState("")
  const [country, setCountry] = useState("")
  const [subdivision, setSubdivision] = useState("")

  //gather flag data
  const {background, dateFormat, clockFormat, browserType} = useFlags();
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
      mode: 'dark'
      },
    typography: {
      poster: {
        fontSize: '4rem',
        textDecoration: 'underline',
      },
      poster_2: {
        fontSize: 24,
        textDecoration: 'underline',
      },
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

// Card themeing
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

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
      <div>
        <MasonryImageList />
      </div>
      <Typography variant="h2">Thanks for joining us from <Typography variant="poster" sx={{ fontWeight: 'bold'}}> {city}</Typography></Typography>
      <Clock/>
      <Typography variant="poster_2" sx={{ fontWeight: 'bold'}}>{timezone} timezone</Typography>
      </div>
      <img src ={`https://flagcdn.com/64x48/${country.toLowerCase()}.png`} className="geolocation__flag" alt={`${country}`} style={{paddingTop: 15, paddingBottom: 50}} />
      <div>
        <Typography variant="h3" sx={{paddingBottom: 5}}>Learn more about LaunchDarkly SDKs</Typography>
      </div>
      { browserType ?
      <Grid container spacing={3}>
        <Grid item xs>
      <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        image="./go-logo.png"
        alt="Go SDK"
        sx={{maxHeight: 100, objectFit: 'contain', paddingBottom: 3 }}
      />
        <Typography variant="h5" component="div">
          GO SDK
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          server-side
        </Typography>
        <Button variant="text" href="https://docs.launchdarkly.com/sdk/server-side/go">Read Docs</Button>
      </CardContent>
      </Card>
      </Grid>
      <Grid item xs>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        image="./python-logo.png"
        alt="Python Logo"
        sx={{maxHeight: 100, objectFit: 'scale-down', paddingBottom: 3 }}
      />
        <Typography variant="h5" component="div">
          Python SDK
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          server-side
        </Typography>
        <Button variant="text" href="https://docs.launchdarkly.com/sdk/server-side/python">Read Docs</Button>
      </CardContent>
    </Card>
      </Grid>
      <Grid item xs>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        image="./node-logo.png"
        alt="NodeJS server"
        sx={{maxHeight: 100, objectFit: "scale-down", paddingBottom: 3 }}
      />
        <Typography variant="h5" component="div">
          NodeJS SDK
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          server-side
        </Typography>
        <Button variant="text" href="https://docs.launchdarkly.com/sdk/server-side/node-js">Read Docs</Button>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      : 
        <Grid container spacing={3}>
        <Grid item xs>
      <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        image="./react-logo.png"
        alt="React SDK"
        sx={{maxHeight: 100, objectFit: 'contain', paddingBottom: 3 }}
      />
        <Typography variant="h5" component="div">
          React SDK
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          client-side
        </Typography>
        <Button variant="text" href="https://docs.launchdarkly.com/sdk/client-side/react">Read Docs</Button>
      </CardContent>
      </Card>
      </Grid>
      <Grid item xs>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        image="./ios-logo.png"
        alt="iOS Logo"
        sx={{maxHeight: 100, objectFit: 'scale-down', paddingBottom: 3 }}
      />
        <Typography variant="h5" component="div">
          iOS SDK
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          client-side
        </Typography>
        <Button variant="text" href="https://docs.launchdarkly.com/sdk/client-side/ios">Read Docs</Button>
      </CardContent>
    </Card>
      </Grid>
      <Grid item xs>
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <CardMedia
        component="img"
        image="./js-logo.png"
        alt="JS server"
        sx={{maxHeight: 100, objectFit: "scale-down", paddingBottom: 3 }}
      />
        <Typography variant="h5" component="div">
          JavaScript SDK
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          client-side
        </Typography>
        <Button variant="text" href="https://docs.launchdarkly.com/sdk/client-side/javascript">Read Docs</Button>
      </CardContent>
    </Card>
      </Grid>
      </Grid>
      }
      </CssBaseline>
    </ThemeProvider>
  )
}

export default App
