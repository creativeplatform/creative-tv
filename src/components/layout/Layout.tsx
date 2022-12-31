import React, { useEffect, useState } from "react";
import Head from "next/head";
import Header from '../Navbar/header'
import HeroSection from "../hero/HeroSection";
import FeaturedVideo from "../featured/FeaturedVideo";

const Layout = () => {

    return (
    <>
        <Head>
            <title>Creative TV</title>
            <meta property="og:title" content="Creative TV" key="Creative TV" />
        </Head>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0" />
        </Head>
            
        <Head>
            <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        </Head>
        <Head>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Header />
        <HeroSection />
        <FeaturedVideo />
    </>
    )
}
export default Layout;