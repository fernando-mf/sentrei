import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';
import 'package:sentrei/i18n/i18n.dart';

class OnboardingButton extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      width: 300,
      height: 60,
      decoration: BoxDecoration(
        gradient: GradientBgs.shonan,
      ),
      child: FlatButton(
        child: Text(
          AppLocalizations.of(context).start,
          style: TextStyle(color: Colors.white),
        ),
        onPressed: () {},
      ),
    );
  }
}
