import * as React from 'react';
// Polyfill "window.fetch" used in the React component.
import 'whatwg-fetch';

// react-testing-library renders your components to document.body,
// this adds jest-dom's custom assertions
import '@testing-library/jest-dom';

jest.mock('react-markdown', function getReactMarkdown() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function ReactMarkdown(props: any) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { children } = props;
    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{children}</>;
  };
});

jest.mock('remark-gfm', function getRemarkGfm() {
  return function RemarkGfm() {};
});

jest.mock('remark-unwrap-images', function getRemarkUnwrapImages() {
  return function RemarkUnwrapImages() {};
});
