import 'package:flutter/material.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/routers/routers.dart';
import 'package:sentrei/utils/utils.dart';

class Routes {
  static void sendNavigationEventToFirebase(String path) {
    if (path != null && path.isNotEmpty) {
      AnalyticsUtil().analytics.setCurrentScreen(screenName: path);
    }
  }

  static Route onGenerateRoute(RouteSettings settings) {
    switch (settings.name) {
      case RouteNames.appPage:
        return NativeTransition<bool>(
          builder: (BuildContext context) => AppPage(),
        );
      case RouteNames.onboardingPage:
        return NativeTransition<bool>(
          builder: (BuildContext context) => OnboardingPage(),
        );
      case RouteNames.splashPage:
        return NativeTransition<bool>(
          builder: (BuildContext context) => SplashPage(),
        );
      case RouteNames.loginPage:
        return NativeTransition<bool>(
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
          child: Text('Unknown Route ${settings.name.split('/')[1]} ...'),
        ),
      ),
    );
  }
}
