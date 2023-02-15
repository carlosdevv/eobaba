import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

:root {
  --white: #fff;
  --gray-50: #f0f2f5;
  --gray-300: #a8a8b3;
  --gray-500: #626471;

  --black: #18171A;
  --black-10: #16151a;

  --error: #e52e54;

  --primary: #FF7A00;

  --background: #0c0b10;
}

@media (max-width: 1080px) {
  html {
    font-size: 93.75%;
  }
}

@media (max-width: 720px) {
  html {
    font-size: 87.5%;
  }
}

body {
  background: var(--background);
  color: white;
  -webkit-font-smoothing: antialiased;
}

body,
input,
textarea,
select,
button {
  font-family: var(--font-inter);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: 600;
  font-family: var(--font-inter);
  color: var(--gray-50);
}

h1 {
  font-size: 2rem;
}

h2 {
  font-size: 1.5rem;
}

button {
  cursor: pointer;
}

a {
  color: inherit;
  text-decoration: none;
}

input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
`
