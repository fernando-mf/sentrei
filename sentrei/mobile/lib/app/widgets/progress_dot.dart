import 'dart:math';
import 'package:flutter/material.dart';

Widget ProgressDot(int page, int index) {
  double selectedness = Curves.easeOut.transform(
    max(
      0.0,
      1.0 - ((page ?? 0) - index).abs(),
    ),
  );
  double zoom = 1.0 + (2.0 - 1.0) * selectedness;
  return Container(
    width: 25.0,
    child: Center(
      child: Material(
        color: Colors.white,
        type: MaterialType.circle,
        child: Container(
          width: 8.0 * zoom,
          height: 8.0 * zoom,
        ),
      ),
    ),
  );
}
