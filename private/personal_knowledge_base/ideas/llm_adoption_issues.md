# LLM普及の壁：なぜ多くの人は生成AIを「使わない」のか？

これは、GPTやGeminiに代表される生成AIの利用率が伸び悩む理由についての考察メモです。根本的な原因として「テキストコミュニケーションの壁」があるのではないか、という仮説に基づいています。

---

## "使えない"を分解すると何が見えるか

**─ テキストチャット型LLMが広がり切らない理由の深掘りメモ ─**

### 1. 入口でつまずく ―― **インプット（問い）の壁**

| 典型症状              | 背景にあるもの                                                            |
| ----------------- | ------------------------------------------------------------------ |
| "どう聞けばいいか分からない"   | ● 自分の目的を言語化するメタ認知力が低い  <br>● 専門語・抽象概念の語彙不足                         |
| "書いたけど思った答えが返らない" | ● LLM の感度が高く"プロンプトの微差"に結果が左右される <br>● *Trial & Error* する前に徒労感が先に立つ |

*調査メモ*

* 企業側でも **"プロンプト設計"が最重要スキル** と答えた経営者が53.7%で最多 ([simform.com][1])
* デジタル基礎技能がない成人 8.5 百万人（英国）に AI まで届かせるには"AIリテラシー"以前の支援が必要と報告 ([goodthingsfoundation.org][2])

---

### 2. 出力をさばけない ―― **アウトプット評価の壁**

| 症状                  | 背景                                                                  |
| ------------------- | ------------------------------------------------------------------- |
| "合ってるか確証がないので怖い"    | ● ハルシネーションの存在を知っているが検証手段を持たない <br>● 情報リテラシー教育が追いついていない（検索と参照の区別が曖昧） |
| "何となく便利だけど本番では使えない" | ● ファクトチェック/再構成に手間がかかり"時短"にならない                                      |

* 大学調査でも学生の3大懸念は"誤情報"「検証負荷」「思考力低下」 ([arxiv.org][3])
* 企業では*全出力を人がレビュー*している割合は27%のみ＝品質担保フローが整備途上 ([mckinsey.com][4])

---

### 3. ワークフローに溶け込まない ―― **組織・ツール接続の壁**

| 観測点                  | 何が問題か                                               |
| -------------------- | --------------------------------------------------- |
| **SMBの36%は無料プラン止まり** | ROI がまだ"お試し"レベル。課金＝本格導入の心理的障壁が残る ([axios.com][5])  |
| **"成熟している"企業は1 %**   | LLM の"点"利用から業務プロセス再設計へ踏み出せていない  ([mckinsey.com][6]) |
| **リーダーシップ不在**        | 変革推進より"ガバナンス・リスク回避"優先でスピードが落ちる ([mckinsey.com][6])  |

---

### 4. 心理・文化要因 ―― **人間側のブレーキ**

1. **文章コンプレックス**

   * 書く＝"正解を求められる行為"という思い込み。失点を恐れて発話しない。
2. **"賢く見えたい"バイアス**

   * 拙いプロンプトを晒すのが恥ずかしい → 使わずに済ませる。
3. **権威依存／指示待ち文化**

   * "AI 利用ガイドライン"が出るまでは動かない、という同調圧力。
4. **置き換え不安**

   * 使うほど仕事が奪われるのでは？という曖昧な恐怖。

---

### 5. 技術側の未熟さ ―― **UX・信頼性の壁**

| 技術課題               | 利用感への影響                  |
| ------------------ | ------------------------ |
| 出力の一貫性不足 / 再現性低い   | "黒魔法"に見えて運用しづらい          |
| モダリティの分断（テキスト限定UI） | 口頭・画像入力が弱いと非タイピング層を取りこぼす |
| データ/IPリスク対処が不透明    | 機密保持が必要な現場ではブロックが掛かる     |

---

## まとめ：**"Prompt Literacy → AI Literacy → Workflow Literacy"の 3段階ギャップ**

1. **Prompt Literacy**
   "頭の中のモヤ"を言葉にする力
2. **AI Literacy**
   出力の信頼度を見極め、再利用する力
3. **Workflow Literacy**
   自分／組織の仕事フローへ組み込み価値を生む力

各段階で **インプット支援・検証支援・統合支援** を設計しない限り、"使えない"は残り続く――というのが現状のボトルネックです。

---

### 次に掘りたい観点は？

* 教育研修で"Prompt Literacy"をどう伸ばすのが効率的か
* 音声・画像インターフェース導入時の運用コスト試算
* 社内ポリシー作りとリスクマネジメントのベストプラクティス

気になるテーマを教えてもらえれば、さらに深掘りします！

[1]: https://www.simform.com/blog/the-state-of-generative-ai/ "The 2024 Executive Generative AI Survey"
[2]: https://www.goodthingsfoundation.org/policy-and-research/research-and-evidence/research-2024/ai-literacy?utm_source=chatgpt.com "Developing AI Literacy With People Who Have Low Or No Digital Skills"
[3]: https://arxiv.org/html/2505.02198v1?utm_source=chatgpt.com "Student Perspectives on the Benefits and Risks of AI in Education"
[4]: https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai "The State of AI: Global survey | McKinsey"
[5]: https://www.axios.com/2025/06/20/small-business-ai-use "Small businesses adopt generative AI, but aren't spending much: Survey"
[6]: https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work "AI in the workplace: A report for 2025 | McKinsey"

---
---

## データで見る日本のAI利用率の現状

日本における生成AI（GPT／Geminiなど）の**「利用していない人」の割合**は、およそ次のとおりです：

### 🧭 日本の個人利用：非利用率

* 総務省「情報通信白書（2024年）」によると、日本の生成AI個人利用率は**9.1％**。
  → **非利用者は約** 90.9 ％ ([aismiley.co.jp][7])。
  利用しない理由としては、"使い方がわからない"「日常に必要ない」との回答が多く、人生の中で実際に使っている人は非常に少数派です ([aismiley.co.jp][7])。

* BloombergやNippon.com報道の調査（2023年3月）によれば、ChatGPTを**使ったことがある人はわずか4.8％**で、**70％が未認知**でした ([nippon.com][8])。

---

### 🎓 学生の利用経験と未利用の状態

* 国内大学生（2023年調査）では、**ジェネレーティブAIを含めた利用経験者が46.7％**。
  → 逆に**未経験者は53.3％**で、およそ半数 ([notta.ai][9])。

* 若年層（18歳）に限定すると、知っている人は90％程度いますが、「使ったことがない」層のうち**約60％は使ってみたい**と回答 ([nippon-foundation.or.jp][10])。

---

### 📊 要点まとめ（日本の利用していない人）

| 対象         | 非利用率                        |
| ---------- | --------------------------- |
| 一般成人（個人）   | 約90.9％（非利用）                 |
| ChatGPT経験者 | 約95％が未体験 or 非利用（4.8％のみ経験あり） |
| 大学生        | 約53％が未使用                    |
| 若年層（18歳）   | 経験なしのうち約60％は試したい意向あり        |

---

### 🔍 考察：なぜ「利用しない」のか？

* **認知の低さ**：ChatGPTすら知らない人が多く、情報格差が大きい ([monoist.itmedia.co.jp][11], [the-decoder.com][12])。
* **習得コストの高さ**："どう使えばいいか分からない"が主な理由 。
* **必要性の実感不足**：日常生活・業務において「役立つ感じがしない」という回答も散見されます ([prtimes.jp][13])。

---

### ✅ 次の調査で狙える切り口

* **年代別の非利用者構成**（20代 → 60代以上まで）
* **世帯／職業別の非利用率**
* **非利用者の意欲・抵抗感分析**（「試してみたい」 vs.「抵抗感がある」）
* **認知 vs 実利用のギャップ**（知ってはいるけど使っていない層の割合）

---

この結果を踏まえて、次に深掘りしたい領域はどちらでしょうか？

* 例えば「世代・年代別の非利用率を出す」「非利用者の意識・阻害要因を併せてリサーチする」など、ご希望があれば教えてください！

[7]: https://aismiley.co.jp/ai_news/soumu-survey-on-generative-ai-utilization/?utm_source=chatgpt.com "生成AI利活用について国内外で総務省が調査。日本での利用率は9 ..."
[8]: https://www.nippon.com/en/japan-data/h01623/?utm_source=chatgpt.com "ChatGPT Hype Slow to Reach Japan - nippon.com"
[9]: https://www.notta.ai/en/blog/chatgpt-statistics?utm_source=chatgpt.com "100+ Incredible ChatGPT Statistics & Facts in 2025 - Notta"
[10]: https://www.nippon-foundation.or.jp/journal/2025/110789/eighteen_survey?utm_source=chatgpt.com "生成AIを自然に使いこなす若者、不自然に向き合い使えない大人"
[11]: https://monoist.itmedia.co.jp/mn/articles/2501/30/news096.html?utm_source=chatgpt.com "60％が生成AIを業務で利用、そのうち85％が「人に頼らずAIでいい ..."
[12]: https://the-decoder.com/few-people-use-generative-ai-daily-despite-chatgpt-hype-study-finds/?utm_source=chatgpt.com "Few people use generative AI daily despite ChatGPT hype, study finds"
[13]: https://prtimes.jp/main/html/rd/p/000000048.000037237.html?utm_source=chatgpt.com ""AIでいいや"が8割超！'2025年最新・企業の生成AI利用実態'から ..." 