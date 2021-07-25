## Weather Agent

Goal: To build a single page application, which shows the current weather of the city the user has looked up.

## Deployed application
Link: https://weather-agent-d225f.web.app/

## User Scenarios

1. This react application allows the user to enter the city name and serach for the current weather
2. Once the user enters the city name, after clicking the icon button. It searches for the data from the https://openweathermap.org/api  API.
3. Once it searches for data successfully, it adds the data into the Redux (state management) which can be used and pass into other components.
4. The data is fetched from the Redux, via the useSelector Hook. Hence, it is shown on the actial search page
5. Even the user is allowed to add the current city with weather details on the Favourite page which enlists the whole list. 
6. User can redirect to the Favoruite Page via (Sow to your) button. It allows user to views the list of the added cities. 
7. User is given the authority to remove the particular city if not needed.
8.  Finally, The application was made responsive and workable on all browsers.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
