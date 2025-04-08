
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


