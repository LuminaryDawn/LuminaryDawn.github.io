var posts=["2025/07/09/hello-world/","2025/07/10/初识JAVA/","2025/07/11/安卓逆向入门笔记/","2025/07/14/逆向题目题解/","2025/07/17/初探逆向/","2025/07/18/TEa加密/","2025/07/22/IDA使用技巧/","2025/07/22/RC4加密/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };