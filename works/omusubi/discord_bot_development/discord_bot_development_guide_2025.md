# Discord Bot Development Guide (2025 Edition)

> **目的**: このドキュメントは、Cursor で ChatGPT‑Agent が自然言語の仕様から Discord Bot を自動生成するときの唯一のリファレンスになります。以下の各セクションは *必須* 順序で実行されることを想定し、サンプルコードは
>
> * **Node.js (discord.js v15)**
> * **Python (discord.py v2)**
>   の 2 種類を掲載しています。

---

## 0. TL;DR – Cursor 用クイックスタート

1. **Bot 仕様テンプレート**（→ §12）に従ってプロンプトを受け取る。
2. `npx degit discordjs/discord.js-template <project>` で雛形生成（Node の場合）。
3. §3‑§5 に従い **アプリ作成 → Bot ユーザー追加 → 権限・インテント設定 → 招待 URL 発行**。
4. §6‑§8 を読み込みながら Slash Command & Interaction を実装。
5. §11 のいずれかのホスティングにデプロイ。
6. 100 サーバ到達前に §9 の **Bot Verification** を済ませる。

---

## 1. 前提条件

| 項目            | 最低バージョン           | 備考                            |
| ------------- | ----------------- | ----------------------------- |
| Discord アカウント | —                 | 開発用サーバ権限 **Manage Server** 必須 |
| Node.js       | 18 LTS            | `npm` 付属; discord.js v15 以降対応 |
| Python        | 3.11              | discord.py v2 推奨              |
| Git           | 任意                | CI/CD 用                       |
| エディタ          | Cursor, VS Code 等 | 環境変数補完が便利                     |

---

## 2. 用語

* **Application**: Developer Portal 上で作成するコンテナ。Bot User も Slash Command もこの中に存在。
* **Bot User**: Discord API と通信する実体。Token で認証。
* **Gateway Intents**: Bot が受信するイベントのカテゴリ。
* **Interaction**: Slash Command / ボタン / セレクトメニュー等、ユーザ操作を表すリクエスト。

---

## 3. アプリケーション & Bot ユーザー作成手順

1. [https://discord.com/developers/applications](https://discord.com/developers/applications) → **New Application** → 名前入力[^app].
2. 左側 *Bot* → **Add Bot** → Token コピー → `.env` に保存。
3. *OAuth2 → URL Generator*:

   * **Scopes**: `bot`, `applications.commands`
   * **Bot Permissions**: 最小限（例: `Send Messages`, `Embed Links`）を選択。
4. 生成 URL で開発用サーバに招待。

```env
DISCORD_TOKEN=Bot‑YourSuperSecretToken
CLIENT_ID=123456789012345678
GUILD_ID=987654321098765432
```

[^app]: Developer Portal Intro 参照。

---

## 4. Gateway Intents

* **必須**: `GUILD_MESSAGES`, `GUILDS`
* **場合により必要**: `MESSAGE_CONTENT` (メッセージ全文取得), `GUILD_MEMBERS` (メンバー一覧), `GUILD_PRESENCES` (オンライン状態)
* Portal でチェック後、コード側にも明示。

```js
// Node (discord.js v15)
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent // 必要なら
  ]
});
```

---

## 5. Slash Commands & Application Commands

### 5.1 概要

* `/` で呼び出す **ネイティブ UI**。入力補完・権限チェックが自動。
* 2023 年以降、新規 Bot は Slash Command 推奨 & Prefix コマンドは非推奨[^slash].

### 5.2 登録フロー（Node）

1. `npm i discord.js @discordjs/rest`
2. `deploy-commands.js` を作成し REST API で登録。

```js
import { REST, Routes } from 'discord.js';
import { config } from 'dotenv';
import commands from './commands/index.js';
config();

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);
await rest.put(
  Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
  { body: commands }
);
console.log('✅ Slash Commands registered.');
```

### 5.3 コマンド構造

| フィールド         | 型      | 必須 | 説明                  |
| ------------- | ------ | -- | ------------------- |
| `name`        | string | ✓  | 小文字英数字 1‑32 文字      |
| `description` | string | ✓  | 1‑100 文字            |
| `options`     | array  | —  | 引数定義。型、必須、有効範囲などを宣言 |

---

## 6. Interactions & UI Components

* **Buttons**: max 5/row × 5 rows。
* **SelectMenus**: max 25 options。
* **Modals**: テキスト入力 UI。ユーザの入力をめって再度 Interaction を受信。
* **レスポンス制限**: Interaction 受信後 3 秒以内に応答。処理が長い場合は `interaction.deferReply()`→`followUp()`。

---

## 7. エラーハンドリング & ロギング

* コマンド実行で例外が出てもユーザに **Ephemeral** なエラーで返す。
* ログは Console + Sentry など外部に集約。
* `process.on('unhandledRejection', ...)` でグローバル捕捉。

---

## 8. Rate Limits & パフォーマンス

* **グローバル制限**: 50 req/sec/Bot Token[^rate].
* ルートごとに Bucket が個別カウント。`X-RateLimit-Remaining` を必ず確認。
* Discord.js/Py は自動で待機するが、外部 HTTP 呼び出しは自前。
* 大規模 Bot は **Sharding**（Gateway 接続を分割）必須。

---

## 9. Bot Verification & Privileged Intents

* **100 サーバ超** で招待制限。Developer Portal で **Verification** を申請し、Stripe Identity で本人確認する必要あり[^verify].
* `MESSAGE_CONTENT` や `GUILD_MEMBERS` など **Privileged Intent** は Verification 承認後に利用可能。
* プライバシーポリシー & 利用規約の URL を提出。

---

## 10. セキュリティ & 運用

* Token は **公開リポジトリに絶対にコミットしない**。GitHub Secret / `.env` を使用。
* 必要最小限の **Bot Permissions** を選択。
* 個人情報を保持する場合は **GDPR/Japanese APPI** 準拠のデータフロー図を作成。

---

## 11. デプロイ & ホスティング

| プラットフォーム         | 無料枠     | 特徴                          |
| ---------------- | ------- | --------------------------- |
| **Railway**      | 500h/mo | GitHub 連携・Secret UI あり      |
| **Render**       | 750h/mo | Cron & Pull Request Preview |
| **Fly.io**       | 3 VMs   | グローバル Anycast; ボリューム課金      |
| **Docker + VPS** | —       | root 権限; PM2 / systemd      |

---

## 12. Bot 仕様テンプレート（Cursor が読む）

```yaml
# ===== Discord Bot Spec v1 =====
name: PollBot
language: node # 'python' も可
commands:
  - name: poll
    description: アンケートを作成
    options:
      - question: string # 必須
      - choices: string[] # 2‑25 個
    permissions: SendMessages, EmbedLinks
features:
  - buttons: true # 投票用
  - auto_close: 1h
```

---

## 13. 開発フロー（Cursor 実装例）

1. Spec を YAML で受信。
2. テンプレートからファイル構造を生成。
3. §5 を参照して `deploy-commands.js` を生成し初回実行。
4. `src/commands/<name>.js` にコマンドハンドラーを自動生成。
5. Linter (ESLint) と Formatter (Prettier) を設定。
6. GitHub Actions で **CI → Railway Deploy** を自動化。

---

## 14. 参考リンク

1. Discord Developer Portal Intro[^app]
2. Slash Commands FAQ[^slash]
3. Discord Rate Limits[^rate]
4. Gateway Intents Docs[^intents]
5. Bot Verification FAQ[^verify]

[^slash]: Slash Commands FAQ ‑ Discord Support.

[^rate]: Rate Limits ‑ Discord Developer Docs.

[^intents]: Gateway Intents ‑ Discord Developer Docs.

[^verify]: Bot Verification FAQ. 