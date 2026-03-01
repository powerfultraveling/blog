import type { User } from '@supabase/supabase-js'

export const useAuthStore = () => {
  const supabase = useSupabaseClient()
  const user = useSupabaseUser()

  const isLoggedIn = computed(() => !!user.value)

  const authLoading = useState<boolean>('auth-loading', () => false)
  const authError = useState<string | null>('auth-error', () => null)

  const login = async (email: string, password: string) => {
    authLoading.value = true
    authError.value = null
    const { error } = await supabase.auth.signInWithPassword({ email, password })
    authLoading.value = false
    if (error) {
      authError.value = error.message
      return { error }
    }
    return {}
  }

  const logout = async (options?: { redirectTo?: string }) => {
    authError.value = null
    await supabase.auth.signOut()
    if (options?.redirectTo) {
      await navigateTo(options.redirectTo)
    }
  }

  const clearError = () => {
    authError.value = null
  }

  return {
    user: user as Ref<User | null>,
    isLoggedIn,
    authLoading,
    authError,
    login,
    logout,
    clearError
  }
}
