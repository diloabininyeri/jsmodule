let status = 1;

const test = function () {

    const element = $('#click');
    const buttonWrap = $('#dynamic_btn_wrap');

    element.on('click', function () {
        element.attr('status', status);
        status = !status;
        element.html(String(status))
        buttonWrap.css('visibility', status ? 'visible' : 'hidden')

    });

    buttonWrap.html('<button onclick="xxx()">Tıkla Dynamic</button>')


}

export {test}