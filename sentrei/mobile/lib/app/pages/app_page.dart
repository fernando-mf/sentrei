import 'package:flutter/material.dart';
import 'package:provider/provider.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/providers/providers.dart';

/// Default [AppPage] for initializing the app.
///
/// Requiires [onGenerateRoute] for routing.
/// Requires [navigatorObservers] for analytics.
class AppPage extends StatelessWidget {
  const AppPage({
    Key key,
    @required this.onGenerateRoute,
    @required this.navigatorObservers,
  })  : assert(navigatorObservers != null),
        super(key: key);
  final RouteFactory onGenerateRoute;
  final List<NavigatorObserver> navigatorObservers;

  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (_, provider, __) {
        return MaterialApp(
          title: 'sentrei',
          theme: provider.getTheme(),
          darkTheme: provider.getTheme(isDarkMode: true),
          themeMode: provider.getThemeMode(),
          home: SplashPage(),
          onGenerateRoute: Application.router.generator,
          navigatorObservers: navigatorObservers,
        );
      },
    );
  }
}
