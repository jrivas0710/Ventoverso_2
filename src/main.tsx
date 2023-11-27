import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ThemeConfig } from './config/theme.config.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/store.ts'


declare module 'yup' {
  interface StringSchema<TType, TContext, TDefault, TFlags> {
    append(appendStr: string): this;
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  //<React.StrictMode>
    <Provider store={store}>
      <ThemeConfig>
        <App />
      </ThemeConfig>
    </Provider>
 // </React.StrictMode>,

)
