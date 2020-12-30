import './Features.css';

// export const features = ['Basic Config', 'Images', 'Styles'];

export default class Features {
  features = ['Basic Config', 'Images', 'Styles', 'Babel', 'Plugins'];

  render() {
    const list = document.createElement('ul');
    list.classList.add('feature-list')
    this.features.forEach((text) => {
      const item = document.createElement('li');
      item.innerHTML = text;
      list.appendChild(item);
    });

    const body = document.querySelector('body');
    body.appendChild(list);
  }
}
