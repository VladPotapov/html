function pesonalityScore(o, c, e, a, n) {
    this.openness = o;
    this.conscientiousness = c;
    this.extraversions = e;
    this.agreeableness = a;
    this.neuroticism = n;
}

var score = new pesonalityScore('o','c','e','a','n');
sessionStorage["personalityScore"] = JSON.stringify(score);
window.location = "Test_Score.html";
