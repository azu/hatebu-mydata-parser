# search.data

はてなブックマークのデータ取得について

## search.dataの取得

はてなブックマークでユーザー登録したブックマークデータは以下のAPIより取得出来る

> http://b.hatena.ne.jp/{user_name}/search.data?timestamp=yyyymmddhhmmss

* `{user_name}` ははてなのアカウント名
* `yyyymmddhhmmss` はyyyymmddhhmmss書式での日付を指定

### timestamp

* `?timestamp=` を省略した場合は全てのデータが取得される。
* timestampを指定した場合はそれ以降に登録されたデータのみ取得される

## search.dataのフォーマット

search.dataは以下のようなフォーマットになっている。

```
TITLE
COMMENT
URL
の3行を繰り返し
ブクマ数    yyyymmddhhmmss // 1行目に対応するブクマ数と日付
```

以下のように3/4で分けて取得出来る

```js
function tupleFromMyData(text) {
    var infos = text.trim().split("\n");
    var bookmarks = infos.splice(0, infos.length * 3 / 4);
    return {
        bookmarks: bookmarks,
        infos: infos
    };
}
```
