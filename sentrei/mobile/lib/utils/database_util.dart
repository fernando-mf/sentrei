import 'package:firebase_database/firebase_database.dart';

class DatabaseUtil {
  final DatabaseReference database = FirebaseDatabase.instance.reference();
}
