import 'package:flutter/material.dart';
import 'package:liquid_swipe/liquid_swipe.dart';
import 'package:sentrei/app/app.dart';

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

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Stack(
        children: <Widget>[
          LiquidSwipe(
            pages: pages,
            enableSlideIcon: true,
            enableLoop: false,
          ),
        ],
      ),
    );
  }
}
