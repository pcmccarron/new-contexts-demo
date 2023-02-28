import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {withLDProvider} from 'launchdarkly-react-client-sdk'
import {v4 as uuid} from 'uuid'
import {browserName, osName} from 'react-device-detect'

//get location data
/*async function getCity() {
  await fetch('/session-data')
  .then(response => response.json()
  .then(data => {
  city = data.city;
  console.log(city);
  return city;
  }))
}
getCity(); */

function getCity() {
  return new Promise((resolve, reject) => {
    fetch('/session-data')
    .then(response => {
      return response.json();
    }).then(data => {
      let city = data.city;
      resolve(city);
    })
  })
}

let city = '';
getCity().then(data => {city = data.city});
console.log(city);

/* async function getTimezone() {
  await fetch('/session-data')
  .then(response => response.json()
  .then(data => {
  timezone = data.timezone;
  console.log(timezone);
  return timezone;
  }))
}
getTimezone(); */

function getTimezone() {
  return new Promise((resolve, reject) => {
    fetch('/session-data')
    .then(response => {
      return response.json();
    }).then(data => {
      let timezone = data.timezone;
      resolve(timezone);
    })
  })
}

let timezone = '';
getTimezone().then(data => {timezone = data.timezone});
console.log(timezone);

// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = withLDProvider({
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
})(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LDProvider />
  </React.StrictMode>,
);