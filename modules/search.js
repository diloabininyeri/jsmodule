import {datatable} from "./datatable.js";


const search = function (value) {
    return datatable().search(value).draw();
};


export {search}