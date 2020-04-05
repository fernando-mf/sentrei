import 'package:flutter/material.dart';
import 'package:sentrei/const/const.dart';

class GradientBgs {
  static const LinearGradient signup_background = LinearGradient(
    begin: FractionalOffset(0.0, 0.4), end: FractionalOffset(0.9, 0.7),
    // Add one stop for each color. Stops should increase from 0 to 1
    stops: [0.1, 0.9], colors: [Colours.blue_light, Colours.red],
  );
}