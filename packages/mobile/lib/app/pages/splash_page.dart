import 'dart:async';
import 'package:flutter/material.dart';
import 'package:flutter_slidable/flutter_slidable.dart';
import 'package:provider/provider.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/providers/providers.dart';
import 'package:sentrei/utils/utils.dart';
import 'package:sentrei/widgets/widgets.dart';

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
      Provider.of<ThemeProvider>(context, listen: false).syncTheme();
    });
  }

  @override
  void dispose() {
    _subscription?.cancel();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    final app = Provider.of<AppProvider>(context);

    return Material(
      color: ThemeUtil.getBackgroundColor(context),
      child: app.isLoading
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
