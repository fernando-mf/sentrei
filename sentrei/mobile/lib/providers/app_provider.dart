import 'package:flutter/material.dart';

class AppProvider extends ChangeNotifier {
  bool _isLoading = false;
  bool _isInitial = false;

  bool get isLoading => _isLoading;
  bool get isInitial => _isInitial;

  set loading(bool value) {
    _isLoading = value;
    notifyListeners();
  }

  set initial(bool value) {
    _isInitial = value;
    notifyListeners();
  }
}
