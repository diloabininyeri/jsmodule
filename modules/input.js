import {search} from "./search.js";

const inputBindSearch = function () {

    $('#search').on('input',function () {
        search($(this).val())
    })
};

export {inputBindSearch}