import React, { Component } from 'react';
import Image from 'next/image';
import creativeIcon from '../../../public/images/Creative_logo.png'

const myLoader = ({ src, width }) => {
    return `https://res.cloudinary.com/${src}?w=${width}}`
  }

export default class Logo extends Component {
    render() {
        return (
            <Image
                loader={myLoader} 
                src="dyangxc7h/image/upload/v1623552244/creative/Creative_logo.png"
                alt="Creative Logo"
                width={50}
                height={40}
                quality={75} 
            />
        )
    }
}
