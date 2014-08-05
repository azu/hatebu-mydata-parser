/**
 * Created by azu on 2014/08/05.
 * LICENSE : MIT
 */
"use strict";
var util = require("./hatebu-mydata-utils");
var _myDataFormat = {
    title: "string",
    comment: "string",
    url: "string",
    date: new Date()
};
/**
 * search.dataについては`/doc/search.data-format.md`を参照
 *
 * @param {string} text
 * @returns {[_myDataFormat]}
 */
function parse(text) {
    if (text == null) {
        return [];
    }
    var myDataTuple = util.tupleFromMyData(text);
    if (myDataTuple.bookmarks.length === 0 || myDataTuple.infos.length === 0) {
        return [];
    }
    return myDataTuple.infos.map(function (metaInfo, index) {
        var bIndex = index * 3;
        var timestamp = metaInfo.split("\t", 2)[1];
        var title = myDataTuple.bookmarks[bIndex];
        var comment = myDataTuple.bookmarks[bIndex + 1];
        var url = myDataTuple.bookmarks[bIndex + 2];
        return {
            title: title,
            comment: comment,
            url: url,
            date: util.dateFromString(timestamp)
        }
    });
}

module.exports = {
    parse: parse
};