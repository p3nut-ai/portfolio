AOS.init();


// create request

var request = new XMLHttpRequest()

// open connection
request.open('GET','https://api.github.com/users/p3nut-ai/repos',true)

request.onload = function(){
  let data = JSON.parse(this.response);
  // console.log(data);

  var eeHTML = "";
  var pythonHTML = "";
  // loop thru the data
  $.each(data,function(i,status){
    console.log(status.language);
    if (status.language == "Python") {
      pythonHTML += '<li>';
      pythonHTML += '<a href="' + status.html_url+ '">';
      pythonHTML += '<h6 style="font-size:20px;">' + status.name + ":";
      pythonHTML += '<span style="padding-left:10px; font-size:12px; color:black;">' + status.description + '</span></h6></a>';
      pythonHTML += '</li>';
    }
    else if (status.language == "HTML"){
      
    }
    else {
      eeHTML += '<li>';
      eeHTML += '<a href="' + status.html_url+ '">';
      eeHTML += '<h6>' + status.name;
      eeHTML += '<span>' + status.name + '</span></h6></a>';
      eeHTML += '</li>';
    }

  });

  $('#repo_list').html(eeHTML);
  $('#repo_list_python').html(pythonHTML);

}


request.send();
