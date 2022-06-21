const divs = document.querySelectorAll('.parent div');
const nums = '0123456789';
const letters = 'abcdef';

let ranHexColor = new HexColor(nums, letters);

window.addEventListener('keypress', (e) => {
  if (e.code === 'KeyR') {
    divChange();
  }
});

function divChange() {
  divs.forEach((div) => {
    div.style.backgroundColor = `#${ranHexColor.ranColor()}`;
    const e = document.createElement('p');
    e.innerText = `${div.style.backgroundColor}`;
    while (div.lastElementChild) {
      div.removeChild(div.lastElementChild);
    }
    div.appendChild(e);
  });
}

window.addEventListener('mousedown', (e) => {
  const bgColor = e.target.style.backgroundColor;
  navigator.clipboard.writeText(bgColor);
});
divChange();
