import 'package:flutter/material.dart';
import 'package:flutter_test/flutter_test.dart';
import 'package:provider/provider.dart';
import 'package:sentrei/app/app.dart';
import 'package:sentrei/i18n/i18n.dart';
import 'package:sentrei/providers/providers.dart';

void main() {
  var map = Map<String, Widget>();
  map['OnboardingPage'] = OnboardingPage();
  map['SplashPage'] = SplashPage();

  group('Detect whether page clickable targets have semantics for AppPage', () {
    testWidgets('AppPage', (WidgetTester tester) async {
      final SemanticsHandle handle = tester.ensureSemantics();
      await tester.pumpWidget(
        ChangeNotifierProvider<ThemeProvider>(
          create: (_) => ThemeProvider(),
          child: AppPage(),
        ),
      );
      await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
      handle.dispose();
    });
  });

  group('App Pages => Detect whether page clickable targets have semantics',
      () {
    ThemeData themeData = ThemeProvider().getTheme();
    map.forEach((name, page) {
      testWidgets(name, (WidgetTester tester) async {
        final SemanticsHandle handle = tester.ensureSemantics();
        await tester.pumpWidget(
          MaterialApp(
            home: page,
            theme: themeData,
            localizationsDelegates: [
              AppLocalizationDelegate(),
            ],
          ),
        );
        await expectLater(tester, meetsGuideline(labeledTapTargetGuideline));
        handle.dispose();
      });
    });
  });
}
