## React & Typescript Demo

This project is a fairly basic implementation of Dijkstra's algorithm for finding the shortest route from one point to another in a map that contains a list of nodes and edges. 

The implementation that I have used is the weighted Shortest Path First (SPF) algorithm that essentially works by looking for the node that is the shortest distance away from the startpoint, moving to that point and then repeating the process until the route end condition is met.

From inspection the obvious issue with using this version of the algorithm is that while it returns the shortest distance between nodes it may not actually return the shortest route between two points for a given map. Given this example https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm#/media/File:Dijkstra_Animation.gif, if you wanted the shortest route from point 2 -> 3 on the basis of the SPF algorithm the shortest path would be returned as 2 -> 1 ->3 which is clearly incorrect (the correct answer would be 2 -> 3 direct).

The alternative to using the SPF method is to build an application that finds all the possible routes for a given map and set of start and endpoints, then checks through all the possible routes for the shortest one.

## Running the app

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`

Install the project and it's dependencies

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
