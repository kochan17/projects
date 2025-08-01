# 学校サーバーへのWebサイト公開ガイド

## 1. 概要
学校（大学）のサーバー（例：solサーバ）に自作のWebサイトを公開するための手順をまとめます。主にMacユーザー向けですが、他のOSでも基本的な流れは同じです。

## 2. 必要な準備
- サーバーのユーザーID・パスワード（例：i2524092）
- 公開したいWebサイトのファイル一式（HTML, CSS, 画像など）
- Macのターミナル（または他OSのSSH/SCPクライアント）

## 3. サーバーへのログイン方法
1. ターミナルを開き、以下のコマンドでサーバーにSSH接続します。
   ```sh
   ssh ユーザーID@sol.edu.cc.uec.ac.jp
   ```

2. パスワードを入力してログインします。

## 4. public_htmlディレクトリの作成・確認
1. ログイン後、ホームディレクトリで以下を実行し、public_htmlディレクトリがあるか確認します。
   ```sh
   ls
   ```
2. もし無ければ、以下で作成します。
   ```sh
   mkdir public_html
   chmod 755 public_html
   ```

## 5. ファイルのアップロード方法（scpの使い方）
1. サーバーからログアウトし、**自分のMacのターミナル**に戻ります。
2. Webサイトのフォルダがある場所を確認します。
   例：
   `/Users/ユーザー名/Desktop/your-website-folder`
3. 以下のコマンドでサーバーにアップロードします。
   ```sh
   scp -r /Users/ユーザー名/Desktop/your-website-folder ユーザーID@sol.edu.cc.uec.ac.jp:~/public_html/
   ```

4. パスワードを入力し、転送が完了するまで待ちます。

## 6. パーミッションの設定
1. サーバーに再度ログインします。
2. public_htmlディレクトリに移動し、アップロードしたフォルダのパーミッションを設定します。
   ```sh
   cd ~/public_html
   chmod -R 755 Netflix-Cloning
   ```

## 7. 公開URLの確認方法
1. ブラウザで以下のURLにアクセスし、Webサイトが表示されるか確認します。
   ```
   http://www.edu.cc.uec.ac.jp/~ユーザーID/app-name/index.html
   ```

2. 正しく表示されない場合は、ファイル名やパーミッション、パスを再確認してください。
