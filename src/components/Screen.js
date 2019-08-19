import React from 'react';
import styled from 'styled-components';


const Display = styled.div `
    width: 400px;
    height: 200px;
    border-radius: 5px 5px 0px 0px;
    
    background: rgba(238,9,121,1);
    background: -moz-linear-gradient(top, rgba(238,9,121,1) 0%, rgba(238,9,120,1) 6%, rgba(255,30,0,1) 46%, rgba(248,77,47,1) 97%, rgba(248,80,50,1) 100%);
    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(238,9,121,1)), color-stop(6%, rgba(238,9,120,1)), color-stop(46%, rgba(255,30,0,1)), color-stop(97%, rgba(248,77,47,1)), color-stop(100%, rgba(248,80,50,1)));
    background: -webkit-linear-gradient(top, rgba(238,9,121,1) 0%, rgba(238,9,120,1) 6%, rgba(255,30,0,1) 46%, rgba(248,77,47,1) 97%, rgba(248,80,50,1) 100%);
    background: -o-linear-gradient(top, rgba(238,9,121,1) 0%, rgba(238,9,120,1) 6%, rgba(255,30,0,1) 46%, rgba(248,77,47,1) 97%, rgba(248,80,50,1) 100%);
    background: -ms-linear-gradient(top, rgba(238,9,121,1) 0%, rgba(238,9,120,1) 6%, rgba(255,30,0,1) 46%, rgba(248,77,47,1) 97%, rgba(248,80,50,1) 100%);
    background: linear-gradient(to bottom, rgba(238,9,121,1) 0%, rgba(238,9,120,1) 6%, rgba(255,30,0,1) 46%, rgba(248,77,47,1) 97%, rgba(248,80,50,1) 100%);
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ee0979', endColorstr='#f85032', GradientType=0 );
    `;

const Screen = () => (
    <Display>
    </Display>
);

export default Screen;