import 'dart:math';
import 'dart:ui';

import 'package:flutter/material.dart';

class ProgressDot extends StatelessWidget {
  const ProgressDot({
    @required this.dotsCount,
    this.position = 0.0,
  })  : assert(dotsCount != null && dotsCount > 0),
        assert(position != null && position >= 0),
        assert(
          position < dotsCount,
        );

  final int dotsCount;
  final double position;

  Widget _buildDot(int index) {
    final state = min(1.0, (position - index).abs());

    final size = Size.lerp(
      Size.square(16.0),
      Size.square(9.0),
      state,
    );
    final color = Color.lerp(
      Colors.white,
      Colors.white,
      state,
    );
    final shape = ShapeBorder.lerp(
      CircleBorder(),
      CircleBorder(),
      state,
    );

    return Container(
      width: size.width,
      height: size.height,
      margin: EdgeInsets.all(6.0),
      decoration: ShapeDecoration(
        color: color,
        shape: shape,
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    final dotsList = List<Widget>.generate(dotsCount, _buildDot);
    final dots = dotsList;

    return Row(
      mainAxisSize: MainAxisSize.min,
      children: dots,
    );
  }
}
