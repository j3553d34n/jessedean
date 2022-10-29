// My own helper library (kind of jQuery rip-off)
// Revealing module patern

let jd = (function() { // iffy (immediatley invoked function expression)
    return { // return object

        getID: function(selector) { // for a specific element with an id, basically an extra document.getElementById()
            return document.getElementById(selector);
        },

        getClass: function(selector) { // for a specific element with a class, basically an extra document.getElementsByClassName()
            return document.getElementsByClassName(selector); // sometimes you need to select the first class to get things working
        },

        getAll: function(selector) { // for  selecting multiple elements with the same class or tag etc.
            return document.querySelectorAll(selector);
        },

        hide: function(el) { // hide a selected element that has a display property with the value of block, or flex etc.
            el.style.display = 'none';
        },

        hideAll: function(el) { // hide all elements selected with the getAll method/function
            for (var i = 0; i < el.length; i += 1) {
                el[i].style.display = 'none';
            }
        },

        show: function(el) { // show a selected element that has a display property with the value of none
            el.style.display = 'block';
        },
        
        showAll: function(el) { // show all elements selected with the getAll method/function
            for (var i = 0; i < el.length; i+=1) {
                el[i].style.display = 'block';
            }
        },

        toggleSwitch: function(el) { // like an on/off button
            if(el.style.display === "flex") {
                el.style.display = "none";
            } else {
                el.style.display = "flex";
            }
        },

    };

})();

export { jd }