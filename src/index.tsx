import React from 'react'
import eruda from 'eruda'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import { WebviewType, AdaptivityProvider, ConfigProvider, IOS } from '@vkontakte/vkui'
import { App } from './App'

// import './assets/css/bootstrap.min.css'
// import './assets/css/slick-theme.css'
// import './assets/css/slick.css'

// import './assets/css/app.css'
// import './style.css'

const el = document.createElement('div')
document.body.appendChild(el)

// eruda.init({
//     container: el,
//     tool: [ 'console', 'elements' ]
// })
const ConfigProviderFix: any = ConfigProvider
const AdaptivityProviderFix: any = AdaptivityProvider

ReactDOM.render(
    <BrowserRouter
        basename='/'
    >
        <React.StrictMode>
            <ConfigProviderFix
                appearance={'dark'}
                webviewType={WebviewType.INTERNAL}
                platform={IOS}
            >

                <AdaptivityProviderFix >
                    <App />
                </AdaptivityProviderFix>
            </ConfigProviderFix>
        </React.StrictMode>
    </BrowserRouter>,
    document.querySelector('#root')
)
