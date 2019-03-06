# react-boilerplate
A custom-made boilerplate to kickstart my react projects

## Notes regarding packages

### RXJS error

Rxjs is locked at version 6.3.3 due to below error:

ERROR in [at-loader] ./node_modules/rxjs/internal/Notification.d.ts:3:27
    TS1209: Ambient const enums are not allowed when the '--isolatedModules' flag is provided.

See: https://github.com/ReactiveX/rxjs/issues/4538

### Investigate

When JSX code generation is 'preserve', we get the below error:

ERROR in ./src/index.tsx 6:7
Module parse failed: Unexpected token (6:7)
You may need an appropriate loader to handle this file type.
| import './scss/style.scss';
| import App from './components/App';
> render(<App />, document.querySelector('#root'));
|
 @ multi (webpack)-dev-server/client?http://localhost:3000 ./src/index.tsx main[1]

 Note: Makes sense after reading the docs, see first section of: https://www.typescriptlang.org/docs/handbook/jsx.html
