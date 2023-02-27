import React, {useState, useEffect} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {withLDProvider} from 'launchdarkly-react-client-sdk'
import {v4 as uuid} from 'uuid'
import {browserName, osName} from 'react-device-detect'

//get location data
function getCity() { 
const [city, setCity] = React.useState("");
useEffect(() => {
  fetch('/session-data')
  .then(response => response.text()
  .then(data => {
  setCity(data.city);
  }))
})
}

function getTimezone() {
  const [timezone, setTimezone] = React.useState("");
  useEffect(() => {
  fetch('/session-data')
  .then(response => response.text()
  .then(data => {
  setTimezone(data.timezone);
  }))
})
}

// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = withLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
	context: {
		"kind": "multi",
    "session": {
      key: uuid(),
      name: "Session Information",
      city: getCity(),
      timezone: getTimezone(),
    },
    "device": {
      key: uuid(),
      name: "User Device Information",
      browser: browserName,
      device: osName,
    },
    "account": {
      key: uuid(),
      name: "User Account Information",
      description: "a randomly generated account number"
    }
	}
})(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LDProvider />
  </React.StrictMode>,
);
