/**
 * Created by azu on 2014/08/05.
 * LICENSE : MIT
 */
"use strict";
/**
 * create Date from yyyymmddhhmmss string
 * @param {string} dateStr yyyymmddhhmmss
 * @returns {Date}
 */
function dateFromString(dateStr) {
    // dateStr
    // yyyymmddhhmmss
    return new Date(
        dateStr.substr(0, 4),
            parseInt(dateStr.substr(4, 2), 10) - 1,
        dateStr.substr(6, 2),
        dateStr.substr(8, 2),
        dateStr.substr(10, 2),
        dateStr.substr(12, 2)
    );
}
/**
 * is mydata format
 * @param text
 * @returns {{bookmarks: Array, infos: (Array|*)}}
 */
function tupleFromMyData(text) {
    var infos = text.trim().split("\n");
    var bookmarks = infos.splice(0, infos.length * 3 / 4);
    return {
        bookmarks: bookmarks,
        infos: infos
    };
}
module.exports = {
    dateFromString: dateFromString,
    tupleFromMyData: tupleFromMyData
};