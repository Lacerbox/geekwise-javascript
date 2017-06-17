// JS for JavaScript The Musical

function playSoundUpper(e) { // FOR TEN UPPER KEYS (Q, W, E, R, T, Y, U, I, O, P)
  // CHECK FOR AN AUDIO ELEMENT ON THE PAGE THAT HAS A 'data-key' OF THE KEY PRESSED BY USING A DATA ATTRIBUTE SELECTOR
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`); // ONE FOR KEY AUDIO AND ONE FOR KEY ANIMATION
  const keyUpper = document.querySelector(`.key-upper[data-key="${e.keyCode}"]`); // IF ANY KEY WITH NO AUDIO ELEMENT IS
  if (!audio) return;    // PRESSED YOU GET 'null' AND FUNCTION IS STOPPED, BUT IF THERE IS, THEN THE SOUND FILE IS PLAYED
  audio.currentTime = 0; // A SOUND FILE HAS TO FINISH BEFORE IT CAN BE PLAYED AGAIN. 'audio.currentTime = 0' REWINDS THE
  audio.play();          // SOUND FILE TO THE BEGINNING SO IT CAN BE PLAYED AGAIN BEFORE FINISHING (hit key over and over)
  keyUpper.classList.add('playing-upper'); // ADDS THE CLASS 'playing' FROM CSS TO CHANGE KEYS LOOKS CAUSING THEM TO ANIMATE
}

function playSoundMiddle(e) { // FOR NINE MIDDLE KEYS (A, S, D, F, G, H, J, K, L)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyMiddle = document.querySelector(`.key-middle[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  keyMiddle.classList.add('playing-middle');
}

function playSoundLower(e) { // FOR SEVEN LOWER KEYS (Z, X, C, V, B, N, M)
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const keyLower = document.querySelector(`.key-lower[data-key="${e.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  audio.play();
  keyLower.classList.add('playing-lower');
}

function removeTransitionUpper(e) { // REVERTS THE KEY BACK TO ITS ORIGINAL STATE TO CONTINUE THE ANIMATION
  if (e.propertyName !== 'transform') return; // SKIPS FUNCTION IF EVENT.'propertyName' DOES NOT EQUAL 'transform'
  this.classList.remove('playing-upper'); // IF IT EQUALS 'transform' THEN THE CLASS 'playing' IS REMOVED (or reversed)
} // 'this' IS EQUAL TO 'key'             // CHANGING THE KEY BACK TO ITS ORIGINAL STATE COMPLETING THE ANIMATION

function removeTransitionMiddle(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing-middle');
}

function removeTransitionLower(e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing-lower');
}

const keysUpper = document.querySelectorAll('.key-upper');
const keysMiddle = document.querySelectorAll('.key-middle');
const keysLower = document.querySelectorAll('.key-lower');
// EACH KEY GETS AN 'EventListener' (transitionend) ADDED TO IT, SO FOR EACH KEY LISTEN FOR THAT END EVENT AND THEN
keysUpper.forEach(keyUpper => keyUpper.addEventListener('transitionend', removeTransitionUpper)); // CALL THE FUNCTION
keysMiddle.forEach(keyMiddle => keyMiddle.addEventListener('transitionend', removeTransitionMiddle));
keysLower.forEach(keyLower => keyLower.addEventListener('transitionend', removeTransitionLower));
window.addEventListener('keydown', playSoundUpper);
window.addEventListener('keydown', playSoundMiddle);
window.addEventListener('keydown', playSoundLower); // LISTEN ON 'window' FOR THE 'keydown' EVENT, AND WHEN THAT
                                                    // HAPPENS, CALL THE FUNCTION 'playSound' TO PLAY THE SOUND FILE
