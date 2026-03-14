# 🚀 Reflenge Homepage Project

Astro と microCMS を使用した、Reflenge の公式サイトプロジェクトです。

## 📁 プロジェクト構成（Directory Structure）

```text
/
├── public/          # 公開アセット（favicon, 動画, 重い画像など）
├── src/
│   ├── assets/      # 最適化が必要な画像（SVGなど）
│   ├── components/  # 共通部品（Header, Footer, Welcomeなど）
│   ├── layouts/     # 共通テンプレート（Layout.astro）
│   ├── library/     # 外部連携ロジック（microCMS設定など）
│   ├── pages/       # ページ構成（ファイル名がURLに対応）
│   │   ├── news/    # ニュース記事関連
│   │   ├── products/# 製品紹介関連
│   │   └── index.astro # トップページ
│   └── styles/      # CSS（global.cssなど）
├── .env             # 環境変数（※Gitには含めない）
├── astro.config.mjs # Astro本体設定
└── package.json     # プロジェクトの依存関係定義
```

##  開発用コマンド（Commands）

プロジェクトのルートディレクトリで実行してください。

| コマンド | 内容 |
| :--- | :--- |
| `npm install` | ライブラリのインストール（プロジェクト開始時やパッケージ追加時） |
| `npm run dev` | ローカル開発サーバーを起動します。 [http://localhost:4321](http://localhost:4321) で確認可能です。 |
| `npm run build` | 本番公開用のファイルをビルドし、`dist/` フォルダに出力します。 |
| `npm run preview` | ビルドした本番用ファイルをローカル環境でプレビュー確認します。 |

##  開発の流れ（Workflow）

### 1. セットアップ
* **環境変数の準備**: `.env` ファイルを新規作成し、microCMS の API キーを設定してください。
* **ライブラリの導入**: `npm install` を実行して、依存関係を最新の状態にします。

### 2. コンポーネント・ページの追加
* **共通パーツ**: 再利用する部品は `src/components/` に作成します。
* **新規ページ**: `src/pages/` に `.astro` ファイルを追加します（ファイル名がそのままURLになります）。
* **共通レイアウト**: `Layout.astro` でコンテンツを囲むことで、全ページ共通の `<head>` やナビゲーションが適用されます。

### 3. microCMS 連携
* **ロジックの集約**: データ取得処理は `src/library/microcms.ts` にまとめられています。
> [!IMPORTANT]
> **重要:** Vercel で公開する際は、Vercel の管理画面（Environment Variables）から API キーの設定が必須です。

---

## 🌐 デプロイと自動更新

* **GitHub への送信**: ターミナルで `git push origin main` を実行します。
* **公開プラットフォーム**: **Vercel** を使用してホスティングしています。
* **継続的デプロイ (CD)**: GitHub の `main` ブランチに push すると、Vercel が自動的に最新版をビルドし、数分以内に公開サイトへ反映します。