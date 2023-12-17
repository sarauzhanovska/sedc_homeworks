
function tellStory([name, mood, activity]) {
let story = `This is ${name}, ${name} is a nice person. Today she is so ${mood} because she is doing ${activity} today.`
return story;
}
let array = ["Keti", "calm", "meditation"];
let result = tellStory(array);
console.log(result);