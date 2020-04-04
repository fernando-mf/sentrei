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
      errorColor: isDarkMode ? Colour.red_dark : Colour.red,
      brightness: isDarkMode ? Brightness.dark : Brightness.light,
      primaryColor: isDarkMode ? Colour.app_main_dark : Colour.app_main,
      accentColor: isDarkMode ? Colour.app_main_dark : Colour.app_main,
      indicatorColor: isDarkMode ? Colour.app_main_dark : Colour.app_main,
      scaffoldBackgroundColor:
          isDarkMode ? Colour.bg_color_dark : Colour.bg_color_light,
      canvasColor:
          isDarkMode ? Colour.material_bg_dark : Colour.material_bg_light,
      textSelectionColor: Colour.app_main.withAlpha(70),
      textSelectionHandleColor: Colour.app_main,
      textTheme: TextTheme(
        subhead: isDarkMode ? Style.textDark : Style.text,
        body1: isDarkMode ? Style.textDark : Style.text,
        subtitle: isDarkMode ? Style.textGrayDark12 : Style.textGray12,
      ),
      inputDecorationTheme: InputDecorationTheme(
        hintStyle: isDarkMode ? Style.textHint14 : Style.textHintDark14,
      ),
      appBarTheme: AppBarTheme(
        elevation: 0.0,
        color: isDarkMode ? Colour.bg_color_dark : Colour.bg_color_light,
        brightness: isDarkMode ? Brightness.dark : Brightness.light,
      ),
      dividerTheme: DividerThemeData(
        color: isDarkMode ? Colour.line_dark : Colour.line,
        space: 0.6,
        thickness: 0.6,
      ),
      cupertinoOverrideTheme: CupertinoThemeData(
        brightness: isDarkMode ? Brightness.dark : Brightness.light,
      ),
    );
  }
}
