import 'package:flutter/material.dart';
import 'dart:async';
import 'package:rxdart/rxdart.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/utils/utils.dart';

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

  void initApp() async {
    await SpUtil.getInstance();
  }

  void initSplash(StreamSubscription _subscription) {
    _subscription = Stream.value(1).delay(Duration(milliseconds: 3000)).listen(
      (_) {
        if (SpUtil.getBool(Commons.keyGuide, defValue: true)) {
          initial = true;
          SpUtil.putBool(Commons.keyGuide, false);
          loading = false;
        } else {
          loading = false;
        }
      },
    );
  }
}
