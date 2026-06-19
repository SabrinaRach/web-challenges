const data = true; //this can be changed to numbers, strings, booleans, etc to test the switch statement

switch (typeof data) {
  case "undefined":
    console.log("undefined!");
    break;
  case "string":
    console.log("string!");
    break;
  case "boolean":
    console.log("boolean!");
    break;
  case "function":
    console.log("function!");
    break;
  case "number":
    if (isNaN(data)) {
      // NaN = not a number
      console.log("not a number!");
    } else {
      console.log("number!");
    }
    break;
  case "object":
    if (data === null) {
      console.log("null!");
    } else if (Array.isArray(data)) {
      //array ist für JS ein object
      console.log("array!");
    } else {
      console.log("object!");
    }
    break;
  default:
    console.log("I have no idea!");
}
