import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {withLDProvider} from 'launchdarkly-react-client-sdk'
import {v4 as uuid} from 'uuid'
import {browserName, osName} from 'react-device-detect'

let sessionData;
fetch('/session-data')
.then(response => 
response.json())
.then(data => {
sessionData = data;
})

console.log(sessionData)

// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = withLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
	context: {
		"kind": "multi",
    "session": {
      key: uuid(),
      name: "Session Information",
      city: sessionData[1],
      timezone: sessionData[3],
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
