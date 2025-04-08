
# memo

## CursorにMCPサーバーを追加する

- Cursor Settings > MCP > Add new MCP serverで追加できる
  - 入力項目は
    - Name: サーバー名
    - Type
    - Command: コマンド
  - それぞれ実際には
    - Name: uuid
    - Type: command
    - Command: deno run --allow-net --allow-read --allow-env {絶対パス}/src/main.ts

## Cursorで追加したMCPサーバーを使う場合

- agentからuuid作ってなどの指示を出す
- 生成中に「Called MCP tool」というログが出る
- run toolをクリック
