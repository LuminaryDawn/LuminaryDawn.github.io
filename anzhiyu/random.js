var posts=["2025/07/09/hello-world/","2025/07/10/初识JAVA/","2025/07/11/安卓逆向入门笔记/","2025/07/14/逆向题目题解/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };