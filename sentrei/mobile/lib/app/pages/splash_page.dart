import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:provider/provider.dart';
import 'package:rxdart/rxdart.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/utils/utils.dart';
import 'package:sentrei/widgets/widgets.dart';

class SplashPage extends StatefulWidget {
  @override
  _SplashPageState createState() => _SplashPageState();
}

class _SplashPageState extends State<SplashPage> {
  bool _isLoading = true;
  StreamSubscription _subscription;

  @override
  void initState() {
    super.initState();
    WidgetsBinding.instance.addPostFrameCallback((_) async {
      await SpUtil.getInstance();
      // Because SpUtil is not initialized, MaterialApp obtains the default theme configuration. Sync here
      Provider.of<ThemeProvider>(context, listen: false).syncTheme();
      _initSplash();
    });
  }

  @override
  void dispose() {
    _subscription?.cancel();
    super.dispose();
  }

  void _initGuide() {
    setState(() {
      _isLoading = false;
    });
  }

  void _initSplash() {
    _subscription =
        Stream.value(1).delay(Duration(milliseconds: 3000)).listen((_) {
      if (SpUtil.getBool(Commons.keyGuide, defValue: true)) {
        SpUtil.putBool(Commons.keyGuide, false);
        _initGuide();
      } else {
        _goLogin();
      }
    });
  }

  _goLogin() {
    NavigatorUtil.push(
      context,
      LoginRouter.loginPage,
      replace: true,
    );
  }

  @override
  Widget build(BuildContext context) {
    return Material(
      color: ThemeUtil.getBackgroundColor(context),
      child: _isLoading
          ? FractionallyAlignedSizedBox(
              heightFactor: 0.3,
              widthFactor: 0.33,
              leftFactor: 0.33,
              bottomFactor: 0,
              child: LoadAssetImage('logo'),
            )
          : OnboardingPage(),
    );
  }
}
