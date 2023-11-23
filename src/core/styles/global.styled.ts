import { createGlobalStyle } from "styled-components";
import ManropeBold from "../fonts/Manrope-Bold.ttf";
import ManropeMedium from "../fonts/Manrope-Medium.ttf";
import ManropeLight from "../fonts/Manrope-Light.ttf";

const GlobalStyle = createGlobalStyle`
  :root {
  --primary-color: #FF0A67;
  --secondary-color: rgba(36, 38, 45);
  --light-gray-color: #d3d3d3;
  --dark-gray-color: #8f8f8f;
  --background-color: #F3F5FA;
  --white-color: #f9fafb;
}

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
  background-color: var(--background-color);
  font-family: "Manrope";
  min-height: 100%;
  display: flex;
  flex-direction: column;
}

.ul-reset {
  margin: 0;
  padding: 0;
  list-style: none;
}
.global-width {
  max-width: 1400px;
  margin: 0 auto;
}
.page-title {
  margin: 0;
  font-size: 35px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--secondary-color);
}
.subheading {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.5;
  color: var(--secondary-color);
}
.modal-heading {
  margin: 0;
  font-size: 14px;
  font-weight: 700;
  line-height: 1.5;
  color: var(--secondary-color);
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
  color: white;
}
.button-decoration {
  font-weight: 500;
  text-decoration: none;
  color: white;
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
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0;
  position: fixed;
  z-index: 3;
  top: 0;
  pointer-events: none;
  transition: 0.5s ease;
}
.open{
  opacity: 0.6;
  pointer-events: visible;
}
.main-section {
  min-height:100%;
  margin-bottom: 80px;
}
tr{
  border: 1px solid  #D3D3D3;
}
thead{
  font-size: 16px;
  background-color: var(--white-color);
}
th,
td {
  padding: 10px;
  border-spacing: 0;
  text-align:left;
  overflow: hidden;
  white-space: nowrap; // text content won't wrap to the next line
  text-overflow: ellipsis;
}
.m-30 {
  margin-bottom: 30px;
}
.rotate {
  transform: rotate(180deg);
}
.skill-list {
  display: flex;
  align-items: center;
  gap: 10px;
  margin:5px;
}
.skill-card {
  background-color: var(--primary-color);
  padding: 10px;
  border-radius: 5px;
  color: white;
}
input{
  font-weight:500;
}

th, td {
  width: 150px;
}

th:first-child,td:first-child,
th:last-child, td:last-child {
  width:90px
}

`;

export default GlobalStyle;
