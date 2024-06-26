/**
 * A webpage for fetching cute pet photos. Puppies (the best) or
 * kitties will be populated on the page after the user selects their desired
 * pet type.
 */
"use strict";
(function() {
  let animal = null;

  window.addEventListener("load", init);

  /**
   * TODO: What do we need to initialize?
   */
  function init() {
    // TODO
    id('kitty').onchange = () => {
      animal = 'kitty';
      makeRequest();
    };

    id('puppy').onchange = () => {
      animal = 'puppy';
      makeRequest();
    };
  }

  /**
   * TODO: Fetch data from the CSE 154 ajax pets api!
   */
  function makeRequest() {
    // TODO
    if(animal) {
      fetch(`https://courses.cs.washington.edu/courses/cse154/webservices/pets/ajaxpets.php?animal=${animal}`).then(async res => {
        try {
          res = await checkStatus(res);
          const text = await res.text();
          const pictures = document.getElementById('pictures');
          pictures.innerHTML = '';
          text.split('\n').forEach(src => {
            const image = new Image();
            image.src = src;
            pictures.appendChild(image);
          });
        } catch(e) {
          console.log('something went wrong');
        }
      });
    } else console.log('please select an animal');
  }

  /**
   * TODO: Implement any other functions you need
   */

  /* ------------------------------ Helper Functions  ------------------------------ */

  /**
   * Helper function to return the response's result text if successful, otherwise
   * returns the rejected Promise result with an error status and corresponding text
   * @param {object} res - response to check for success/error
   * @return {object} - valid response if response was successful, otherwise rejected
   *                    Promise result
   */
  async function checkStatus(res) {
    if (!res.ok) {
      throw new Error(await res.text());
    }
    return res;
  }

  /**
   * Returns the element that has the ID attribute with the specified value.
   * @param {string} id - element ID
   * @return {object} DOM object associated with id.
   */
  function id(id) {
    return document.getElementById(id);
  }

  /**
   * Returns the first element that matches the given CSS selector.
   * @param {string} query - CSS query selector.
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qs(query) {
    return document.querySelector(query);
  }

  /**
   * Returns the array of elements that match the given CSS selector.
   * @param {string} query - CSS query selector
   * @returns {object[]} array of DOM objects matching the query.
   */
  function qsa(query) {
    return document.querySelectorAll(query);
  }
})();
