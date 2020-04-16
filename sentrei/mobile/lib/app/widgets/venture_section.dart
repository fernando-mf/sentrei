import 'package:flutter/material.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/widgets/widgets.dart';

class VentureSection extends Container {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: GradientBgs.ultra,
      ),
      child: Column(
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          LoadAssetImage('venture'),
          ProgressDot(
            dotsCount: 3,
          ),
          OnboardingButton(),
        ],
      ),
    );
  }
}
