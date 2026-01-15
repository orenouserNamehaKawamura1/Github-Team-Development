# Github-Team-Development

# 構成

```
.
├── index.html
├── css/
├── img/
│   ├── artists/
│   └── goods/
├── js/
└── html/
    ├── timetable.html
    ├── access.html
    ├── ticket.html
    ├── goods.html
    ├── guide.html
    ├── faq.html
    ├── contact.html
    ├── contact-confirm.html
    ├── contact-thanks.html
    ├── privacy.html
    └── artists/
        ├── index.html
        └── [アーティスト名].html
```

# 規則

- css,js は html のファイル名と同じ名前に統一する　例)timetable.html の css：timetable.css js：timetable.js
- PC 版、スマートフォン版の css を実装する際は以下の メディアクエリを使用する

```css
/* PCのcssを実装する場合 */
@media screen and (min-width: 1280px) {
  .セレクタ {
  }
}

/* スマートフォンのcssを実装する場合 */
@media screen and (max-width: 375px) {
  .セレクタ {
  }
}
```

- css を読み込む場合は共通用 css(common.css)を読み込んでから各自の css を読み込む
- 作業を始める前に Github の issue を作成して何をするかを記述する
- PR を作成した際は該当する issue の番号を必ず記述する
- 作業する際は必ず作業用ブランチを作成して作業すること(main ブランチでは自身の作業を行わない)
