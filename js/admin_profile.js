function init(SM){
    let sessionManager = SM;
    let socket = io.connect(location.host);
    buildPage();
    socket.on("loadProfileData", function(data){
        let response = data;
        loadProfileData(response);
    });
    
    setTimeout(function(){
        socket.emit("requestProfileData", {status: true, user:  sessionManager.user});


    }, 100);

}

function loadProfileData(response){
    let name = response.name;
    let title = response.title;
    let description = response.description;

    document.getElementById("profile-name").innerHTML = name;
    document.getElementById("profile-title").innerHTML = title;
    document.getElementById("profile-description").innerHTML = description;

    if(response.profile!=undefined){
        document.getElementById("profile-picture-container").style = `background-color: white; background-image: url("${response.profile.url}"); background-size: ${response.profile.size}; background-position: center center;`;
    }
}

function buildPage(){
  document.body.innerHTML = `
      <div id="profile-header-container">
          <div id="profile-name">PROFILE NAME</div>
          <div id="profile-title">PROFILE TITLE</div>
          <div id="profile-description">PROFILE DESCRIPTION</div>
      </div>
      <div id="profile-picture-container"></div>
      <div id="linkedin-bubble-container" class="hyperlink-bubble-container"></div>
      <div id="twitter-bubble-container" class="hyperlink-bubble-container"></div>
      <div id="hov-bubble-container" class="hyperlink-bubble-container"></div>
      <div id="instagram-bubble-container" class="hyperlink-bubble-container"></div>
      <div id="bio-bubble-container" class="hyperlink-bubble-container">i</div>
      `;
}
