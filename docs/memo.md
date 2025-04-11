# memo

## Cursor に MCP サーバーを追加する

- Cursor Settings > MCP > Add new MCP server で追加できる
  - 入力項目は
    - Name: サーバー名
    - Type
    - Command: コマンド
  - それぞれ実際には
    - Name: uuid
    - Type: command
    - Command: deno run --allow-net --allow-read --allow-env {絶対パス}/src/main.ts

## Cursor で追加した MCP サーバーを使う場合

- agent から uuid 作ってなどの指示を出す
- 生成中に「Called MCP tool」というログが出る
- run tool をクリック

## VSCode と copilot の場合

`.vscode/mcp.json`に設定

```json
{
  "servers": {
    "uuid-generator": {
      "type": "stdio",
      "command": "deno",
      "args": [
        "run",
        "--allow-net",
        "--allow-read",
        "--allow-env",
        "/{絶対パス}/deno-tiny-mcp/src/main.ts"
      ]
    }
  }
}
```
