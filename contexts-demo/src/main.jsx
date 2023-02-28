import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {asyncWithLDProvider} from 'launchdarkly-react-client-sdk'
import {v4 as uuid} from 'uuid'
import {browserName, osName} from 'react-device-detect'

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



// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = asyncWithLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
	context: {
		"kind": "multi",
    "session": {
      key: uuid(),
      name: "Session Information",
      city: city,
      timezone: timezone,
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
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LDProvider>
    </LDProvider>
  </React.StrictMode>,
);
})(App);