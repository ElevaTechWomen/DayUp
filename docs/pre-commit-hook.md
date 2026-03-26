# Configuración de Husky y lint-staged para pre-commit hook

1. Instalar dependencias necesarias
```bash
npm install --save-dev husky lint-staged
```

2. Inicializar Husky
```bash
npx husky install
```

3. Agregar el hook pre-commit y abre o crea el archivo .husky/pre-commit, puede estar vacio, allí debes agregar el siguiente código:
```bash
npx lint-staged
```
Nota: Husky v9 ya no requiere cargar el script interno de husky.sh, por lo que solo es necesario agregar el comando npx lint-staged para ejecutar lint-staged antes de completar el commit.

4. Verificar que el archivo tiene permisos de ejecución, corre el siguiente comando en la terminal:
```bash
chmod +x .husky/pre-commit
``` 

5. Configurar lint-staged en el package.json
```json
"lint-staged": {
  "*.{js,jsx,ts,tsx,json,css}": [
    "prettier --write",
    "eslint --fix"
  ]
}
```

6. Actualizatr `eslint.config.js`
Nota: Como estamos usando  ESLint v9 el archivo queda de la siguiente manera:
```javascript
// https://docs.expo.dev/guides/using-eslint/
const { defineConfig } = require('eslint/config');
const expoConfig = require('eslint-config-expo/flat');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = defineConfig([
  expoConfig,
  {
    ignores: ['dist/*'],
  },
  {
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      'indent': ['error', 2], // Indentación de 2 espacios
      'react/jsx-indent': ['error', 2], // Indentación de JSX de 2 espacios
      'quotes': ['error', 'single', { avoidEscape: true }], // Uso de comillas simples, pero permite comillas dobles para evitar escapar
      'semi': ['error', 'always'], // Requiere punto y coma al final de las declaraciones
      'no-trailing-spaces': ['error'], // Prohíbe espacios en blanco al final de las líneas
      'eol-last': ['error', 'always'], // Requiere una nueva línea al final de los archivos
      'no-console': ['warn'], // Advierte sobre el uso de console.log
      '@typescript-eslint/no-unused-vars': ['error'], // Prohíbe variables no utilizadas en TypeScript
    },
  },
]);
```

7. Probar el pre-commit hook con un archivo de prueba `test-lint.ts` e intentar hacer commit, el hook debería corregir automáticamente los errores de formato y mostrar un error si hay variables no utilizadas.
```typescript
import { useState } from "react" 
const unusedVariable = 'This variable is not used'; 
console.log('Hello, world!');

export default function Test(){
    return null
}
```
