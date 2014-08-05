# hatebu-mydata-paraser [![Build Status](https://travis-ci.org/azu/hatebu-mydata-paraser.svg)](https://travis-ci.org/azu/hatebu-mydata-paraser)

はてなブックマークのsearch.dataのパーサライブラリ

search.dataとは以下のようなブラウザ拡張で使われてるはてなブックマークのユーザーが登録した全件データを取得するAPI　

* [hatena/hatena-bookmark-googlechrome-extension](https://github.com/hatena/hatena-bookmark-googlechrome-extension "hatena/hatena-bookmark-googlechrome-extension")
* [hatena/hatena-bookmark-xul](https://github.com/hatena/hatena-bookmark-xul "hatena/hatena-bookmark-xul")

詳しくは [search.data-format.md](doc/search.data-format.md)  を参照

## Installation

```
npm install hatebu-mydata-paraser
```

## Usage

```js
var parse = require("hatebu-mydata-paraser").parse;
var data = parse(searchData); // searchDataのテキストを渡す
/* dataには以下のようなオブジェクトの配列が入る
{
    title: "string",
    comment: "string",
    url: "string",
    date: new Date()
};
*/
```

search.dataのフォーマットについては

[search.data-format.md](doc/search.data-format.md) を参照

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT