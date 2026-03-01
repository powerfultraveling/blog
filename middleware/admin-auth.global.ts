export default defineNuxtRouteMiddleware(async (to) => {
  console.log('admin-auth-global', to)
  const path = to.path
  const isAdmin = path.includes('/admin')
  const isLoginPage = path.includes('/admin/login')
  if (!isAdmin || isLoginPage) return

  const supabase = useSupabaseClient()

  const {
    data: { session }
  } = await supabase.auth.getSession()
  console.log('session chakes', session)
  if (!session) {
    return navigateTo('/admin/login')
  }
})
