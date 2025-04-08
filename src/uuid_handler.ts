/**
 * UUIDを生成するハンドラモジュール
 */

/**
 * UUIDを生成する
 * Denoの組み込みCryptoを使用してv4 UUIDを生成します
 */
export function generateUuid(): string {
  // Cryptoの組み込みAPIを使用してUUIDv4を生成
  const uuid = crypto.randomUUID();
  return uuid;
}

