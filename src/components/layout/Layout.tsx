import React, { useEffect, useState } from "react";
import Head from "next/head";
import Scripts from "./Scripts";



const Layout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
    const { runScripts } = Scripts();
    useEffect(() => {
        runScripts();
    });
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
    </>
    )
}