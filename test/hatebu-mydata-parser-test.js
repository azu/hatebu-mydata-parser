"use strict";
import assert from "power-assert";
import {parse} from "../src/hatebu-mydata-parser";
import {readFileSync} from "fs"
var searchData = readFileSync(__dirname + "/fixtures/search.data", "utf-8");
describe("hatebu-mydata-paraser", function () {
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