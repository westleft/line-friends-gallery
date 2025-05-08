# line friends gallery

我很喜歡 line friends 的角色，手機裡放著一堆熊大、莎莉、兔兔的圖片，突發奇想想要把這些照片放在一個瀑布流的圖片牆。

![https://i.imgur.com/PaxrZ9i.png](https://i.imgur.com/PaxrZ9i.png)

圖片是這個專案最大的重點，因此用了 [blurhash](https://blurha.sh/) 提高使用者體驗，方式是將 hash 存在我自己的 supabase 專案中。

考慮到專案必須要有個後台方便上傳圖片，我採用了 monorepo 架構開發，前台用 React，後台則用 Vue。

目前一切都在開發進行式 :)
