import React from "react";
import { EventLog } from "./EventLog";

/*
  This toolbar contains the Appcues javacript API calls useful for debugging and testing
*/


const resetAppcues = () => { // resets the session and removes user information from local storage
    window.Appcues.reset();
    window.localStorage.removeItem("currentUser");
    window.localStorage.removeItem("timestamp");
}

const clearShow = () => {
    window.Appcues.clearShow();
}

const anonymousUser = () => {
    window.Appcues.anonymous();
}

const showFlow = () => {
  const flowId = document.getElementById("show-flow");
  window.Appcues.show(flowId.value);
  flowId.value = '';
}

const openDebugger = () => {
    window.Appcues.debug();
}

const Toolbar = () => {
    return (
        <div id="toolbar">
            <h5>The Appcues Toolbox</h5>
            <ul>
            <li>
                <p class="fs-6">Enter ID and click "Appcues.show" to launch Appcues content</p>
                <input placeholder="-AbCdEf-12345" id="show-flow" type="text"/>
                <button class="btn btn-primary" onClick={showFlow}>Appcues.show()</button>
            </li>
            <li><button class="btn btn-primary" onClick={clearShow}>Appcues.clear()</button></li>
            <li><button class="btn btn-primary" onClick={anonymousUser}>Appcues.anonymous()</button></li>
            <li><button class="btn btn-primary" onClick={openDebugger}>Appcues.debug()</button></li>
            <li><button class="btn btn-primary" onClick={resetAppcues}>Appcues.reset()</button></li>
            </ul>
            <EventLog />
        </div>
    )
}

export default Toolbar;