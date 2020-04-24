import 'package:flutter/material.dart';
import 'package:flutter_localizations/flutter_localizations.dart';
import 'package:provider/provider.dart';
import 'package:sentrei/i18n/i18n.dart';
import 'package:sentrei/providers/providers.dart';
import 'package:sentrei/routers/routers.dart';

/// Default [AppPage] for initializing the app.
class AppPage extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Consumer<ThemeProvider>(
      builder: (_, provider, __) {
        return MaterialApp(
          title: 'sentrei',
          theme: provider.getTheme(),
          darkTheme: provider.getTheme(isDarkMode: true),
          themeMode: provider.getThemeMode(),
          initialRoute: RouteNames.splashPage,
          onGenerateRoute: (settings) => Routes.onGenerateRoute(settings),
          onUnknownRoute: (settings) => Routes.onUnknownRoute(settings),
          localizationsDelegates: [
            AppLocalizationDelegate(),
            GlobalMaterialLocalizations.delegate,
            GlobalWidgetsLocalizations.delegate,
          ],
          supportedLocales: [
            Locale('en', ''),
            Locale('zh', ''),
            Locale('ja', ''),
          ],
        );
      },
    );
  }
}
