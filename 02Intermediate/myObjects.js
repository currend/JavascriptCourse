/*Objects:*/
let myYouTubeVideo = {
    title: 'Loops in Javascript',
    videoLength: 15,
    videoCreator: 'Hitesh Choudhary',
    videoDescription: 'This is a video about Javascript Loops',
}

// console.log(myYouTubeVideo);

// /*Access specific value*/
// console.log(`New Video on ${myYouTubeVideo.title} by ${myYouTubeVideo.videoCreator}`);


// //Assignment
// let javaScriptCourse = {
//     courseCoord: "Hitesh Choudhary",
//     price: 5.50,
//     courseDescription: "Learn all about Javascript"
// }

// console.log(`${javaScriptCourse.courseDescription} with ${javaScriptCourse.courseCoord} for $${javaScriptCourse.price}`);


// /*How to change those values in the objects*/

// // myYouTubeVideo.title = 'ForEach Loop in JS'
// // console.log(myYouTubeVideo);

let changeVideoLength = function(myObject) {
    return { /*Return entire object*/
        formatOne:  `Time of this video is: ${myObject.videoLength + 2}`,
        formatTwo: `Time of this video is: ${myObject.videoLength + 1}`
    }
    
}

let addOne = changeVideoLength(myYouTubeVideo) /*addOne is returned object*/
console.log(addOne.formatOne); /*This new object contains some fields*/

