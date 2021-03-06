This project explores following aspects of React applications:
* Handling user input with forms and events with callback functions
* Communicating from child to parent components by passing callbacks as props
* Rendering lists using JavaScript map function and setting a key prop
* Making requests to a 3rd party API using axios
* Using the React Refs system to access the DOM via an eventListener
* Basic use of the Grid CSS system

All content and instructions came from the [Udemy Modern React with Redux course](https://www.udemy.com/react-redux/).

The application itself allows a user to search for images. Results are displayed in a CSS Grid.

This project relies on the [Unsplash Search Photos API](https://unsplash.com/documentation#search-photos) to query for public images. To use the app in the browser, you must:

1. [Create a developer account at Unsplash.com](https://unsplash.com/developers) 
2. Create a new application on the unsplash site. Doing so will provide you a secret access key that you can use to make authenticated requests to their API. 
3. Copy the .env file in the root of this project, rename it to .env.local, and set the value of REACT_APP_UNSPLASH_SECRET_ACCESS_KEY to your Unsplash secret access key.
4. Run `npm start` to start the application

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
