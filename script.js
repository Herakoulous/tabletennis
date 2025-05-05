function nameinput() {
  const name = prompt("Συμπληρώστε το όνομά σας", "Χ");
  document.getElementById("welcome").innerHTML = "Καλώς ήλθες <b>" + name + "</b> και καλή επιτυχία στο qiuz!";
}

//οι συναρτήσεις sendmail1 και sendmail2 ανοίγουν νέο παράθυρο από το οποίο ο χρήστης μπορεί να στείλει mail σε έναν από εμάς
function sendmail1(){  
  document.getElementById("mail1").href = "mailto:p3240089@aueb.gr";
  document.getElementById("mail1").style = "text-decoration: none;";
}

function sendmail2(){
  document.getElementById("mail2").href = "mailto:p3240037@aueb.gr";
  document.getElementById("mail2").style = "text-decoration: none;";
}

//Ανοίγει popup παράθυρο καλωσορίσματος
function greets() {
  window.open("Popup Window.html", "Popup Window", "width=536.9,height=302.4,top=320,left=480");
};

//Γράφει την ημερομηνία χαιρετάει τον χρήστη με βάση την ώρα της ημέρας
function greet(){
const time = new Date().getHours(); //Παίρνει την ώρα από το Date()
let greeting;
if (time < 12) {
  greeting = "Καλημέρα";
}
else if (time < 18) {
  greeting = "Χαίρετε";
}
else {
  greeting = "Καλησπέρα";
}


let today = new Date().getDay();  //Παίρνει την ημέρα της εβδομάδας σε μορφή αριθμού (0-6)
let day;
  switch (today) {  //Μετατρέπει τον αριθμό που αναπαριστά την ημέρα σε string
    case 0:
      day = "Κυριακή";
      break;
    case 1:
      day = "Δευτέρα";
      break;
    case 2:
      day = "Τρίτη";
      break;
    case 3:
      day = "Τετάρτη";
      break;
    case 4:
      day = "Πέμπτη";
      break;
    case 5:
      day = "Παρασκευή";
      break;
    case  6:
      day = "Σάββατο";
  }

let year = new Date().getYear();  //Παίρνει τον χρόνο από το Date()
year = year +1900;
let date = new Date().getDate();  //Παίρνει την αριθμό της ημέρας του μήνα από το Date()

//Δημιουργεί ένα μήνυμα με τις παραπάνω πληροφορίες, το οποίο θα εμφανιστεί σε ένα <p> tag στο popup παράθυρο
message = (day + " " + date + " Ιανουαρίου " + year + "<br>" + "<br>" +
    greeting + " και καλως ήρθατε στην ιστοσελίδα μας, όπου πρόκειται να μάθετε πολλές ενδιαφέρουσες πληροφορίες για " +
    "την ιστορία, τους κανόνες και τον εξοπλισμό της επιτραπέζιας αντισφαίρισης.");
    document.getElementById("message").innerHTML = message;
  }

document.getElementById("changeColorButton").addEventListener("click", function () {
  const body = document.body;
  const elements = document.querySelectorAll("body, .text, #description");
  const menus = document.querySelectorAll(".menu , .side-menu ,footer");
  const headings = document.querySelectorAll("h2 , h1 , tr ,th , td");
  const paragraphs = document.querySelectorAll("p, ol ,ul");
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    this.textContent = "Dark Mode On";

    for (element of elements){
      element.style.backgroundColor = "black";
    };

    for (menu of menus){
      menu.style.backgroundColor = "rgb(1, 18, 10)";
    };

    for (heading of headings){
      heading.style.color = "lightblue";
    };

    for (paragraph of paragraphs){
      paragraph.style.color = "lightgreen";
    };
  }
  else {
    this.textContent = "Dark Mode Off";

    for (element of elements){
      element.style.backgroundColor = "white";
    };

    for (menu of menus){
      menu.style.backgroundColor = "black";
    };

    for (heading of headings){
      heading.style.color = "black";
    };

    for (paragraph of paragraphs){
      paragraph.style.color = "black";
    };
  }
});

// Παίρνει το όνομα του χρήστη από το userInput field της σελίδας quiz.html και του εύχεται καλή επιτυχία, κρύβοντας την εισαγωγική παράγραφο
function namefunc() {
  var name = document.getElementById("userInput").value;
  document.getElementById("welcometxt").innerHTML = "<b>Καλή επιτυχία " + name;
  document.getElementById("nameinput").style = "display: none;"
}

const quizData = [
  {
    question: "Πόσους πόντους πρέπει να κερδίσει ένας παίκτης για να αποκτήσει ένα σετ;",
    options: ["7","11","15","21"],
    correct: 1,
  },
  {
    question: "Πόσα εκατοστά ψηλά  (τουλάχιστον) πρέπει να πετάξει την μπάλα ένας πάικτης όταν σερβίρει;",
    options: ["13","16","24","30"],
    correct: 1,
  },
  {
    question: "Αν σε έναν αγώνα διπλού κάνει σερβίς ο παίκτης Α1 και υποδέχεται ο Β1, ποιος θα είναι ο επόμενος παίκτης που θα σερβίρει μετά την εναλλαγή;",
    options: ["Α1","Β1","Α2","Β2"],
    correct: 1,
  },
  {
    question: "Ποιο από τα παρακάτω δε χρισιμοποιούνταν ως εξοπλισμός στις πρώτες μορφές του αθλήματος;",
    options: [ "Βιβλία", "Πιάτα","Ξύλινα ραβδιά","Καπάκια κουτιών"],
    correct: 1,
  },
  {
    question: "Ποια Ασιατική χώρα έχει κυριαρχήσει στο άθλημα σε παγκόσμιο επίπεδο;",
    options: ["Νότια Κορέα" , "Κίνα","Ταϊβάν","Ιαπωνία"],
    correct: 1,
  },
  {
    question: "Ποια χρονιά εισήχθη η επιτραπέζια αντισφαίρηση για πρώτη φορά στους Ολυμπιακούς Αγώνες;",
    options: ["1984","1988","1996","2000"],
    correct: 1,
  }
];
 
let i = 0; //Μεταβλητή για τον δείκτη της τρέχουσας ερώτησης
let score = 0;

const quizContainer = document.getElementById("quiz");
const nextButton = document.getElementById("next");
const resultContainer = document.getElementById("result");

function loadQuestion(i){
  const quizItem = quizData[i];  //Βάζω σε μεταβλητή τα στοιχεία της i ερώτησης
  quizContainer.innerHTML =`<p>${quizItem.question}</p>`;
  // προσθετω 4 επιλογες κατω απο την ερωτηση
  j=0;
  while(j<=3){
    quizContainer.innerHTML +=
           `<label>
              <input type="radio" name="question" value="${j}"> ${quizItem.options[j]}
            </label> <br>`;
    j += 1
  }
};

function checkAnswer() {
  // βαζω σε μεταβλητη την επιλογη που εχει πατηθει
  const selectedOption = document.querySelector(  
    `input[name="question"]:checked`
  );
  //Αν καμία μεταβλητη δεν έχει επιλεχθεί δεν επιστέρφω τιποτα και μειώνω το i για να μην πάω στην επομενη ερωτηση
  if (!selectedOption) { i -= 1;  return; }
  // Αλλιώς ελέγχω αν είναι η σωστή απάντηση
  if (selectedOption.value === String(quizData[i].correct)) {
    score += 1;
  }
  //Αν έχει τελειώσει το quiz εμφανίζω το σκορ και το όνομα του χρήστη
  if (i === quizData.length - 1){
    quizContainer.style.display = "none";
    nextButton.style.display = "none";
    name2 = document.getElementById("userInput").value;
    resultContainer.innerHTML = "Συγχαρητήρια, " + name2 + "<br>" +  ` Το τελικό σου σκορ είναι: ${score}/${quizData.length}`;
  }
}

//Συνάρτηση που πάει στην επόμενη ερώτηση όταν πατηθεί το κουμπί
nextButton.addEventListener("click", () => {
  checkAnswer();
  i += 1;
  loadQuestion(i);
});

loadQuestion(i);