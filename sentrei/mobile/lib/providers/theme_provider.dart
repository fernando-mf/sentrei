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
    String theme = SpUtil.getString(Commons.theme);
    if (theme.isNotEmpty && theme != themes[ThemeMode.system]) {
      notifyListeners();
    }
  }

  void setTheme(ThemeMode themeMode) {
    SpUtil.putString(Commons.theme, themes[themeMode]);
    notifyListeners();
  }

  ThemeMode getThemeMode() {
    String theme = SpUtil.getString(Commons.theme);
    switch (theme) {
      case 'Dark':
        return ThemeMode.dark;
      case 'Light':
        return ThemeMode.light;
      default:
        return ThemeMode.system;
    }
  }

  ThemeData getTheme({bool isDarkMode = false}) {
    return ThemeData(
      errorColor: isDarkMode ? Colours.red_dark : Colours.red,
      brightness: isDarkMode ? Brightness.dark : Brightness.light,
      primaryColor: isDarkMode ? Colours.app_main_dark : Colours.app_main,
      accentColor: isDarkMode ? Colours.app_main_dark : Colours.app_main,
      indicatorColor: isDarkMode ? Colours.app_main_dark : Colours.app_main,
      scaffoldBackgroundColor:
          isDarkMode ? Colours.bg_color_dark : Colours.bg_color_light,
      canvasColor:
          isDarkMode ? Colours.material_bg_dark : Colours.material_bg_light,
      textSelectionColor: Colours.app_main.withAlpha(70),
      textSelectionHandleColor: Colours.app_main,
      textTheme: TextTheme(
        subhead: isDarkMode ? Styles.textDark : Styles.text,
        body1: isDarkMode ? Styles.textDark : Styles.text,
        subtitle: isDarkMode ? Styles.textGrayDark12 : Styles.textGray12,
      ),
      inputDecorationTheme: InputDecorationTheme(
        hintStyle: isDarkMode ? Styles.textHint14 : Styles.textHintDark14,
      ),
      appBarTheme: AppBarTheme(
        elevation: 0.0,
        color: isDarkMode ? Colours.bg_color_dark : Colours.bg_color_light,
        brightness: isDarkMode ? Brightness.dark : Brightness.light,
      ),
      dividerTheme: DividerThemeData(
        color: isDarkMode ? Colours.line_dark : Colours.line,
        space: 0.6,
        thickness: 0.6,
      ),
      cupertinoOverrideTheme: CupertinoThemeData(
        brightness: isDarkMode ? Brightness.dark : Brightness.light,
      ),
    );
  }
}
