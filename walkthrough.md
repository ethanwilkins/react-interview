# Walkthrough

The following is a walkthrough of my project submission.

## Libraries used:

PropTypes - To ensure scalability and maintainability. Makes collaboration easier when other developers know exactly what props and what types a component needs.

Axios - To make it more straightforward to handle errors and to be able to directly access the result inside the response object data property, where fetch involves dealing with 2 promises.

CORS - Middleware to enable cross origin resource sharing. Calls made with fetch or axios won't go through to the backend without it.

Bootstrap - Lightweight, customizable, and helps you build responsive and mobile friendly wesbites quickly.

Mapbox GL - Open source alternative to Google Maps that is cheaper and allows you to create custom maps that better fit the look of your website.

React CSV to HTML Table - To make displaying a CSV file as a table as simple as possible. Works with Bootstrap via the `tableClassName` prop.

## Decisions made:

Use functional components with React Hooks - Functional components produce less code, can help with performance, are easier to read and test, and help maintain best practices. Hooks allow you to decide how tightly or loosely coupled the lifecycle methods are.

MapboxGLMap component - To encapsulate all of the logic required to render a Mapbox GL map with all of the Lowe's store locations displayed as markers. This includes providing an API key, custom map link, center point, zoom, and iterating through an array (ensured through PropTypes) of store locations.

fetchData() method for call to backend - To ensure that the logic for retrieving data from the backend at page load is made separate from any other logic that might need to happen at page load (within `useEffect`) moving forward.

CSS in JS - Lets you think and design styles in the component level, leveraging the principle of modularity. CSS modules weren't necessary for the scope of this project so styling was kept minimal.