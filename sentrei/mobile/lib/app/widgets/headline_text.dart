import 'package:flutter/material.dart';
import 'package:auto_size_text/auto_size_text.dart';
import 'package:sentrei/const/const.dart';

class HeadlineText extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return Container(
      padding: EdgeInsets.symmetric(horizontal: 10),
      child: Center(
        child: Column(
          children: <Widget>[
            AutoSizeText(
              'Organize Your Life',
              maxLines: 1,
              textAlign: TextAlign.center,
              style: TextStyles.headingWhiteBold,
            ),
            SizedBox(height: 10),
            AutoSizeText(
              'through insightful metrics',
              maxLines: 1,
              textAlign: TextAlign.center,
              style: TextStyles.headingWhiteRegular,
            ),
          ],
        ),
      ),
    );
  }
}
