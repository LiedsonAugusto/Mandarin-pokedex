import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CorpoProvider } from './Context/CorpoContext.jsx'
import { IdProvider } from './Context/IdContext.jsx'
import { CorDoMeioProvider } from './Context/CorDoMeioContext.jsx'
import { MeioAnimationProvider } from './Context/MeioAnimationContext.jsx'
import { LeftAnimationProvider } from './Context/LeftAnimationContext.jsx'
import { RightAnimationProvider } from './Context/RightAnimationContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <IdProvider>
      <CorpoProvider>
        <CorDoMeioProvider>
          <MeioAnimationProvider>
            <LeftAnimationProvider>
              <RightAnimationProvider>
                <App /> 
              </RightAnimationProvider>
            </LeftAnimationProvider>
          </MeioAnimationProvider>
        </CorDoMeioProvider>
      </CorpoProvider>
    </IdProvider>
  </>
)