import { createGlobalStyle } from 'styled-components';

import sibylAlternates from './Sibyl_Alternates.woff';
import sibylAlternates2 from './Sibyl_Alternates.woff2';
import hogBoldHMK from './Hog_Bold_HMK.woff';
import hogBoldHMK2 from './Hog_Bold_HMK.woff2';

export default createGlobalStyle`
    @font-face {
        font-family: 'Font Name';
        src: local('Font Name'), local('FontName'),
        url(${sibylAlternates2}) format('woff2'),
        url(${sibylAlternates}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'hogBoldHMK';
        src: local('Font Name2'), local('FontName2'),
        url(${hogBoldHMK2}) format('woff2'),
        url(${hogBoldHMK}) format('woff');
        font-weight: 300;
        font-style: normal;
    }
`;
