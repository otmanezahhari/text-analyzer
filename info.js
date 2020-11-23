//Get Data
const getData = ()=>{
  return JSON.parse(localStorage.getItem('data'));
};

//Show Data
const showData = ()=>{
  let data = getData();
  let htmlContent = "";

  for (item in data){
  htmlContent += `<div class="box">
  <h2>${data[item]}</h2>
  <p>${item}</p></div>
  `;
  document.querySelector('.info-wrapper').innerHTML = htmlContent;
  }
};

showData();