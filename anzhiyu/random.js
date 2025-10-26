var posts=["2025/08/22/hello-world/","2025/08/27/项目一Linux网络连接-0/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };