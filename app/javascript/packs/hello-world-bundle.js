import ReactOnRails from 'react-on-rails';

import HelloWorld from '../bundles/HelloWorld/components/HelloWorld';
import AppRouter from '../bundles/HelloWorld/components/links';
import App from '../bundles/HelloWorld/components/app';

// This is how react_on_rails can see the HelloWorld in the browser.
ReactOnRails.register({
  HelloWorld,
  AppRouter,
  App
});
