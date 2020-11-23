//Get Element For process
const textarea = document.getElementById('text');
const generateInfo = document.getElementById("generate-info");

//Initial Value OF Variable
let text = '';
let data = {
  words : 0,
  sentences :0,
  consonant : 0,
  vowels : 0,
  digits :0,
  spaces : 0,
  lowercase : 0,
  uppercase : 0
};

//Not Null 
const findLength = (item) => (item == null ? 0 : item.length);

//Store Data
generateInfo.onclick = ()=>{
  text = textarea.value.trim();

  if (text!==''){
    data = {
      words : findLength(text.match(/[a-zA-Z]+/g)),
      sentences :findLength(text.match(/\056/gi)),
      consonant : findLength(text.match(/[^aeiou]/gi)),
      vowels : findLength(text.match(/[aeiou]/gi)),
      digits :findLength(text.match(/\d/g)),
      spaces : findLength(text.match(/\s/g)),
      lowercase : findLength(text.match(/[a-z]/g)),
      uppercase : findLength(text.match(/[A-Z]/g))
    } 
  }
  localStorage.setItem("data",JSON.stringify(data));
  window.location = './info.html';
};

