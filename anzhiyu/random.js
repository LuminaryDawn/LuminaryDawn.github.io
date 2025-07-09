var posts=["2025/07/09/hello-world/","2025/07/09/郑泽宇（基础C语言）.md/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };