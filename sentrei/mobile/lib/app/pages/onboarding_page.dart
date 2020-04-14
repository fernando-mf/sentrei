import 'package:flutter/material.dart';
import 'package:liquid_swipe/liquid_swipe.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/routers/routers.dart';
import 'package:sentrei/widgets/widgets.dart';

class OnboardingPage extends StatefulWidget {
  @override
  _OnboardingPageState createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  int page = 0;

  UpdateType updateType;

  final List<Container> pages = [
    VentureSection(),
    PlanSection(),
    ProgressSection(),
  ];

  _onPageChangeCallback(int lpage) {
    if (page == lpage && page != 0) {
      Navigator.pushNamed(context, RouteNames.loginPage);
    } else {
      setState(() {
        page = lpage;
      });
    }
  }

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Stack(
          children: <Widget>[
            LiquidSwipe(
              pages: pages,
              enableSlideIcon: true,
              enableLoop: false,
              onPageChangeCallback: _onPageChangeCallback,
            ),
          ],
        ),
      ),
    );
  }
}
