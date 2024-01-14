document.addEventListener('keydown', function(event) {
    const key = event.key;
    const keycode = event.keyCode;
    const modifiers = getModifiers(event);


    const displayElement = document.getElementById('code');
    const displayNumber = document.getElementById('number');
    displayElement.innerText = `Key: ${key}`;
        displayNumber.innerText =`${keycode}`;

        playKeySound();


      // Store key history
      keyHistory.push({ key, keycode, modifiers });
      console.log('Key History:', keyHistory);
    });

    function getModifiers(event) {
      const modifiers = [];

      if (event.ctrlKey) modifiers.push('Ctrl + ');
      if (event.altKey) modifiers.push('Alt + ');
      if (event.shiftKey) modifiers.push('Shift + ');

      return modifiers.join('');
    }

    function playKeySound() {
      const keySound = document.getElementById('keySound');
      keySound.currentTime = 0;
      keySound.play();
    }  