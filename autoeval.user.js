// ==UserScript==
// @name         南大教务网默认好评
// @namespace    
// @version      0.1
// @description  给南大教务网的教学评价默认好评
// @author       LadderOperator
// @include      *://elite.nju.edu.cn/jiaowu/student/evalcourse/courseEval.do?method=currentEvalCourse
// @grant        none
// ==/UserScript==

var getAll
var getMulRadio
var getQuesRadio
var stateCheck = true

setInterval(fillForm, 100);

function fillForm() {
  stateCheck = true
  getAll = document.querySelectorAll("#tbEvalItem form input[type^='radio']")
  getAll.forEach(function(e){
    if (e.checked === true){
      stateCheck = false
    }
  })

  if (stateCheck === true){

    getQuesRadio = document.querySelectorAll("#tbEvalItem form input[name^='ques'][value^='5']")
    getMulRadio = document.querySelectorAll("#tbEvalItem form input[name^='mul'][value^='0']")
    
    getQuesRadio.forEach(function(f){
      f.checked = true
    })
    
    getMulRadio.forEach(function(f){
      f.checked = true
    })

  }



}


