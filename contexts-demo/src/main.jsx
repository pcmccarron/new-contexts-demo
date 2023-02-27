import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {withLDProvider} from 'launchdarkly-react-client-sdk'
import {v4 as uuid} from 'uuid'
import {browserName, osName} from 'react-device-detect'
import geo from '../netlify/edge-functions/geo'

// eslint-disable-next-line @typescript-eslint/naming-convention
const LDProvider = withLDProvider({
	// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/naming-convention
	clientSideID: import.meta.env.VITE_CLIENT_ID,
	context: {
		"kind": "multi",
    "session": {
      key: uuid(),
      city: fetch('/session-data')
           .then(response => 
           response.text(city)
           ),
      timezone: fetch('/session-data')
                .then(response =>
                  response.json(timezone)
                ),
    },
    "user": {
      key: uuid(),
      browser: browserName,
      device: osName,
    },
    "account": {
      key: uuid(),
      description: "a randomly generated account number"
    }
	}
})(App);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LDProvider />
  </React.StrictMode>,
);
