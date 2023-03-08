import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {asyncWithLDProvider} from 'launchdarkly-react-client-sdk'
import {v4 as uuid} from 'uuid'
import {browserName, isMobile, osName} from 'react-device-detect'

(async () => {
//get location data
async function getCity() {
  const res = await fetch('/session-data')
  const data = await res.json()
  console.log(data.city);
  return data.city
}

let city = await getCity();

async function getTimezone() {
  const res = await fetch('/session-data')
  const data = await res.json()
  console.log(data.timezone)
  return data.timezone
}

let timezone = await getTimezone();

async function getSubdivision() {
  const res = await fetch('/session-data')
  const data = await res.json()
  console.log(data.subdivision.name)
  return data.subdivision.name
}

let state = await getSubdivision();



// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = await asyncWithLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
	context: {
		"kind": "multi",
    "session": {
      key: "session-data",
      name: "Session Information",
      city: city,
      timezone: timezone,
      state: state
    },
    "device": {
      key: uuid(),
      name: "User Device Information",
      browser: browserName,
      device: osName,
      isMobile: isMobile
    },
    "account": {
      key: uuid(),
      name: "User Account Information",
      description: "a randomly generated account number"
    }
	}
})

ReactDOM.createRoot(document.querySelector('#root')).render(
  <React.StrictMode>
    <LDProvider>
      <App />
    </LDProvider>
  </React.StrictMode>,
);
})();