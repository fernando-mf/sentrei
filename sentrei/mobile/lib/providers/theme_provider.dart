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
      primaryColor: isDarkMode ? Colours.app_main_dark : Colours.app_main,
    );
  }
}
