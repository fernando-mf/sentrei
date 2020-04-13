import 'package:flutter/material.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/routers/routers.dart';
import 'package:sentrei/utils/utils.dart';


class Routes {
  static dynamic route() {
    return {
      '/': (BuildContext context) => SplashPage(),
    };
  }

  static void sendNavigationEventToFirebase(String path) {
    if (path != null && path.isNotEmpty) {
      AnalyticsUtil().analytics.setCurrentScreen(screenName: path);
    }
  }

  static Route onGenerateRoute(RouteSettings settings) {
    final List<String> pathElements = settings.name.split('/');
    if (pathElements[0] != '' || pathElements.length == 1) {
      return null;
    }
    switch (pathElements[1]) {

      /// App
      case RouteNames.appPage:
        return DefaultTransition<bool>(
          builder: (BuildContext context) => AppPage(),
        );
      case RouteNames.onboardingPage:
        return DefaultTransition<bool>(
          builder: (BuildContext context) => OnboardingPage(),
        );
      case RouteNames.splashPage:
        return DefaultTransition<bool>(
          builder: (BuildContext context) => SplashPage(),
        );

      /// Login
      case RouteNames.loginPage:
        return DefaultTransition<bool>(
          builder: (BuildContext context) => LoginPage(),
        );
      default:
        return onUnknownRoute(RouteSettings(name: '/Feature'));
    }
  }

  static Route onUnknownRoute(RouteSettings settings) {
    return MaterialPageRoute(
      builder: (_) => Scaffold(
        body: Center(
          child: Text('${settings.name.split('/')[1]} ...'),
        ),
      ),
    );
  }
}
