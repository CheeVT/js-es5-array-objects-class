//testAnonym('Same file, before declaration');

var testAnonym = function(from) {
    alert('Calling from: ' + from);
    //testAnonym('Same file, inside a function');
};

testAnonym('Same file, after declaration');