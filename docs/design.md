# Boiled Egg Timer 設計書

## 1. アプリ概要
「Boiled Egg Timer」は、卵のゆで加減（半生・半熟・完熟）に合わせてタイマーを設定し、料理のタイミングを正確に知らせるシンプルなWebアプリです。  
ユーザーは画面上で好みのゆで加減を選ぶだけで、指定時間のカウントダウンとアラーム通知を受けられます。

---

## 2. ターゲットユーザー
- 料理初心者
- 忙しい家庭の主婦・一人暮らしの人
- タイマーを使わず感覚で茹でて失敗しがちな人

---

## 3. 機能一覧
- ゆで加減選択（半生・半熟・完熟）
- タイマーの自動開始
- タイマー進行中の視覚表示（残り時間）
- アラームによる通知
- 卵の視覚イメージ表示（CSSデザイン）

---

## 4. 画面設計（UI概要）
- https://www.figma.com/design/DQuRsn8xo7VJ7d2g0oBjXd/%E7%84%A1%E9%A1%8C?node-id=0-1&p=f&t=zkHgeasNeaNXNw1F-0
- トップ画面：アプリタイトル＋ゆで加減ボタン
- タイマー画面：タイマー残り時間表示、アニメーション表示
- 完了画面：アラーム音＋完了メッセージ

---

## 5. 画面遷移図（簡易）
```
[トップ画面]
    ↓（ゆで加減を選択）
[タイマー画面]
    ↓（時間終了）
[完了画面]
```

---

## 6. 使用技術・開発環境
- HTML / CSS / JavaScript（バニラ）
- 動作環境：モダンブラウザ（Chrome, Edge など）
- 開発環境：Visual Studio Code（ローカル環境）

---

## 7. UIデザイン方針
- 白＋黄色をベースに、卵を模した柔らかい配色
- 親しみやすく、直感的な操作を優先
- 背景は落ち着いたトーン（例：#f9f9f9）

---

## 8. 状態管理（ロジック設計）
- 状態変数 `timerState` を使用し以下の遷移を管理：
  - `"idle"` → `"running"` → `"finished"`
- `setTimeout` による非同期カウント処理

---

## 9. タイマー時間設定
| モード | 時間（秒） |
|--------|------------|
| 半生   | 240秒（4分） |
| 半熟   | 360秒（6分） |
| 完熟   | 600秒（10分） |

---

## 10. エラーハンドリング
- タイマー動作中にブラウザを閉じた場合：リセット扱い
- JavaScriptが無効な場合は、利用不可のメッセージを表示

---

## 11. 今後の拡張案
- 卵の数や大きさに応じた時間自動調整
- 音声や振動通知（スマホ対応）
- 茹で加減の画像切り替えによるビジュアルガイド

---
