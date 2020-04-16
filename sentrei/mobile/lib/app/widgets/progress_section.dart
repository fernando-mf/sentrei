import 'package:flutter/material.dart';
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
        crossAxisAlignment: CrossAxisAlignment.center,
        mainAxisSize: MainAxisSize.max,
        mainAxisAlignment: MainAxisAlignment.spaceEvenly,
        children: <Widget>[
          LoadAssetImage('progress'),
          Text(AppLocalization.of(context).progress),
        ],
      ),
    );
  }
}
