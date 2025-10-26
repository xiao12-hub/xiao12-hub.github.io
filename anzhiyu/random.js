var posts=["2025/08/22/hello-world/","2025/08/27/项目一Linux网络连接-0/","2025/10/03/任务1：区块链系统部署与运维/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };