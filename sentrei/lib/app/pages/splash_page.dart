import 'dart:async';
import 'package:flutter/material.dart';

import 'package:provider/provider.dart';
import 'package:rxdart/rxdart.dart';

import 'package:sentrei/app/app.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/utils/utils.dart';

class SplashPage extends StatefulWidget {
  @override
  _SplashPageState createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  StreamSubscription _subscription;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      await SpUtil.getInstance();
      // Because SpUtil is not initialized, MaterialApp obtains the default theme configuration. Sync here
      Provider.of<ThemeProvider>(context, listen: false).syncTheme();
      if (SpUtil.getBool(Common.keyGuide, defValue: true)) {
        // TODO: Change to initial screen
        _initSplash();
      }
      _initSplash();
    });
  }

  @override
  void dispose() {
    _subscription?.cancel();
    super.dispose();
  }

  void _initSplash() {
    _subscription =
        Stream.value(1).delay(Duration(milliseconds: 300)).listen((_) {
      if (SpUtil.getBool(Common.keyGuide, defValue: true)) {
        SpUtil.putBool(Common.keyGuide, false);
        // TODO: Change to initial screen
        _goLogin();
      } else {
        _goLogin();
      }
    });
  }

  _goLogin() {
    NavigatorUtils.push(
      context,
      LoginRouter.loginPage,
      replace: true,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: ThemeUtil.getBackgroundColor(context),
      child: Text('Splash Page'),
    );
  }
}
