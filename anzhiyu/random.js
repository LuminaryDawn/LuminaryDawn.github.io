var posts=["2025/07/09/hello-world/","2025/07/10/初识JAVA/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };