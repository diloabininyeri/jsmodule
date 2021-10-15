import {datatable} from "./datatable.js";

const printPfd = function () {

    $('#print').on('click', function () {

        window.print()
    })
};


export {printPfd}