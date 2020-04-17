import 'package:flutter/material.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/i18n/i18n.dart';
import 'package:sentrei/widgets/widgets.dart';

class PlanSection extends Container {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: GradientBgs.lavender,
      ),
      child: Column(
        children: <Widget>[
          Spacer(flex: 3),
          HeadlineText(
            AppLocalizations.of(context).goBold,
            AppLocalizations.of(context).seeTheBiggerPicture,
          ),
          Spacer(flex: 1),
          LoadAssetImage('plan'),
          Spacer(flex: 1),
          ProgressDot(
            dotsCount: 3,
            position: 1,
          ),
          Spacer(flex: 1),
          OnboardingButton(),
          Spacer(flex: 3),
        ],
      ),
    );
  }
}
