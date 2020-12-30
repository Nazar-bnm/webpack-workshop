import IMG from '../assets/storm_in_glass.jpg';

export default function appendImg() {
  const img = document.createElement('img');
  img.alt = 'storm in glass';
  img.src = IMG;
  const body = document.querySelector('body');
  body.appendChild(img);
}
