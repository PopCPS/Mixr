import React from 'react'
import ReactDOM from 'react-dom/client'
import { Index } from './index.tsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './store/store.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Index />
        </Provider>
    </React.StrictMode>
)
