function requestAPI(){
  const uri = new URL(window.location.href);
  const request = new XMLHttpRequest();
  let original_url = uri.origin
  let url = original_url + "/backend"

  request.onreadystatechange = function(){
    if (request.readyState == 4){
      if (request.status == 200){
        let data = request.responseText;
        console.log(data);
      }
    }
  }

  request.open("GET", url, true);
  request.send()

}


let btnRequest = document.getElementById('btn_request');
btnRequest.addEventListener('click', requestAPI);
