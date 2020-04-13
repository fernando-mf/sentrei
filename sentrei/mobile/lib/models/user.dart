class User {
  String key;
  String email;
  String userId;
  String displayName;
  String userName;
  String webSite;
  String photoUrl;
  String contact;
  String bio;
  String location;
  String dob;
  String createdAt;
  bool isVerified;
  int followers;
  int following;
  List<String> followersList;
  List<String> followingList;

  User({
    this.email,
    this.userId,
    this.displayName,
    this.photoUrl,
    this.key,
    this.contact,
    this.bio,
    this.dob,
    this.location,
    this.createdAt,
    this.userName,
    this.followers,
    this.following,
    this.webSite,
    this.isVerified,
    this.followersList,
  });

  User.fromJson(Map<dynamic, dynamic> map) {
    if (map == null) {
      return;
    }
    if (followersList == null) {
      followersList = [];
    }
    email = map['email'];
    userId = map['userId'];
    displayName = map['displayName'];
    photoUrl = map['photoUrl'];
    key = map['key'];
    dob = map['dob'];
    bio = map['bio'];
    location = map['location'];
    contact = map['contact'];
    createdAt = map['createdAt'];
    followers = map['followers'];
    following = map['following'];
    userName = map['userName'];
    webSite = map['webSite'];
    isVerified = map['isVerified'] ?? false;
    if (map['followerList'] != null) {
      followersList = List<String>();
      map['followerList'].forEach((value) {
        followersList.add(value);
      });
    }
    followers = followersList != null ? followersList.length : null;
    if (map['followingList'] != null) {
      followingList = List<String>();
      map['followingList'].forEach((value) {
        followingList.add(value);
      });
    }
    following = followingList != null ? followingList.length : null;
  }
  toJson() {
    return {
      'key': key,
      'userId': userId,
      'email': email,
      'displayName': displayName,
      'userId': userId,
      'photoUrl': photoUrl,
      'contact': contact,
      'dob': dob,
      'bio': bio,
      'location': location,
      'createdAt': createdAt,
      'followers': followersList != null ? followersList.length : null,
      'following': followersList != null ? followersList.length : null,
      'userName': userName,
      'webSite': webSite,
      'isVerified': isVerified ?? false,
      'followerList': followersList,
      'followingList': followingList
    };
  }

  User copyWith({
    String email,
    String userId,
    String displayName,
    String photoUrl,
    String key,
    String contact,
    bio,
    String dob,
    String location,
    String createdAt,
    String userName,
    int followers,
    int following,
    String webSite,
    bool isVerified,
    List<String> followingList,
  }) {
    return User(
      email: email ?? this.email,
      bio: bio ?? this.bio,
      contact: contact ?? this.contact,
      createdAt: createdAt ?? this.createdAt,
      displayName: displayName ?? this.displayName,
      dob: dob ?? this.dob,
      followers: followersList != null ? followersList.length : null,
      following: following ?? this.following,
      isVerified: isVerified ?? this.isVerified,
      key: key ?? this.key,
      location: location ?? this.location,
      photoUrl: photoUrl ?? this.photoUrl,
      userId: userId ?? this.userId,
      userName: userName ?? this.userName,
      webSite: webSite ?? this.webSite,
      followersList: followersList ?? this.followersList,
    );
  }

  String getFollower() {
    return '${this.followers ?? 0}';
  }

  String getFollowing() {
    return '${this.following ?? 0}';
  }
}
