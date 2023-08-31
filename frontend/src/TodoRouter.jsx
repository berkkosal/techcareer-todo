import React, { Component } from 'react'
import Main from './component/Main';
import { Route, Routes } from 'react-router';

export default class TodoRouter extends Component {

    constructor(props){
        super(props);
        this.state={}
    }



    render() {
        return (
            <>

            <Routes>
                <Route path='/' element={<Main/>}/>
            </Routes>
                <Main/>
            </>
        )
    }
}
