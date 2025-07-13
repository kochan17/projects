# 技術スタック

## プロジェクト概要
- **プロジェクト名**: RSSHub
- **バージョン**: 1.0.0
- **説明**: Make RSS Great Again!
- **ライセンス**: MIT
- **作成日**: 2025-07-10

## 基盤技術

### ランタイム・言語
- **Node.js**: ES Modules形式で実行
- **TypeScript**: 5.8.3
- **TSX**: 4.20.3 (TypeScript実行環境)

### Webフレームワーク
- **Hono**: 4.8.4 (軽量なWebフレームワーク)
- **@hono/node-server**: 1.15.0
- **@hono/zod-openapi**: 0.19.9

## 主要ライブラリ

### データ処理・パース
- **cheerio**: 1.1.0 (サーバーサイドjQuery)
- **rss-parser**: 3.13.0 (RSSパーサー)
- **@postlight/parser**: 2.2.3 (記事抽出)
- **html-to-text**: 9.0.5
- **markdown-it**: 14.1.0
- **sanitize-html**: 2.17.0

### HTTP・ネットワーク
- **ofetch**: 1.4.1 (HTTPクライアント)
- **undici**: 6.21.3 (高性能HTTPクライアント)
- **form-data**: 4.0.3
- **tough-cookie**: 5.1.2

### プロキシ・エージェント
- **https-proxy-agent**: 7.0.6
- **socks-proxy-agent**: 8.0.5
- **http-cookie-agent**: 6.0.8
- **pac-proxy-agent**: 7.2.0
- **proxy-chain**: 2.5.9

### ブラウザ自動化
- **rebrowser-puppeteer**: 24.8.1

### 認証・セキュリティ
- **oauth-1.0a**: 2.2.6
- **otplib**: 12.0.1
- **jsrsasign**: 10.9.0
- **crypto-js**: 4.2.0
- **aes-js**: 3.1.2

### キャッシュ・データベース
- **ioredis**: 5.6.1 (Redis クライアント)
- **lru-cache**: 11.1.0

### ユーティリティ
- **dayjs**: 1.11.8 (日時操作)
- **uuid**: 11.1.0
- **query-string**: 9.2.2
- **p-map**: 7.0.3
- **rate-limiter-flexible**: 7.1.1

### ログ・監視
- **winston**: 3.17.0 (ログ出力)
- **@sentry/node**: 9.35.0 (エラーモニタリング)

### OpenTelemetry (可観測性)
- **@opentelemetry/api**: 1.9.0
- **@opentelemetry/sdk-metrics**: 2.0.1
- **@opentelemetry/sdk-trace-base**: 2.0.1
- **@opentelemetry/exporter-prometheus**: 0.202.0

### 外部API統合
- **twitter-api-v2**: 1.24.0
- **telegram**: 2.26.22
- **instagram-private-api**: 1.46.1
- **googleapis**: 150.0.1
- **@notionhq/client**: 4.0.0

## 開発・ビルドツール

### TypeScript・ビルド
- **tsdown**: 0.12.9 (TypeScriptバンドラー)
- **@vercel/nft**: 0.29.4

### テストフレームワーク
- **vitest**: 2.1.9
- **@vitest/coverage-v8**: 2.1.9
- **supertest**: 7.1.1
- **msw**: 2.4.3 (API モック)

### リンター・フォーマッター
- **eslint**: 9.30.1
- **@typescript-eslint/eslint-plugin**: 8.35.1
- **@typescript-eslint/parser**: 8.35.1
- **prettier**: 3.6.2

### 開発サポート
- **cross-env**: 7.0.3
- **husky**: 9.1.7 (Gitフック)
- **lint-staged**: 16.1.2

## 環境設定

### 開発環境
```bash
# 開発サーバー起動
npm run dev

# 本番環境での実行
npm start

# テスト実行
npm test
```

### 環境変数
- **NODE_ENV**: dev/production/test
- プロキシ設定、API キー等は環境変数で管理

## 注意事項
- **バージョン固定**: 上記バージョンは変更禁止
- **Node.js**: ES Modules形式必須
- **TypeScript**: 5.8.3での型チェック必須
- **テスト**: vitest使用でカバレッジレポート生成 