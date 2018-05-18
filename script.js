var IDEAS = [
  createIdea("Bacon", "Bacon Candy", "#c26c6c", "Why?", "brainfreeze...", "#ecc3c3"),
  createIdea("BrainFreeze", "Anti brainfreeze", "#00a2ff", "So what?", "So you won't be held back by brainfreezes ever again!", "#005bd1"),
  createIdea("Idea1", "Some idea", "#000", "Whatfor?", "For a good reason", "#666"),
  createIdea("Idea2", "Some other idea", "#000", "Why?", "For a good reason", "#666"),
  createIdea("Idea3", "Some insane idea", "#000", "Do I even need to explain?", "...", "#666"),
  createIdea("Idea4", "Some really bad idea", "#F00", "Why?", "Because all I want is your money", "#F66")
];

function createIdea(id, name, nameColor, question, answer, answerColor){
  var idea = {
    id:id,
    name:name,
    nameColor:nameColor,
    question:question,
    answer:answer,
    answerColor:answerColor
  };

  return idea;
}

function ideaToHTML(idea){
  var ideaHTML = ` 
  <div id="`+idea.id+`" class="idea">
    <div class="ideaName" style="color:`+idea.nameColor+`">`+idea.name+`</div>
    <div class="ideaQuestion">`+idea.question+`</div>
    <div class="ideaAnswer" style="color:`+idea.answerColor+`">`+idea.answer+`</div>
    <div class="ideaValidation">
      <button class="validateButton">Validate</button>
      <button class="nahButton">Nah...</button>
    </div>
  </div>`;
  return ideaHTML;
}

function documentReady(){
  reBuildHTML();
}

function reBuildHTML(){
  var ideaHTML = "";

  for(var i in IDEAS){
    ideaHTML += ideaToHTML(IDEAS[i]);
  }

  document.getElementById("content").innerHTML = ideaHTML;
}

function addIdea(){
    var name = document.getElementById("addIdeaName").value;
    var id = name.split(" ")[0];
    var nameColor = document.getElementById("addIdeaNameColor").value;
    var question = document.getElementById("addIdeaQuestion").value;
    var answer = document.getElementById("addIdeaAnswer").value;
    var answerColor = document.getElementById("addIdeaAnswerColor").value;
    IDEAS.unshift(createIdea(id, name, nameColor, question, answer, answerColor)); 
    reBuildHTML();
}