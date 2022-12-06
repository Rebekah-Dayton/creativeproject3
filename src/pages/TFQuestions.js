let id = 1;
let container = [];
let answers = [];


function decodeHtml(html) {
    var txt = document.createElement("textarea");
    txt.innerHTML = html;
    return txt.value;
}

var myurl = "https://opentdb.com/api.php?amount=10&type=boolean";
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
                    };
                    let correct = {
                        id: id + i,
                        answer: json.results[i]["correct_answer"]
                    }
                    answers.push(correct);
                    console.log("getQuestion container ", details);
                    container.push(details);
                }
                console.log("container ", container);
});



const TFQuestions = () => {
  return (
      <div>
      <h1>True/False Questions</h1>
        <h2>Let's check your trivia knowledge!</h2>
        
        <div id="trivia">
        {container.map( querry => (
        <div key={querry.id} className="querry">
            <p><em>Category = {querry.category} (difficulty: {querry.difficulty})</em></p>
            <p id="question"><strong>Question {querry.id}:</strong> {querry.question}</p>
        </div>
        ))}
        </div>
        
        <h4>Answers</h4>
        {answers.map( correct => (
        <div className="correct">
            {correct.id}. {correct.answer} 
        </div>
        ))}
      </div>
      );
};


export default TFQuestions;