function getfile(file,callback){
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("Application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function(){
  if(xhr.readyState===4 && xhr.status=="200"){
    callback(xhr.responseText);
    }

  }
  xhr.send(null);
}
getfile("dynamic.json",function(text){
  var data=JSON.parse(text);
  console.log(data);
  profile(data.basics);
  career(data.career);
  education(data.education);
  skills(data.skills);
  // profile(data.education)

  })
var parent=document.querySelector(".parent");
var child1=document.querySelector(".child1");
var child2=document.querySelector(".child2");
function profile(pro){

var image=document.createElement('img');
 image.src=pro.img;
child1.appendChild(image);
parent.appendChild(child1);

var name=document.createElement('h2');
name.textContent=pro.name;
child1.appendChild(name);
// parent.appendChild(child1);

var email=document.createElement('h3');
email.textContent=pro.email;
child1.appendChild(email);
// parent.appendChild(child1);
}
function career(c){
var re=document.createElement('h1');
re.textContent="Resume";
child2.appendChild(re);
var he=document.createElement('hr');
child2.appendChild(he);
var info=document.createElement('h2');
info.textContent=c.info;
child2.appendChild(info);
}
function education(edu){
  var h2=document.createElement('h2');
  h2.textContent='Education';
  child2.appendChild(h2);
  var hr=document.createElement('hr');
  child2.append(hr);

var table=document.createElement('table');
  let row='';

   row +="<tr>"+ "<th>"+"S.NO"+"</th>"+
    "<th>"+"degree"+"</th>"+
      "<th>"+"institute"+"</th>"+
        "<th>"+"percentage"+"</th>"
        "</tr>"
  for(i in edu){
  row +="<tr>"+"<td>"+edu[i].sno +"</td>"+
  "<td>"+edu[i].degree+"</td>"+
  "<td>"+edu[i].institute+"</td>"+
  "<td>"+edu[i].percentage+"</td>"+
  "</tr>";
  }
  table.innerHTML=row;
  child2.appendChild(table);
  parent.appendChild(child2);
}

function skills(l){
  var hh=document.createElement("h2");
  hh.textContent="skills set";
  child2.append(hh);
  var ul=document.createElement("ul");

  for(i in l){
    var li =document.createElement("li");
    li.textContent=l[i].info;
    ul.append(li);

  }
  child2.append(ul);
}
