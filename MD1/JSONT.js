// Store JSON data in a JS variable
var json = '{"course": 411, "courseName": "Software in Telecommunications", "releaseYear": 2020, "courseActive": "true", "droppedStudents": "null", "date": 20200928, "data": [[11,2], [22, 4], [33, 1], [44,5]], "scores": {"a":77, "b":46, "c":91}}';
    
// Converting JSON-encoded string to JS object
var obj = JSON.parse(json);
    
// Accessing individual value from JS object
document.write(obj.course + "<br>");
document.write(obj.courseName + "<br>");
document.write(obj.releaseYear + "<br>");
document.write(obj.courseActive + "<br>");
document.write(obj.droppedStudents + "<br>");
document.write(obj.date + "<br>");
document.write(obj.data + "<br>");
document.write(obj.scores);
