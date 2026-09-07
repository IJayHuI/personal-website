/**
 * 认证相关类型定义
 */

// 登录请求载荷
export interface LoginPayload {
  password: string
}

// 认证会话（Edge Function 返回）
export interface Session {
  token: string         // 服务端签发的 token
  expiresAt: number     // 过期时间戳（ms）
}
