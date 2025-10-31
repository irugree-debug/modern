var all_arrow = false;
var left_arrow = false;
var right_arrow = false;

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 81) {
        if (left_arrow == false) {
            var arrow = document.getElementById("left-arrow");
            arrow.style = "animation: arrow 0.6s infinite;"
            document.getElementById("right-arrow").style = "animation: 0; animation-delay: 0;"
            left_arrow = true;
            right_arrow = false;
        }
        else if (left_arrow == true) {
            var arrow = document.getElementById("left-arrow");
            arrow.style = "animation: 0; animation-delay: 0;"
            document.getElementById("right-arrow").style = "animation: 0; animation-delay: 0;"
            left_arrow = false;
            right_arrow = false;
        }
    }
});

document.addEventListener('keyup', function (event) {
    if (event.keyCode === 69) {
        if (right_arrow == false) {
            var arrow = document.getElementById("right-arrow");
            arrow.style = "animation: arrow 0.6s infinite;"
            document.getElementById("left-arrow").style = "animation: 0; animation-delay: 0;"
            right_arrow = true;
            left_arrow = false;
        }
        else if (right_arrow == true) {
            var arrow = document.getElementById("right-arrow");
            arrow.style = "animation: 0; animation-delay: 0;"
            document.getElementById("left-arrow").style = "animation: 0; animation-delay: 0;"
            right_arrow = false;
            left_arrow = false;
        }
    }
});

cef.on("modern:speed:arrow", (type) => {
    if (type == 0) {
        document.getElementById("left-arrow").style = "animation: 0; animation-delay: 0;"
        document.getElementById("right-arrow").style = "animation: 0; animation-delay: 0;"
    }
    if (type == 1) {
        document.getElementById("left-arrow").style = "animation: arrow 0.6s infinite;"
        document.getElementById("right-arrow").style = "animation: arrow 0.6s infinite;"
    }
});

cef.on("modern:speed:update", (o1, f1) => {
    document.getElementById('speed-odometer').innerHTML = `${o1}`;
    document.getElementById('speed-fuel').innerHTML = `<svg class="fuel-icon" width="11" height="20" viewBox="0 0 17 20" fill="none"><path d="M0 0H3C3.28 0 3.53 0.115789 3.71 0.305263L5.79 2.50526L6.59 1.67368C7 1.26316 7.5 1.05263 8 1.05263H14C14.5 1.05263 15 1.26316 15.41 1.67368L16.41 2.72632C16.8 3.1579 17 3.68421 17 4.21053V17.8947C17 18.4531 16.7893 18.9886 16.4142 19.3834C16.0391 19.7782 15.5304 20 15 20H5C4.46957 20 3.96086 19.7782 3.58579 19.3834C3.21071 18.9886 3 18.4531 3 17.8947V11.5789V10.5263V6.31579C3 5.78947 3.2 5.26316 3.59 4.83158L4.38 3.98947L2.59 2.10526H0V0ZM8 3.15789V5.26316H14V3.15789H8ZM8.41 9.47368L6.41 7.36842H5V8.85263L7 10.9579V14.3053L5 16.4105V17.8947H6.41L8.41 15.7895H11.59L13.59 17.8947H15V16.4105L13 14.3053V10.9579L15 8.85263V7.36842H13.59L11.59 9.47368H8.41ZM9 11.5789H11V13.6842H9V11.5789Z" fill="#383838"/></svg>${f1}л`;
});