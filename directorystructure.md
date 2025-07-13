# ディレクトリ構成

## プロジェクト全体構造

```
projects/
├── .cursor/                     # Cursor IDE設定
│   └── rules/                   # Project Rules設定
│       └── global.mdc          # グローバルルール
├── .cursorrules                # 旧Cursor設定（レガシー）
├── RSSHub/                     # RSSHubメインプロジェクト
├── private/                    # プライベート資料・ナレッジベース
├── works/                      # 各種作業プロジェクト
├── profile.md                  # プロフィール情報
├── technologystack.md          # 技術スタック定義
└── directorystructure.md       # ディレクトリ構成定義（本ファイル）
```

## RSSHubプロジェクト構造

### メインディレクトリ
```
RSSHub/
├── lib/                        # ソースコード本体
│   ├── api/                    # API関連
│   ├── app-bootstrap.tsx       # アプリ初期化
│   ├── app.ts                  # メインアプリケーション
│   ├── assets/                 # 静的ファイル
│   ├── errors/                 # エラーハンドリング
│   ├── middleware/             # ミドルウェア
│   ├── routes/                 # ルート定義（多数のサイト対応）
│   ├── routes-deprecated/      # 非推奨ルート
│   ├── utils/                  # ユーティリティ関数
│   └── views/                  # ビューテンプレート
├── scripts/                    # ビルド・デプロイスクリプト
├── patches/                    # ライブラリパッチ
├── plugins/                    # カスタムプラグイン
├── logs/                       # ログファイル
└── package.json               # 依存関係定義
```

### lib/routes/ 構造
```
lib/routes/
├── [サイト名]/                 # 各サイト毎のディレクトリ
│   ├── index.ts               # サイトのメインルート
│   ├── [機能名].ts            # 各機能のルート実装
│   └── templates/             # テンプレートファイル（任意）
└── index.tsx                  # ルート統合管理
```

## 命名規則

### ディレクトリ命名
- **小文字のケバブケース**: `kebab-case`
- **サイト名は実際のドメイン名**: `163`、`36kr`、`github` など
- **機能別サブディレクトリ**: `templates/`、`utils/` など

### ファイル命名
- **TypeScript**: `.ts` 拡張子
- **React コンポーネント**: `.tsx` 拡張子
- **テストファイル**: `.test.ts` 拡張子
- **設定ファイル**: `config.json`、`.env` など

### コード組織
```
各サイトディレクトリ/
├── index.ts                    # メインエクスポート
├── [機能名].ts                 # 個別機能実装
├── utils.ts                    # サイト固有ユーティリティ
└── templates/                  # テンプレート（必要時）
    └── [テンプレート名].art
```

## 設定・メタファイル

### 設定関連
```
RSSHub/
├── package.json                # NPM依存関係・スクリプト
├── tsconfig.json              # TypeScript設定
├── babel.config.js            # Babel設定
├── .eslintrc.js              # ESLint設定
├── .prettierrc               # Prettier設定
└── app.json                  # アプリケーション設定
```

### ビルド・デプロイ
```
scripts/
├── workflow/                  # ワークフロー関連
├── docker/                   # Docker設定
└── ansible/                  # デプロイ設定
```

## 開発ガイドライン

### 新規ルート追加手順
1. `lib/routes/[サイト名]/` ディレクトリ作成
2. `index.ts` でメインルート定義
3. 必要に応じて機能別ファイル作成
4. テストファイル作成（`*.test.ts`）

### ファイル配置ルール
- **公開API**: `lib/api/`
- **共通ミドルウェア**: `lib/middleware/`
- **共通ユーティリティ**: `lib/utils/`
- **サイト固有ロジック**: `lib/routes/[サイト名]/`
- **テンプレート**: `lib/views/` または各ルート内

### Import パス規則
```typescript
// 相対パス（同一ディレクトリ内）
import { helper } from './utils';

// 絶対パス（libディレクトリから）
import { config } from '@/config';
import { middleware } from '@/middleware/auth';
```

## 特記事項

### routes ディレクトリの特徴
- 1300以上のサイトに対応
- 各サイトは独立したディレクトリ構造
- 共通パターンに従ったファイル構成
- 自動ルート検出・登録機能

### 開発時の注意点
- **ルート追加**: 既存パターンに従って実装
- **テスト**: 各ルートに対応するテストファイル必須
- **ドキュメント**: README更新も合わせて実施
- **型安全**: TypeScript厳格モードで実装 