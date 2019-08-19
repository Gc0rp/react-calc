import { css } from 'styled-components';

const reset = css`
    html {
        
        /* Nicer looking fonts for OS X and iOS */
        -webkit-font-smoothing: antialiased;
    }

    * {
        box-sizing: border-box;
        padding: 0px;
        margin: 0px;
    }

    body{
        text-align: center;
    }

   
`;

export default reset;
