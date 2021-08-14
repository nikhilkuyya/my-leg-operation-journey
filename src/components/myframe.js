import React from 'react';

export default function Myframe({link}){
    return (<iframe src={link} width="640" height="480" allow="autoplay"></iframe>);
}