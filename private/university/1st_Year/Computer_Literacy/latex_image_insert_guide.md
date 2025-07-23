# LaTeXレポートに画像を貼り付ける方法ガイド

## 1. 概要
LaTeXで作成するレポートに、スクリーンショットや図などの画像ファイルを貼り付ける（埋め込む）方法をまとめます。主に大学の課題提出や技術レポートを想定しています。

## 2. 必要な準備
- LaTeXファイル（例：assignment14.tex）
- 挿入したい画像ファイル（例：top.png, login.png など）
- LaTeXコンパイル環境（platex, dvipdfmx など）

## 3. 画像ファイルの配置
- 画像ファイルは**LaTeXファイルと同じディレクトリ**に置くのが基本です。
- 例：assignment14.tex と top.png が同じフォルダ内にある状態
- サブフォルダを使う場合は、パスを正しく指定してください（例：images/top.png）。

## 4. LaTeXでの画像挿入コマンド
- LaTeXファイルの冒頭で graphicx パッケージを読み込みます：
  ```latex
  \usepackage[dvipdfmx]{graphicx}
  ```
- 画像を挿入したい場所に以下のように記述します：
  ```latex
  \begin{figure}[htbp]
  \begin{center}
  \includegraphics[width=12cm]{top.png}
  \caption{トップページ（日本語）の表示例}
  \end{center}
  \end{figure}
  ```
- `width=12cm` の部分で画像サイズを調整できます。
- `{top.png}` の部分は画像ファイル名に合わせて変更してください。

## 5. 画像サイズや配置の調整
- `width=8cm` や `width=10cm` など、適宜サイズを調整できます。
- `\begin{center} ... \end{center}` で画像を中央揃えにできます。
- 複数画像を並べたい場合は、minipage環境などを活用します。

## 6. 画像形式と注意点
- dvipdfmxを使う場合、**PNG, JPEG, PDF, EPS**などが利用できます。
- 画像ファイル名には**日本語やスペースを使わない**でください。
- 画像が表示されない場合は、ファイル名・拡張子・パスを再確認してください。

## 7. LaTeX→PDF生成手順
1. ターミナルでLaTeXファイルのあるディレクトリに移動
2. 以下のコマンドを順に実行
   ```sh
   platex assignment14.tex
   platex assignment14.tex
   dvipdfmx assignment14.dvi
   ```
3. 生成されたPDF（assignment14.pdf）を開いて画像が正しく表示されているか確認

## 8. 参考例（サンプルコード）
```latex
\documentclass[12pt,a4j]{jarticle}
\usepackage[dvipdfmx]{graphicx}
\begin{document}

\section{サンプル画像の挿入}

\begin{figure}[htbp]
\begin{center}
\includegraphics[width=10cm]{top.png}
\caption{トップページの表示例}
\end{center}
\end{figure}

\end{document}
``` 