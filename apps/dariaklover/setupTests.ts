// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch';

// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';
