import 'package:flutter/material.dart';
import 'package:sentrei/routers/routers.dart';

class SlideLeftTransition<T> extends MaterialPageRoute<T> {
  SlideLeftTransition({WidgetBuilder builder, RouteSettings settings})
      : super(builder: builder, settings: settings);
  @override
  Widget buildTransitions(BuildContext context, Animation<double> animation,
      Animation<double> secondaryAnimation, Widget child) {
    Routes.sendNavigationEventToFirebase(settings.name);
    if (settings.isInitialRoute) {
      return child;
    }
    return SlideTransition(
      position: Tween<Offset>(
        begin: Offset(1.0, 0.0),
        end: Offset.zero,
      ).animate(
          CurvedAnimation(parent: animation, curve: Curves.fastOutSlowIn)),
      child: child,
    );
  }
}
