let index = 1;
let auto_val = 1;
runslider(index);

// ++++++++++++++++++++++++++++++++++++++++++
// run slider manually
// ++++++++++++++++++++++++++++++++++++++++++

// prev & next working  function
function puch(n) {
    runslider(index += n)
}

// Main run function
function runslider(n) {
    let i;
    let slider = document.getElementsByClassName("slider");

    if (n > slider.length) {
        index = 1;
    }

    if (n < 1) {
        index = slider.length;
    }

    for (i = 0; i < slider.length; i++) {
        slider[i].style.display = "none";
    }

    slider[index - 1].style.display = "block";

}

// ++++++++++++++++++++++++++++++++++++++++++++++++
// run slider automatic
// ++++++++++++++++++++++++++++++++++++++++++++++++

let auto_slider = setInterval(() => {

    auto_run(index);
    auto_move(auto_val);

    function auto_move(n) {
        auto_run(index += n);
    }

    function auto_run(n) {
        let i;
        let slider = document.getElementsByClassName("slider");

        if (n > slider.length) {
            index = 1;
        }
        if (n < 1) {
            index = slider.length;
        }

        for (i = 0; i < slider.length; i++) {
            slider[i].style.display = "none";
        }

        slider[index - 1].style.display = "block";
    }


}, 6000);

