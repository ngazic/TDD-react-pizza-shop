# React pizza shop ordering app

This is Test Driven Development (TDD) approach which implements Behavior Driven Development (BDD) in simple pizza ordering react application. 

## Description

This simple demonstration app contains:
1. State management using 'react-redux'
2. Testing framework used is Jest with Enzyme utility 
3. Routing implemented using 'react-router-dom'
4. Global event bus could be implemented using some libraryes (e.i. [mitt](https://github.com/developit/mitt)), but I decided for simple custom implementation of Pub/Sub pattern using one global eventBus object
5. Created global object "scrollLock" for handling body scroll lock for disabling scrolling when modals are opened. The same object implements logic for clearing body styles on resize event.
6. Styles and theme taken from [Demo pizza theme](http://www.templatemonsterpreview.com/demo/78480.html?_ga=2.215933651.536897203.1595899832-1079675168.1595899832)

## Development

```
npm install
npm start #for starting the app in the browser
npm run test #for running test in CLI
```
#### Configuring package.json scripts to build on Netlify and to run tests using Enzyme
```
...
 "scripts": {
    ...
    "build": "CI= react-scripts build",
    "test": "react-scripts test --setupFiles ./src/setupTests.js",
    ...
  },
  ....
```
### Serving 
```
serve -s build
```
### Live version 
[LINK](https://react-pizza.netlify.app)

### Third party libraries

```
npm install --save-dev enzyme enzyme-adapter-react-16 enzyme-to-json # Adding Enzyme utility for TDD 
npm i react-select # For custom select elements
npm install prettier -D --save-exact # VS code formetter 
npm install body-scroll-lock # for preventing scrooling of elements
npm i react-responsive-carousel # Simple react carousel component
```

## TODOS / Project ideas:

1. Implement Home, Contact, About Us , Sign In / Up pages
2. Mock data are simple js object, fetch data via REST API.
3. Implement tests  (or replicate existing project using test driven development)
4. Implement existing app in React Native
5. Clean CSS (currently using some old theme css, can be written much cleaner)
6. ...