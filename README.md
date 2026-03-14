# Astro Starter Kit: Basics

```sh
npm create astro@latest -- --template basics
```

> 🧑‍🚀 **Seasoned astronaut?** Delete this file. Have fun!

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src
│   ├── assets
│   │   └── astro.svg
│   ├── components
│   │   └── Welcome.astro
│   ├── layouts
│   │   └── Layout.astro
│   └── pages
│       └── index.astro
└── package.json
```

To learn more about the folder structure of an Astro project, refer to [our guide on project structure](https://docs.astro.build/en/basics/project-structure/).

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 👀 Want to learn more?

Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
=============================================================================================================================
プロジェクト構成（ディレクトリ構造）
Reflenge-homepage/
├── .astro/                # Astroのキャッシュや自動生成された型定義
├── .vscode/               # エディタ（VS Code）の設定ファイル
├── node_modules/          # プロジェクトで使用する外部パッケージ（ライブラリ）
├── public/                # 公開アセット（ブラウザから直接アクセス可能なファイル）
├── src/                   # メインのソースコード
│   ├── assets/            # 画像（SVGなど）の管理フォルダ
│   ├── components/        # 各ページで使い回す部品（Header, Footerなど）
│   ├── layouts/           # ページ全体の共通テンプレート（枠組み）
│   ├── library/           # 外部API連携（microCMSなど）のロジック
│   ├── pages/             # 各ページのファイル（ファイル名がそのままURLになる）
│   │   ├── news/          # ニュース詳細や一覧に関連するフォルダ
│   │   ├── products/      # 製品詳細や一覧に関連するフォルダ
│   │   └── index.astro    # トップページ
│   └── styles/            # CSSスタイルシート（global.cssなど）
├── .env                   # 環境変数（APIキーなどの秘密情報）
├── .gitignore             # Gitで管理しないファイル・フォルダの指定
├── astro.config.mjs       # Astroの本体設定ファイル
├── package-lock.json      # インストールされたライブラリの厳密なバージョン管理
├── package.json           # プロジェクトの依存関係やスクリプトの定義
├── README.md              # プロジェクトの説明書
└── tsconfig.json          # TypeScriptの設定

プロジェクトの流れ
1.開発の始め方（セットアップ）
新しく作業を始める際や、別のPCで作業する際の手順です。
ライブラリのインストール: npm install
開発サーバーの起動: npm run dev （http://localhost:4321 で確認可能）
環境変数の準備: .env ファイルを作成し、MICROCMS_SERVICE_DOMAIN と MICROCMS_API_KEY を設定する。

2.ページの作り方（ワークフロー）
Astroプロジェクトにおける標準的な手順です。
コンポーネント作成: src/components/ に新しい部品（例：Card.astro）を作る。
ページ作成: src/pages/ に .astro ファイルを適宜作る。
※レイアウト適用はsrc/layouts/Layout.astro でページを囲み、共通のデザインを適用する。

3.microCMSとの連携ルール
API連携部分は複雑になりがちなので、流れをメモしておきます。
データ取得: src/library/microcms.ts を通じてAPIを設定。
型の定義: 新しいコンテンツを追加したら、TypeScriptの型定義を更新してエラーを防ぐ。
プレビュー: microCMSの管理画面で更新した内容が反映されるか確認する。
