import React from 'react'
import Header from "../common/header/index";
import Footer from "../common/footer/index";

const Layout = (props) => {
    return (
        <main>
            <Header />
            {props.children}
            <Footer />
        </main>
    )
}

export default Layout