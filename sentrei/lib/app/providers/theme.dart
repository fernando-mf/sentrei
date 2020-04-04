import 'dart:ui';
import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/utils/utils.dart';

/// References:
/// https://github.com/stefanJi/Flutter4GitLab/blob/master/lib/providers/theme.dart
class ThemeProvider extends ChangeNotifier {
  static const Map<ThemeMode, String> themes = {
    ThemeMode.dark: 'Dark',
    ThemeMode.light: 'Light',
    ThemeMode.system: 'System'
  };

  void syncTheme() {
    String theme = SpUtil.getString(Common.theme);
    if (theme.isNotEmpty && theme != themes[ThemeMode.system]) {
      notifyListeners();
    }
  }

  void setTheme(ThemeMode themeMode) {
    SpUtil.putString(Common.theme, themes[themeMode]);
    notifyListeners();
  }

  ThemeMode getThemeMode() {
    String theme = SpUtil.getString(Common.theme);
    switch (theme) {
      case 'Dark':
        return ThemeMode.dark;
      case 'Light':
        return ThemeMode.light;
      default:
        return ThemeMode.system;
    }
  }

  getTheme({bool isDarkMode = false}) {
    return ThemeData(
        errorColor: isDarkMode ? Colour.dark_red : Colour.red,
        brightness: isDarkMode ? Brightness.dark : Brightness.light,
        primaryColor: isDarkMode ? Colour.dark_app_main : Colour.app_main,
        accentColor: isDarkMode ? Colour.dark_app_main : Colour.app_main,

        /// Tab indicator color
        indicatorColor: isDarkMode ? Colour.dark_app_main : Colour.app_main,

        /// Page background color
        scaffoldBackgroundColor:
            isDarkMode ? Colour.dark_bg_color : Colour.white,

        /// Mainly used for Material background color
        canvasColor: isDarkMode ? Colour.dark_material_bg : Colour.white,

        /// Text selection color (input box copy and paste menu)
        textSelectionColor: Colour.app_main.withAlpha(70),
        textSelectionHandleColor: Colour.app_main,
        textTheme: TextTheme(
          /// TextField input text color
          subhead: isDarkMode ? Style.textDark : Style.text,

          /// Text text style
          body1: isDarkMode ? Style.textDark : Style.text,
          subtitle: isDarkMode ? Style.textDarkGray12 : Style.textGray12,
        ),
        inputDecorationTheme: InputDecorationTheme(
          hintStyle: isDarkMode ? Style.textHint14 : Style.textDarkGray14,
        ),
        appBarTheme: AppBarTheme(
          elevation: 0.0,
          color: isDarkMode ? Colour.dark_bg_color : Colour.white,
          brightness: isDarkMode ? Brightness.dark : Brightness.light,
        ),
        dividerTheme: DividerThemeData(
            color: isDarkMode ? Colour.dark_line : Colour.line,
            space: 0.6,
            thickness: 0.6),
        cupertinoOverrideTheme: CupertinoThemeData(
          brightness: isDarkMode ? Brightness.dark : Brightness.light,
        ));
  }
}
