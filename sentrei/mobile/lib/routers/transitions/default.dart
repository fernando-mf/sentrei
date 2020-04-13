import 'package:flutter/material.dart';
import 'package:sentrei/routers/routers.dart';

class DefaultTransition<T> extends MaterialPageRoute<T> {
  DefaultTransition({WidgetBuilder builder, RouteSettings settings})
      : super(builder: builder, settings: settings);

  @override
  Widget buildTransitions(BuildContext context, Animation<double> animation,
      Animation<double> secondaryAnimation, Widget child) {
    Routes.sendNavigationEventToFirebase(settings.name);
    if (settings.isInitialRoute) {
      return child;
    }
    return FadeTransition(
      opacity: CurvedAnimation(parent: animation, curve: Curves.fastOutSlowIn),
      child: child,
    );
  }
}
