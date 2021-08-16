import React, { PureComponent } from "react"
import sendRequest from "@/util/axios"

export default class App extends PureComponent<{}, {}> {
    componentDidMount() {
        sendRequest("//localhost:8080/username/{username}/name/{name}", { isParams: { username: '111', name: 'yc' } });
    }

    render() {
        return <span>hello react1</span>
    }
}
