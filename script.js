document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keycode = event.keyCode;

    const displayElement = document.getElementById('code');
    const displayNumber = document.getElementById('number');
    displayElement.innerText = `Key: ${key}`;
        displayNumber.innerText =`${keycode}`;
  });
  