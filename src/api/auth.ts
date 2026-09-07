import { supabase } from './supabase'
import type { LoginPayload, Session } from '../types/auth'

/**
 * 调用 Supabase Edge Function `verify-password` 验证密码
 *
 * 阶段 2：接口签名写好，但 Edge Function 还没实现，login() 会失败
 * 阶段 4 实现 LoginView 时再处理错误
 *
 * 前向兼容：未来要加账号密码，改成 login(username, password) 即可
 */
export async function verifyPassword(payload: LoginPayload): Promise<Session> {
  const { data, error } = await supabase.functions.invoke<Session>(
    'verify-password',
    { body: { password: payload.password } }
  )
  if (error) throw error
  return data as Session
}
