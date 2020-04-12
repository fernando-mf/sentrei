import 'package:flutter/material.dart';

class AppProvider extends ChangeNotifier {
  bool _isLoading;
  bool get isLoading => _isLoading;

  set loading(bool value) {
    _isLoading = value;
    notifyListeners();
  }
}
