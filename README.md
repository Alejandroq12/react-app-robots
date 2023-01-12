
Tutorial for React

To run the project: 
1. Clone this repo
2. Run `npm install`
3. Run `npm start`

This is a codebase for a web application that is built with React, a JavaScript library for building user interfaces. It uses ReactDOM to render the application to the DOM, and also uses the 'tachyons' library to style the application. The code imports a few different components, including App, CardList, SearchBox and Scroll, which are  custom components for this application. The code also imports a JSON data file, which is used to populate an array of "robots" that is used to display data in the CardList component. The App component uses the state to handle the searchfield and filteredRobots. It uses a lifecycle method componentDidMount() to fetch the users data from a remote API and then updates the state with the data. The application renders a search bar and a list of "robots" that can be filtered by name using the search bar.

The technology stack for this application includes:

* React: a JavaScript library for building user interfaces.
* ReactDOM: a package that provides a set of React-specific methods for interacting with the DOM.
* JavaScript: a programming language used for implementing the logic of the application.
* HTML/CSS: used for structuring and styling the application.
* Tachyons: a CSS library for rapidly building fast-loading and highly readable websites.
* JSON: used as data format for the robots in the application.
* The application is also making a request to a remote API (https://jsonplaceholder.typicode.com) that is returning a JSON data.
