import sayHello from './helpers';
import appendImg from './image';
import Features from './components/Features';

sayHello('Webpack');
appendImg();

const Component = new Features();

Component.render();
