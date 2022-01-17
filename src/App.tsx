import React, { PureComponent } from "react"
import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import sendRequest from "@/util/axios"
import Login from "@/pages/Login"

export default class App extends PureComponent<{}, {}> {
    componentDidMount() {
        sendRequest("//localhost:8080/username/{username}/name/{name}", { isParams: { username: '111', name: 'yc' } });
    }

    render() {
        return <BrowserRouter>
            <div>
                <h1>Welcome to React Router!</h1>
                <Routes>
                    <Route path="/" element={<Login />} />
                </Routes>
            </div >
        </BrowserRouter>

    }
}
