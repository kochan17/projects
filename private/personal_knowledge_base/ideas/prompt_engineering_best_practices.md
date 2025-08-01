# プロンプトエンジニアリング・ベストプラクティス

このドキュメントは、生成AIから高品質な応答を引き出すためのプロンプトエンジニアリングのノウハウをまとめたものです。

## 1. 基本的な考え方

- **具体的かつ明確に指示する**: AIが推測しなくても済むように、曖昧な表現を避ける。
- **背景情報と目的を伝える**: 何のためのタスクなのか、どのような文脈なのかを伝えることで、AIの理解が深まる。
- **期待するアウトプット形式を指定する**: 箇条書き、表形式、特定の文字数など、望む出力の形を明確にする。
- **役割を与える (ロールプレイング)**: 「あなたはプロの編集者です」のように役割を指定することで、応答のトーンや専門性をコントロールする。

## 2. 日本語特有の課題と対策 (Qiita記事より)

日本語は主語の省略が多く、文脈依存度が高い（ハイコンテクスト）言語であるため、AIとの対話で誤解が生じやすい。

- **曖昧さを排除する**: 「〜についてどう思いますか？」のような漠然とした質問ではなく、「〜のデータを分析し、〜を特定してください」のように具体的に指示する。
- **背景情報を補足する**: AIが文脈を理解できるように、必要な情報を明示的に提供する。
- **構造化された指示**: タスクを段階的に示し、AIが何をすべきかを明確にガイドする。

参考: [なぜ日本人は生成AIのプロンプト作成に苦労するのか: 日本語の特性と文化的要因](https://qiita.com/hisaho/items/1e3aba7e0b1b43e44dc5)

## 3. 高度なテクニック (OpenAI & Anthropicより)

### OpenAI Academy の推奨プラクティス
- **カスタム指示の活用**: 繰り返し使う指示や好みの応答スタイルを事前に設定しておく。
- **反復的な改善**: 一度で完璧を目指さず、AIの応答を見ながらプロンプトを少しずつ改善していく。

参考: [OpenAI Academy - Mastering Prompts](https://academy.openai.com/public/content)

### Anthropic Claude の推奨プラクティス
- **例を使用する (Few-shot/Multi-shotプロンプティング)**: 良い応答の例をいくつか示すことで、AIに出力のパターンを学習させる。
- **思考の連鎖 (Chain-of-Thought)**: 複雑な問題に対して、「ステップバイステップで考えてください」と促し、推論のプロセスを記述させることで、最終的な回答の精度を高める。
- **XMLタグの使用**: 指示、例、出力箇所などを`<example>`や`<document>`のようなタグで囲み、プロンプトの構造を明確にする。
- **応答の事前入力**: AIに続けてほしい文章の冒頭部分をプロンプトに含めることで、望む形式で応答を開始させる。

参考: [Anthropic Claude - プロンプトエンジニアリングの概要](https://docs.anthropic.com/ja/docs/build-with-claude/prompt-engineering/overview)

## 4. 対話の進め方
とりあえずこれだけ守っていれば、そんなに回答制度が落ちることは無くなると思います。
- **一度にすべてを送らない (段階的指示)**:
    - 情報を小分けにして送信することで、AIの文脈理解を助ける。
    - 意図のズレを早期に発見し、対話の途中で方向修正しやすくなる。
    - まずは目的や背景を伝え、AIの理解を確認してから、具体的なタスクを追加していく。 