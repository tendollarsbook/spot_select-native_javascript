var xhr = new XMLHttpRequest();
xhr.open('get','https://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&limit=268',true)
xhr.send(null)
xhr.onload = function(){
  var spotdata= JSON.parse(xhr.responseText)
  var data = spotdata.result.records
  
  var len = data.length;
  var area = document.getElementById('areaId');
  var place = document.querySelectorAll('.place');
  var list = document.querySelector('.card_group');
  var zone = document.querySelector('.title');
  
  function updateList(e){
    var value = e.target.value;
    var str = '';
    for(i=0;i<len;i++){
      if( data[i].Zone == value){
        if(data[i].Website == ""){
          var content = 
          '<div class="card">\
            <div class="card_top">\
              <div class="card_inner">\
                <div class="card_cover" style="background-image: url('+data[i].Picture1+');">\
                  <div class="card_name">\
                    <h3>'+data[i].Name+'</h3>\
                    <h5>'+data[i].Zone+'</h5>\
                  </div>\
                </div>\
              </div>\
            </div>\
            <div class="card_bottom">\
              <ul>\
                <li><span>地址：</span>'+data[i].Add+'</li>\
                <li><span>電話 :</span>+'+data[i].Tel+'</li>\
                <li><span>開放時間：</span>'+data[i].Opentime+'</li>\
              </ul>\
              <div class="card_btn">\
                <a href="https://www.google.com.tw/" target="_blank">目前無網站連結</a>\
              </div>\
            </div>\
          </div>';
          str += content;
        }
        else{
          var content = 
          '<div class="card">\
            <div class="card_top">\
              <div class="card_inner">\
                <div class="card_cover" style="background-image: url('+data[i].Picture1+');">\
                  <div class="card_name">\
                    <h3>'+data[i].Name+'</h3>\
                    <h5>'+data[i].Zone+'</h5>\
                  </div>\
                </div>\
              </div>\
            </div>\
            <div class="card_bottom">\
              <ul>\
                <li><span>地址：</span>'+data[i].Add+'</li>\
                <li><span>電話 :</span>+'+data[i].Tel+'</li>\
                <li><span>開放時間：</span>'+data[i].Opentime+'</li>\
              </ul>\
              <div class="card_btn">\
                <a href="'+data[i].Website+'" target="_blank">前往網站</a>\
              </div>\
            </div>\
          </div>';
          str += content;
        }
      }
    }
    list.innerHTML = str;
    zone.textContent = value;
  }
  
  function origin(e){
    var value = '三民區';
    var str = '';
    for(i=0;i<len;i++){
      if( data[i].Zone == value){
        if(data[i].Website == ""){
          var content = 
          '<div class="card">\
            <div class="card_top">\
              <div class="card_inner">\
                <div class="card_cover" style="background-image: url('+data[i].Picture1+');">\
                  <div class="card_name">\
                    <h3>'+data[i].Name+'</h3>\
                    <h5>'+data[i].Zone+'</h5>\
                  </div>\
                </div>\
              </div>\
            </div>\
            <div class="card_bottom">\
              <ul>\
                <li><span>地址：</span>'+data[i].Add+'</li>\
                <li><span>電話 :</span>+'+data[i].Tel+'</li>\
                <li><span>開放時間：</span>'+data[i].Opentime+'</li>\
              </ul>\
              <div class="card_btn">\
                <a href="https://www.google.com.tw/" target="_blank">目前無網站連結</a>\
              </div>\
            </div>\
          </div>';
          str += content;
        }
        else{
          var content = 
          '<div class="card">\
            <div class="card_top">\
              <div class="card_inner">\
                <div class="card_cover" style="background-image: url('+data[i].Picture1+');">\
                  <div class="card_name">\
                    <h3>'+data[i].Name+'</h3>\
                    <h5>'+data[i].Zone+'</h5>\
                  </div>\
                </div>\
              </div>\
            </div>\
            <div class="card_bottom">\
              <ul>\
                <li><span>地址：</span>'+data[i].Add+'</li>\
                <li><span>電話 :</span>+'+data[i].Tel+'</li>\
                <li><span>開放時間：</span>'+data[i].Opentime+'</li>\
              </ul>\
              <div class="card_btn">\
                <a href="'+data[i].Website+'" target="_blank">前往網站</a>\
              </div>\
            </div>\
          </div>';
          str += content;
        }
      }
    }
    list.innerHTML = str;
    zone.textContent = value;
  }
  
  origin();
  
  area.addEventListener('change',updateList,false);
  
  for(i=0;i<4;i++){
    place[i].addEventListener('click',updateList,false);
  };
}

