/*
 * Starter file 
 */
(function() {
  "use strict";

  /**
   * The starting point in our program, setting up a listener
   * for the "load" event on the window, signalling the HTML DOM has been constructed
   * on the page. When this event occurs, the attached function (init) will be called.
   */
  window.addEventListener("load", init);

  /**
   * TODO: Write a function comment using JSDoc.
   */
  function init() {
    // Note: In this function, we usually want to set up our event handlers
    // for UI elements on the page.
    console.log('Window loaded!');
    document.querySelector('#encrypt-it').onclick = handleEncrypt;
    document.querySelector('#reset').onclick = handleReset;
  }

  // Add any other functions in this area (you should not implement your
  // entire program in the init function, for similar reasons that
  // you shouldn't write an entire Java program in the main method).
  const shiftCypher = (rawText) => {
    // input validation
    if(!/^[a-z]+$/.test(rawText)) {
      alert('Text should only have alphabetical characters (A-Z, a-z). Please try again. (Note: although uppercase is technically allowed, case will not be preserved in the cypher).');
      return null;
    }

    let encryptedText = '';
    for(let i = 0; i < rawText.length; i++) {
      const charCode = rawText.charCodeAt(i);
      encryptedText += String.fromCharCode((charCode - 96) % 26 + 97); // ASCII 'a' = 97
    }

    return encryptedText;
  }

  const handleEncrypt = () => {
    const rawText = document.querySelector('#input-text').value.toLowerCase();
    document.querySelector('#result').textContent = shiftCypher(rawText);
  }

  const handleReset = () => document.querySelector('#input-text').value = '';
})();
