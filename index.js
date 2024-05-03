var lRExpr = new RegExp(/^[a-z,',-]+(\s)[a-z,',-]+$/i);

const sum = (a, b) => {
  return a + b;
};
const isPalindrome = (str, yn) => {
  if (!yn) {
    str = str.toLowerCase();
  }

  if (str == str.split("").reverse().join("")) {
    return true;
  } else {
    return false;
  }
};

const letterNumber = (str, letter) => {
  var eNum = 0;
  for (var i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() === letter.toLowerCase()) {
      eNum++;
    }
  }
  return eNum;
};

const area = (radius) => {
  const area = Math.PI * Math.pow(Number(radius), 2);
  return area;
};

const Reverse=(anystring)=>{
    return anystring.split("").reverse().join("");
}

const startsWith=(strings,letter)=>{
var newArr= strings.filter(el=>el.toLowerCase().startsWith(letter.toLowerCase()));

return newArr;
}



const Second_Greatest_Lowest=(arr_num)=> {
    arr_num.sort(function(x, y) {
      return x - y;
    });
  
    var uniqa = [arr_num[0]];
    
    var result = [];
  
    for (var j = 1; j < arr_num.length; j++) {
      if (arr_num[j - 1] !== arr_num[j]) {
        uniqa.push(arr_num[j]);
      }
    }
  
    result.push(uniqa[1]);
    result.push( uniqa[uniqa.length - 2]);
  
    return result
  }
  
function abc() {
    return(arguments.callee.name);
}



  function substrings(str1) {
    var array1 = [];
      for (var x = 0, y = 1; x < str1.length; x++, y++) {
      array1[x] = str1.substring(x, y);
    }
  
    var combi = [];
    var temp = "";
    
    var slent = Math.pow(2, array1.length);
  
    for (var i = 0; i < slent; i++) {
      temp = "";
      
      for (var j = 0; j < array1.length; j++) {
        if (i & Math.pow(2, j)) {
          temp += array1[j];
        }
      }
  
      if (temp !== "") {
        combi.push(temp);
      }
    }
  
    return combi
  }
  
  const shuffle=(array)=> {
    let currentIndex = array.length;
      while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
    return array
  }

function makeid(l) {
    var text = "";
    var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < l; i++) {
      text += char_list.charAt(Math.floor(Math.random() * char_list.length));

    }
  
    return text;
  }
  


  
  

module.exports = { sum, isPalindrome, letterNumber, area, Reverse,startsWith, Second_Greatest_Lowest, abc, substrings, shuffle, makeid};
