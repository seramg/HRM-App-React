import { createGlobalStyle } from 'styled-components';
import ManropeBold from '../fonts/Manrope-Bold.ttf';
import ManropeMedium from '../fonts/Manrope-Medium.ttf';
import ManropeLight from '../fonts/Manrope-Light.ttf';
import colors from '../constants/colors';

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
}
@font-face {
  font-family: 'Manrope';
  src: local('Manrope'),
  url(${ManropeBold}) ,
  url(${ManropeMedium}) ,
  url(${ManropeLight}) ,
  font-weight: 700;
  font-weight: 500;
  font-weight: 300;
}
html {
  height: 100%;
}
body {
  margin: 0 auto;
  padding: 0;
  background-color: ${colors.BACKGROUND_COLOR};
  font-family: "Manrope";
  height:100%;
}
#root{
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.ul-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
.main-section {
  flex-grow:1;
  min-height:100%;
  margin-inline: auto;
  width: 100%
}
.global-width {
  max-width: 1400px;
}
.page-title {
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.5;
  color: ${colors.SECONDARY_COLOR};
}
.subheading {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: ${colors.SECONDARY_COLOR};
}
.modal-heading {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  color: ${colors.SECONDARY_COLOR};
}

.common-section {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.common-flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap:20px;
}
.logo-wrap {
  text-decoration: none;
}
.material-symbols-outlined {
  color: ${colors.WHITE_COLOR};
}
.button-decoration {
  font-weight: 500;
  text-decoration: none;
  color: ${colors.WHITE_COLOR};
}
.rotate {
  transform: rotate(180deg);
}
.display {
  display: block;
}
.no-display {
  display: none;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${colors.SECONDARY_COLOR};
  opacity: 0.5;
  z-index: 1;
  pointer-events: auto; /* Disable pointer events on the overlay so that clicks pass through */
  transition: 0.5s ease;  

  body{
    overflow:hidden;
  }
}
.open{
  opacity: 0.6;
  pointer-events: visible;
}

tr{
  border: 1px solid  #D3D3D3;
}
thead{
  font-size: 16px;
  background-color:  ${colors.WHITE_COLOR};
}
th,
td {
  padding: 10px;
  border-spacing: 0;
  text-align:left;
}
.m-30 {
  margin-bottom: 30px;
}
.rotate {
  transform: rotate(180deg);
}
.skill-list {
  margin:5px;
}
.skill-card {
  background-color:${colors.PRIMARY_COLOR};
  padding: 5px;
  border-radius: 5px;
  color: ${colors.WHITE_COLOR};
  margin-right:5px;
  display: inline-block; /* Ensure each skill card is on a single line */
}
input{
  font-weight:500;
}

th, td {
  width: 150px;
}

th:first-child,td:first-child,
{
  width:90px
}

th:last-child, td:last-child {
  width:50px;
}

.overflow-ellipsis{
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; 
}
`;

export default GlobalStyle;
