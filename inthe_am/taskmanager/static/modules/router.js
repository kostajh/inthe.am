App.Router.map(function(){
  this.route("login", {path: "/login"});
  this.route("about", {path: "/about"});
  this.resource("addToHomeScreen", {path: "/add-to-home-screen"});
  this.resource("mobileTasks", {path: "/mobile-tasks"});
  this.resource("tasks", function(){
    this.resource("task", {path: "/:uuid"});
  });
  this.resource("completed", function(){
    this.resource("completedTask", {path: "/:uuid"});
  });
  this.resource("activityLog", {path: "/activity-log"});
  this.route("unconfigurable", {path: "/no-tasks"});
  this.route("api_access", {path: "/api-access"});
  this.route("synchronization", {path: "/synchronization"});
  this.route("configure", {path: "/configure"});
  this.route("getting_started", {path: "/getting-started"});
  this.route("sms", {path: "/sms"});
  this.route("termsOfService", {path: "/terms-of-service"});
});

App.Router.reopen({
  location: 'history'
});
