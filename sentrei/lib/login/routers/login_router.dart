import 'package:fluro/fluro.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/login/login.dart';

class LoginRouter implements IRouterProvider {
  static String loginPage = '/login';

  @override
  void initRouter(Router router) {
    router.define(loginPage,
        handler: Handler(handlerFunc: (_, params) => LoginPage()));
  }
}
