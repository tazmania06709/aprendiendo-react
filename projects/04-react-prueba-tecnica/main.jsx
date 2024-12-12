import { createRoot } from 'react-dom/client'
import { App } from './src/App.jsx'


const root = createRoot(document.getElementById('app'))
// root.render(<h1>hello world!!!</h1>)
root.render(<App />)
