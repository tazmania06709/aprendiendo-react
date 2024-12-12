# Prueba tecnica para Juniors y Trainees de React en Live Coding

APIs:

- Facts Random: https:// catfact.ninja/fact   MD834/no-bare-urls: Bare URL used 
- Imagen random: https://cataas.com/cat/says/hello    MD034/no-bare-urls: Bare URL used


Recupera un hecho aleatorio de gatos y muestra una imagen de un gato con la primera pala del hecho.



Empezar un proyecto de desde cero en react para ver pto entrada de tu App 
1 - npm create vite@latest
2 - nombre proyecto
3 - Escoger Vanilla // Esto es en caso que no te dejen usan como punto de entrada React con js-wsc
Instalar 2 dependencias
4 - npm install @vitejs/plugin-react -E  // Si te deja la empresa de la entrevista
5 - npm install react react-dom -E
6 - crear configuracion de vite  un file con name vite.config.js
Dentro hacemos esto
import { defineConfig } from "vite"
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()]
})
7- Borrar todo el contenido del main.js que se llama en index.html
poner esto:

import { createRoot } from 'react-dom/client'

const root = createRoot(document.getElementById('app'))
 
root.render(<h1>Hello, World!</h1>)
8 - En el index.html vemos que dentro del <div> vamos a renderizar la app
9 - Al ejecutar npm run dev da error por que main.js no es jsx, esto implica cambiar la extension de main a jsx y modificar el nombre en index.html
10 - Despues de correr proyecto instalar npm install standard -D, para add en el package.json
al final: 
}, 
"eslintConfig": {
   "extends": "/node_modules/standard/eslintrc.json"
  }
}
11 - 





