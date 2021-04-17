import React from "react";
import s from './MainApp.module.css'
import Header from "./header/Header";
import ModalWindow from "../crumbs/ModalWindow/ModalWindow";
import ReactNotifications from 'react-notifications-component';


let MainApp = (props) => {
    return (
        <>
            <ReactNotifications />
            <ModalWindow />
            <Header />
        </>
    )
}

export default MainApp
