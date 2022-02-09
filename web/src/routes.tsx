//ROUTES

//IMPORTING
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import TeacherList from './pages/TeacherList';
import TeacherForm from './pages/TeacherForm';
import About from './pages/About';

//ROUTES FUNCTION
function Routes(){
    return(
        <BrowserRouter>
            <Route path= '/' exact component={Landing} />
            <Route path= '/study' component={TeacherList} />
            <Route path= '/give-classes' component={TeacherForm} />
            <Route path= '/about' component={About} />
        </BrowserRouter>
    );
}

export default Routes;
