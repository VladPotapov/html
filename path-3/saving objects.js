function personalityScore(o, c, e, a, n) {
    this.openness = o;
    this.conscientiousness = c;
    this.extraversions = e;
    this.agreeableness = a;
    this.neuroticism = n;
}
o = parseInt(prompt('выбрать число'));
c = parseInt(prompt('выбрать число'));
e = parseInt(prompt('выбрать число'));
a = parseInt(prompt('выбрать число'));
n = parseInt(prompt('выбрать число'));
var score = new personalityScore(o, c, e, a, n);
sessionStorage["personalityScore"] = JSON.stringify(score);
window.location = "Test_Score.html";