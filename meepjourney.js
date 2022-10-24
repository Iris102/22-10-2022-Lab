function rolldice() {
    var rollResult = Math.floor(Math.random() * 6) + 1;
    var imageContainer = document.getElementById("roll-result");
    if (rollResult == 1) imageContainer.innerHTML = '<div><img src="/image/meep-chill-at-home-with-iris.jpg">You roll a 1, Meep is at home chilling with Iris.</div>';
    else if (rollResult == 2) imageContainer.innerHTML = '<div><img src="/image/meep-on-top-of-mountain.jpg">You roll a 2, Meep ran off to a mountain and she sees the most awesome view.</div>';
    else if (rollResult == 3) imageContainer.innerHTML = '<div><img src="/image/meep-in-the-library.jpg">You roll a 3, Meep found a mysterious library and some friends.</div>';
    else if (rollResult == 4) imageContainer.innerHTML = '<div><img src="/image/meep-near-the-pond.jpg">You roll a 4, Meep made her way to a pond, she is thinking about dipping her tiny paw into the water.</div>';
    else if (rollResult == 5) imageContainer.innerHTML = '<div><img src="/image/meep-on-cat-island.jpg">You roll a 5, Meep sails accross to a cat island and meets lots of good friends.</div>';
    else if (rollResult == 6) imageContainer.innerHTML = '<div><img src="/image/meep-in-the-forest.jpg">You roll a 6, Meep lost in a magical forest.</div>';
    else imageContainer.innerHTML = '<div><img src="/image/meep-sunbath.jpg">Something must have gone wrong so Meep is just sunbathing.</div>';
}