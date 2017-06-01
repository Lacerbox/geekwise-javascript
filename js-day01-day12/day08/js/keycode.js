var key = document.querySelector('.key'),
    h1 = document.querySelector('h1'),
    keyed = document.querySelector('.keyed');

    window.addEventListener('keydown', function(e) { // 'keypress' gives caps
      e.preventDefault();

      key.classList.add('hidden');
      keyed.parentElement.classList.remove('hidden');
      h1.textContent = e.keyCode;
      keyed.textContent = e.key;

      if(e.keyCode === 32) {
        keyed.textContent = 'Spacebar';
      }
      //console.log(e);
      //console.log(e.keyCode);
    })
