import 'package:fancy_on_boarding/fancy_on_boarding.dart';
import 'package:flutter/material.dart';
import 'package:sentrei/login/login.dart';
import 'package:sentrei/utils/utils.dart';

class OnboardingPage extends StatefulWidget {
  @override
  _OnboardingPageState createState() => _OnboardingPageState();
}

class _OnboardingPageState extends State<OnboardingPage> {
  //Create a list of PageModel to be set on the onBoarding Screens.
  final pageList = [
    PageModel(
      color: const Color(0xFF678FB4),
      heroAssetPath: 'assets/images/logo.png',
      iconAssetPath: 'assets/images/logo.png',
      title: Text('Hotels',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            color: Colors.white,
            fontSize: 34.0,
          )),
      body: Text('All hotels and hostels are sorted by hospitality rating',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 18.0,
          )),
    ),
    PageModel(
      color: const Color(0xFF65B0B4),
      heroAssetPath: 'assets/images/logo.png',
      iconAssetPath: 'assets/images/logo.png',
      title: Text('Banks',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            color: Colors.white,
            fontSize: 34.0,
          )),
      body:
          Text('We carefully verify all banks before adding them into the app',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 18.0,
              )),
    ),
    PageModel(
      color: const Color(0xFF9B90BC),
      heroAssetPath: 'assets/images/logo.png',
      iconAssetPath: 'assets/images/logo.png',
      title: Text('Store',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            color: Colors.white,
            fontSize: 34.0,
          )),
      body: Text(
        'All local stores are categorized for your convenience',
        textAlign: TextAlign.center,
        style: TextStyle(
          color: Colors.white,
          fontSize: 18.0,
        ),
      ),
    ),
    // SVG Pages Example
    PageModel(
      color: const Color(0xFF678FB4),
      heroAssetPath: 'assets/images/logo.png',
      iconAssetPath: 'assets/images/logo.png',
      title: Text('Hotels SVG',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            color: Colors.white,
            fontSize: 34.0,
          )),
      body: Text('All hotels and hostels are sorted by hospitality rating',
          textAlign: TextAlign.center,
          style: TextStyle(
            color: Colors.white,
            fontSize: 18.0,
          )),
      heroAssetColor: Colors.white,
    ),
    PageModel(
      color: const Color(0xFF65B0B4),
      heroAssetPath: 'assets/images/logo.png',
      iconAssetPath: 'assets/images/logo.png',
      title: Text('Banks SVG',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            color: Colors.white,
            fontSize: 34.0,
          )),
      body:
          Text('We carefully verify all banks before adding them into the app',
              textAlign: TextAlign.center,
              style: TextStyle(
                color: Colors.white,
                fontSize: 18.0,
              )),
      heroAssetColor: Colors.white,
    ),
    PageModel(
      color: const Color(0xFF9B90BC),
      heroAssetPath: 'assets/images/logo.png',
      iconAssetPath: 'assets/images/logo.png',
      title: Text('Store SVG',
          style: TextStyle(
            fontWeight: FontWeight.w800,
            color: Colors.white,
            fontSize: 34.0,
          )),
      body: Text(
        'All local stores are categorized for your convenience',
        textAlign: TextAlign.center,
        style: TextStyle(
          color: Colors.white,
          fontSize: 18.0,
        ),
      ),
    ),
  ];

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //Pass pageList and the mainPage route.
      body: FancyOnBoarding(
        doneButtonText: 'Done',
        skipButtonText: 'Skip',
        pageList: pageList,
        onDoneButtonPressed: () => NavigatorUtil.push(
          context,
          LoginRouter.loginPage,
          replace: true,
        ),
        onSkipButtonPressed: () => NavigatorUtil.push(
          context,
          LoginRouter.loginPage,
          replace: true,
        ),
      ),
    );
  }
}