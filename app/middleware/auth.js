export default function ({store, route, redirect}) {
  // TODO: Cookieがなければloginに遷移させる
  const isLoggedIn = store.getters['user/isLoggedIn'];
  if (!isLoggedIn) {
    return redirect('/login', {link_to: route.path})
  }
}
