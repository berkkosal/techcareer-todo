import React, { Component } from 'react'
import Main from './component/Main';
import { Navigate, Route, Routes } from 'react-router';
import { withTranslation } from 'react-i18next';

//Todo
import ListTodo from './component/todo/ListTodo'
import FilterTodo from './component/todo/FilterTodo'
import CreateTodo from './component/todo/CreateTodo'
import UpdateTodo from './component/todo/UpdateTodo'
import ViewTodo from './component/todo/ViewTodo';

class TodoRouter extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        return (
            <>
                <div className='container'>
                    <Routes>
                        <Route path='/' element={<Main />} />


                        <Route path='/todo/create' element={<CreateTodo />} />
                        <Route path='/todo/update/:id' element={<UpdateTodo />} />
                        <Route path='/todo/list' element={<ListTodo />} />
                        <Route path='/todo/view/:id' element={<ViewTodo />} />

                        <Route path='*' element={<Navigate to='/' />} />

                    </Routes>
                </div>
            </>
        )
    }
}

export default withTranslation()(TodoRouter);
