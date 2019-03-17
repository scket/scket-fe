export default function ({store, route, redirect}) {
  // TODO: Cookieがなければloginに遷移させる
  const isLoggedIn = store.getters['user/isLoggedIn'];
  if (!isLoggedIn) {
    store.commit('user/setReqPath', route.path);
    return redirect('/login')
  }
}
