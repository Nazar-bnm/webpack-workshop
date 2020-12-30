import './Features.css';

export const features = ['Basic Config', 'Images', 'Styles'];

export default class Features {
  render() {
    const list = document.createElement('ul');
    list.classList.add('feature-list')
    features.forEach((text) => {
      const item = document.createElement('li');
      item.innerHTML = text;
      list.appendChild(item);
    });

    const body = document.querySelector('body');
    body.appendChild(list);
  }
}
