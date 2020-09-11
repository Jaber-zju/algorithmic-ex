// 设计推特

var Twitter = function () {
  this.news = {}  // 保存消息
  this.focus = {}
  this.num = 0  // 数量
};

// 发送推特
Twitter.prototype.postTweet = function (userId, tweetId) {
  var obj = {"tweetId": tweetId, num: ++this.num}
  this.news[userId] ? this.news[userId].push(obj) : this.news[userId] = [obj]
};


// 检索关注的人最近十点推特
Twitter.prototype.getNewsFeed = function (userId) {
  var arr = this.focus[userId] ? this.focus[userId] : []
  if (arr.indexOf(userId) === -1)
    arr.push(userId)
  var all = []
  for (var i = 0; i < arr.length; i++) {
    if (!this.news[arr[i]])
      continue
    if (this.news[arr[i]].length - 10 >= 0)
      all = all.concat(this.news[arr[i]].slice(this.news[arr[i]].length - 10, this.news[arr[i]].length))
    else
      all = all.concat(this.news[arr[i]].slice(0, this.news[arr[i]].length))
  }
  all.sort(function (a, b) {
    return b.num - a.num
  })
  var res = []
  for (var i = 0; i < (all.length > 10 ? 10 : all.length); i++)
    res.push(all[i]["tweetId"])
  return res
};


// 关注用户
Twitter.prototype.follow = function (followerId, followeeId) {
  if (this.focus[followerId]) {
    if (this.focus[followerId].indexOf(followeeId) === -1)
      this.focus[followerId].push(followeeId)
    else
      return
  } else
    this.focus[followerId] = [followeeId]
};


// 取消关注用户
Twitter.prototype.unfollow = function (followerId, followeeId) {
  if (!this.focus[followerId])
    return
  else if (this.focus[followerId].indexOf(followeeId) !== -1)
    this.focus[followerId].splice(this.focus[followerId].indexOf(followeeId), 1)
  return
};



