"use strict";
var assert = require("power-assert");
var parse = require("../lib/hatebu-mydata-paraser").parse;
describe("hatebu-mydata-paraser", function () {
    var searchData = require("fs").readFileSync(__dirname + "/fixtures/search.data", "utf-8");

    context("when no data", function () {
        it("should return []", function () {
            assert.deepEqual(parse(""), []);
        });
    });
    context("when has data", function () {
        it("should return [{},{}]", function () {
            var data = parse(searchData);
            assert(data.length > 0);
            var object = data[0];
            assert("title" in object);
            assert("comment" in object);
            assert("url" in object);
            assert("date" in object);
        });
    });
});