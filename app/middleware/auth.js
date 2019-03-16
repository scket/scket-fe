export default function ({store, route, redirect}) {
  // TODO: ルートへのアクセスはlogin/へ誘導しないようにする
  // TODO: Cookieがなければloginに遷移させる
  if (!store.state.user.isLoggedIn) {
    redirect(route.path);
  }
}
