let id = 1;
let container = [];
let answers = [];


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

var myurl = "https://opentdb.com/api.php?amount=10&type=multiple";
        console.log(myurl);
        /*global fetch*/
        fetch(myurl, {mode: 'cors'})
            .then(function(response) {
                console.log(response);
                return response.json();
            }) .then(function(json) {
                console.log("This is the json");
                console.log(json);
                for (let i = 0; i < json.results.length; i++) {
                    console.log(json.results[i]["category"], " category");
                    let querry = decodeHtml(json.results[i]["question"])

                    let details = {
                        id: id + i,
                        category: json.results[i]["category"],
                        difficulty: json.results[i]["difficulty"],
                        question: querry,
                        choices: json.results[i]["incorrect_answers"],
                        answer: json.results[i]["correct_answer"]
                    };
                    let correct = {
                        id: id + i,
                        answer: json.results[i]["correct_answer"]
                    };
                    answers.push(correct);
                    console.log("getQuestion container ", details);
                    container.push(details);
                }
                console.log("container ", container);
});


const MultiQuestions = () => {
  return (
      <div>
      <h1>Multiple Choice Questions</h1>
      <h2>Let's check your trivia knowledge!</h2>
    
        <div id="trivia">
        {container.map( querry => (
        <div key={querry.id} className="querry">
            <p><em>Category = {querry.category} (difficulty: {querry.difficulty})</em></p>
            <p id="question"><strong>Question {querry.id}:</strong> {querry.question}</p>
            <p>      A) {querry.choices[0]}</p>
            <p>      B) {querry.answer}</p>
            <p>      C) {querry.choices[2]}</p>
            <p>      D) {querry.choices[1]}</p>
        </div>
        ))}
        
        <div>
        <h3>Answers</h3>
        {answers.map( correct => (
        <div className="correct">
            {correct.id}. {correct.answer} 
        </div>
        ))}
        
        </div>
        </div>
      </div>
      );
};

export default MultiQuestions;

