import React, { useState, useEffect } from 'react';
import { User } from './modeles/User';
import './contacts.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Liste from './composants/Liste';
import { loadList } from './Axios';

function App() {
  const [user, setUser] = useState(new User());
  const [list, setList] = useState([]);
  const url = 'https://jsonplaceholder.typicode.com/users'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await loadList(url);
        setList(data);
      } catch (error) {
        console.error('Error loading list:', error);
      }
    };

    fetchData();
  }, []);

  function selectUser(id) {
    setUser(list.find(u => u.id === id));
  }

  return (
    <div className="container-fluid pl-5 pr-5">
      <div className='row'>
        <div className='col-md-8'>
          <Liste liste={list} user={selectUser} />
        </div>
        <div className='col-md-4'>

        </div>
      </div>
    </div>
  );
}

export default App;

// This code is a React application that fetches a list of users from a URL using Axios, and then displays the list along with a detail view of the selected user. Let's break it down:

// 1.Imports:

// React: Imports the React library.
// - useState, useEffect: Hooks for managing state and side effects in React functional components.
// - User: Importing the User model from './models/User'.
// - './App.css': Imports a CSS file for styling the application.
// - 'bootstrap/dist/css/bootstrap.min.css': Imports Bootstrap CSS for styling.
// - Liste: Imports the Liste component from './components/Liste'.
// - loadList: Imports the loadList function from './Axios'.

// 2.Function Component App():

// - Sets up the App component using the useState hook to manage state.
// - Initializes state variables:
//  user: Stores the currently selected user, initialized with an empty User object.
//  list: Stores the list of users, initialized as an empty array.
// - Defines a constant url which holds the URL from which user data will be fetched.
// - Utilizes the useEffect hook to perform side effects in function components. In this case, it fetches the user list when the component mounts ([] as the dependency array indicates that this effect runs only once, similar to componentDidMount in class components).
// - Defines a function selectUser(id) which updates the user state with the user having the provided id.
// - Renders JSX: 
//  *A container div with Bootstrap classes.
//  *Inside the container, two columns (col-md-8 and col-md-4).
//  *The Liste component is rendered in the left column, passing the list state and the selectUser function as props.

// 3.Export:

// Exports the App component as the default export.

// Overall, this code sets up a React application that fetches a list of users from an API, displays the list, and allows users to select individual users to view more details about them.

















