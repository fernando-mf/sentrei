import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';

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
          'Login',
          style: TextStyle(color: Colors.white),
        ),
        onPressed: () {},
      ),
    );
  }
}
