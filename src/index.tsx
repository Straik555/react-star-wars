import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from '~/App'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from '~store'
import { ToastMessage } from '~components'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
	<Provider store={store}>
		<PersistGate persistor={persistor}>
			<ToastMessage />
			<App />
		</PersistGate>
	</Provider>
)
