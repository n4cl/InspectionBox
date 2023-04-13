document.getElementById("btn_request").addEventListener("click", function() {
  const uri = new URL(window.location.href);
  const xhr = new XMLHttpRequest();
  let original_url = uri.origin
  let url = original_url + "/backend"

  let text_area = document.getElementById("g_p_mtext").value;
  let data = JSON.stringify({text: text_area});

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");

  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      document.getElementById("g_r_mtext").value = xhr.responseText;
    }
  }
  xhr.send(data);
});


document.getElementById("btn_test_get").addEventListener("click", function() {
  const uri = new URL(window.location.href);
  const xhr = new XMLHttpRequest();
  let original_url = uri.origin
  let url = original_url + "/backend"

  xhr.open("GET", url, true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log("Get test OK");
    } else {
      console.log("Request failed. Returned status: " + xhr.status);
    }
  }
  xhr.send();
});

document.getElementById("btn_test_post").addEventListener("click", function() {
  const uri = new URL(window.location.href);
  const xhr = new XMLHttpRequest();
  let original_url = uri.origin
  let url = original_url + "/backend"

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.onreadystatechange = function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      console.log(xhr.responseText);
    } else {
      console.log("Request failed. Returned status: " + xhr.status);
    }
  }
  const data = { "message": "Hello" };
  xhr.send(JSON.stringify(data));
});
