import 'dart:async';
import 'dart:io' show Platform;
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:fluro/fluro.dart';
import 'package:firebase_analytics/firebase_analytics.dart';
import 'package:firebase_analytics/observer.dart';
import 'package:firebase_crashlytics/firebase_crashlytics.dart';
import 'package:provider/provider.dart';
import 'package:nested/nested.dart';
import 'package:sentrei/app/app.dart';

void main() {
  Crashlytics.instance.enableInDevMode = true;
  // Pass all uncaught errors from the framework to Crashlytics.
  FlutterError.onError = Crashlytics.instance.recordFlutterError;

  runZoned(() {
    runApp(App());
  }, onError: Crashlytics.instance.recordError);

  if (Platform.isAndroid) {
    SystemUiOverlayStyle systemUiOverlayStyle =
        SystemUiOverlayStyle(statusBarColor: Colors.transparent);
    SystemChrome.setSystemUIOverlayStyle(systemUiOverlayStyle);
  }
}

class App extends StatelessWidget {
  final Widget home;
  static FirebaseAnalytics analytics = FirebaseAnalytics();
  static FirebaseAnalyticsObserver observer =
      FirebaseAnalyticsObserver(analytics: analytics);

  List<SingleChildWidget> _buildProviders(BuildContext context) {
    return [
      ChangeNotifierProvider(create: (_) => ThemeProvider()),
      ChangeNotifierProvider(create: (_) => PackageInfoProvider()),
    ];
  }

  App({this.home}) {
    final router = Router();
    Routes.configureRoutes(router);
    Application.router = router;
  }

  @override
  Widget build(BuildContext context) {
    return MultiProvider(
      providers: _buildProviders(context),
      child: Consumer<ThemeProvider>(
        builder: (_, provider, __) {
          return MaterialApp(
            title: 'sentrei',
            theme: provider.getTheme(),
            darkTheme: provider.getTheme(isDarkMode: true),
            themeMode: provider.getThemeMode(),
            onGenerateRoute: Application.router.generator,
            home: home ?? SplashPage(),
            navigatorObservers: [
              FirebaseAnalyticsObserver(analytics: analytics),
            ],
            builder: (context, child) {
              // Guarantee text size is not affected by phone system settings https://www.kikt.top/posts/flutter/layout/dynamic-text/
              return MediaQuery(
                data: MediaQuery.of(context).copyWith(textScaleFactor: 1.0),
                child: child,
              );
            },
          );
        },
      ),
    );
  }
}
