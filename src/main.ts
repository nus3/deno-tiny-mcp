import { McpServer } from "npm:@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "npm:@modelcontextprotocol/sdk/server/stdio.js";
import { generateUuid } from "./uuid_handler.ts";

/**
 * UUIDを生成するMCPサーバーの実装
 */
async function main() {
  console.log("UUID生成MCPサーバーを起動しています...");

  // サーバーを初期化
  const server = new McpServer({
    name: "uuid-generator",
    version: "1.0.0",
  });

  // UUID生成ツールを追加
  server.tool(
    "generate-uuid",
    "ランダムなUUIDを生成します",
    () => {
      // UUID生成処理を呼び出し
      const uuid = generateUuid();
      return {
        content: [{ type: "text", text: uuid }],
      };
    },
  );

  // トランスポートの接続
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.log("UUID生成MCPサーバーが起動しました");
}

// メイン処理の実行
main().catch((error) => {
  console.error("エラーが発生しました:", error);
  Deno.exit(1);
});
