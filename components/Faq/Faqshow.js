import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router';
import Faq from "react-faq-component";
import axios from 'axios';

const Faqshow = () => {
    const [faq, setFaq] = useState([])
    let path = '';
    const { pathname } = useRouter();
    if (pathname == '/') {
        path = 'home';
    } else {
        path = pathname.replaceAll("/", "");
    }

    useEffect(() => {
        axios.get(`api/faq/${path}`).then(res => { setFaq(res.data.data); console.log(res.data.data) })
    }, [pathname])

    const data = {
        title: "",
        rows: faq,
    };

    const styles = {
        titleTextColor: "blue",
        rowTitleColor: "blue",
        rowContentColor: 'grey',
        arrowColor: "#FD5444",
    };
    const config = {
        animate: true,
        tabFocus: true
    };

    return (

        <section id="faq">
            <div className="container">
                <h1 className="heading">Frequently Asked Questions</h1>
                <div className="content">
                    <Faq
                        data={data}
                        styles={styles}
                        config={config}
                    />
                </div>
            </div>
        </section>
    )
}

export default Faqshow