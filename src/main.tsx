import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import App from './App.tsx'
import { Provider } from 'react-redux'
import { persistor, store } from './redux/store.ts'
import { RouterProvider } from 'react-router'
import routes from './routes/route.tsx'
import { ThemeProvider } from './providers/theme-provider.tsx'
import { PersistGate } from 'redux-persist/integration/react'
 

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider>
     <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    
    <RouterProvider router={routes}/>
      </PersistGate>
      </Provider>
      </ThemeProvider>
  </StrictMode>,
)
