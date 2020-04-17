import 'package:flutter/material.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/i18n/i18n.dart';
import 'package:sentrei/widgets/widgets.dart';

class ProgressSection extends Container {
  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(
        gradient: GradientBgs.react,
      ),
      child: Column(
        children: <Widget>[
          Spacer(flex: 3),
          HeadlineText(
            AppLocalizations.of(context).lifeopsAsAService,
            AppLocalizations.of(context).learnAndGrow,
          ),
          Spacer(flex: 1),
          LoadAssetImage('progress'),
          ProgressDot(
            dotsCount: 3,
          ),
          Spacer(flex: 1),
          OnboardingButton(),
          Spacer(flex: 3),
        ],
      ),
    );
  }
}
