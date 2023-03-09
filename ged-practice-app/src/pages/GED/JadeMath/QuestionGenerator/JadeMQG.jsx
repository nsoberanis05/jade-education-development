import React from "react";
import Cone from '../../../../assets/Cone.svg'

/*========================= Other Functions =========================== */

/**
 * Reduce a fraction by finding the Greatest Common Divisor and dividing by it.
 * @param {number} numerator 
 * @param {number} denominator 
 * @returns {[number,number]}
 */
function reduce(numerator, denominator) {
  var gcd = function gcd(a, b) {
    return b ? gcd(b, a % b) : a;
  };
  gcd = gcd(numerator, denominator);
  let num = numerator / gcd;
  let den = denominator / gcd;
  return [num, den];
}

/**
 * Generates a random number excluding 0 by default
 * @param {number} max 10 by default
 * @param {number} min 1 by default
 * @param {boolean} zero false by default
 * @returns {number}
 */
export const randomNumber = (max = 10, min = 1, zero = false) => {
  let number = Math.floor(Math.random() * ((max - min) + 1 ) ) + min;
  if(number === 0 && !zero) number++
  return number;
}

export const timesTables = (max = 12, min = 1) => {
  let a = randomNumber(12,3)
  let b = randomNumber(12,3)
  let correct_answer = a * b

  const question = `What is ${a} x ${b}`

  return {
    question,
    correct_answer,
  }
}
/*====================================================================== */

/*========== Algebra, Functions (Math topic), and Patterns ============= */

/**
 * Generates an easy algebra solve for x equation
 * @returns {object} 
 */
export const solveForXEasy = () => {
  // const a and b are the numbers that are being manipulated in the question
  const a = randomNumber(10)
  const b = randomNumber(10)

  // the x variable that the user is going to solve for
  const x = randomNumber(11, 2)

  // solved operation
  const solved = a * x + b;

  // multiple option choices
  const choices = [0, 0, 0, 0];
  choices[randomNumber(3,0)] = x; // randomly assigns the correct answer to one of the four choices 

  for (let i = 0; i < choices.length; i++) {
    if (choices[i]) continue;
    let operator = randomNumber(2);
    let option = operator == 1 ? x + randomNumber(4) : x - randomNumber(4);
    while (choices.includes(option)){
      option++;
    }
    choices[i] = option;
  }

  const question = `Solve for x: ${a}x + ${b} = ${solved}`;

  return {
    question: question,
    correct_answer: x,
    answer1: choices[0],
    answer2: choices[1],
    answer3: choices[2],
    answer4: choices[3],
  };

};

/**
 * Generates a medium level quadratic solve for x equation
 * @todo fix error where variable second can be zero
 * @todo generate fake answers
 * @returns {object} 
 */
export const solveForXQuadratic = () => {
    /*
    This is how the problem is going to be solved:

    x² + x + constant = 0
    ea(x^2) + (eb + fc) + fd = 0
    ea(x^2) + eb(x) + fc(x) + fd
    e(a + b) + f(c + d) // remember that c and d == a and b
    (a + b)(e + f)

    x1 is going to be found in (a + b) 
    x2 is going to be found in (e + f)
  
  */

  let a = randomNumber(3,-3)
  let b = randomNumber(8,-8)
  let c = a
  let d = b

  let e = randomNumber(3,-3)
  let f = randomNumber(8,-8)

  let first = e * a; // x²
  let second = (e * b) + (f * c) // x
  let third = f * d // constant

  let x1; 
  let x2;

  let temp;
  if(!Number.isInteger((b * -1)/a)){
    temp = reduce((b * -1), a)
    x1 = `${temp[0]}/${temp[1]}`
  }
  else {
    x1 = (b * -1)/a
  }

  if(!Number.isInteger((f * -1)/e)){
    temp = reduce((f * -1), e)
    x2 = `${temp[0]}/${temp[1]}`
  }
  else {
    x2 = (f * -1)/e
  }

  let question = `Solve for x: ${first}x² ${second > 0 ? `+ ${second}`: `- ${second * -1}`}x ${third > 0 ? `+ ${third}`: `- ${third * -1}`}`
  let correct_answer = x1
  const choices = [x1,x2,0,0]
  return {
    question: question,
    correct_answer: correct_answer,
    answer1: choices[0],
    answer2: choices[1],
    answer3: choices[2],
    answer4: choices[3],
    info: [a,b,c,d,e,f],
  };
}

/**
 * Slope Two Points Question Generator
 * @returns {object}
 */
export const solveSlopeWithTwoPoints = () => {
  let y1 = randomNumber(10,-10)
  let y2 = randomNumber(10,-10)

  let x1 = randomNumber(10,-10)
  let x2 = randomNumber(10,-10)

  while (y2 - y1 === 0) {
    y1 = randomNumber(10,-10)
    y2 = randomNumber(10,-10)
  }

  while (x2 - x1 === 0) {
    x1 = randomNumber(10,-10)
    x2 = randomNumber(10,-10)
  }

  const left = y2 - y1;
  const right = x2 - x1;
  let correct_answer;

  if(!Number.isInteger(left/right)){
    const slope = reduce(left, right);
    correct_answer = `${slope[0]}/${slope[1]}`;
  } else{
    correct_answer = left/right
  }

  const question = `Find the slope for a line passing through points (${x1}, ${y1}) and (${x2}, ${y2})`;

  const choices = [0, 0, 0, 0];
  choices[randomNumber(3,0)] = correct_answer;

  for (let i = 0; i < choices.length; i++) {
    if (choices[i]) continue;

    let choice;
    let generating = true;

    while (generating) {
      let left = 0;
      let right = 0;
      let reduced;

      while (left == 0) left = y2 - y1 + randomNumber(3);
      while (right == 0) right = x2 - x1 + randomNumber(3);

      if(!Number.isInteger(left/right)){
        reduced = reduce(left, right);
        choice = `${reduced[0]}/${reduced[1]}`;
      } else{
        choice = left/right
      }
      if(!choices.includes(choice)) {
        generating = false;
      }
    }

    choices[i] = choice;
  }

  return {
    question: question,
    correct_answer: correct_answer,
    answer1: choices[0],
    answer2: choices[1],
    answer3: choices[2],
    answer4: choices[3],
  };
};

export const arithmeticSequence_Generator = () => {

  const base =
    Math.random() < 0.5
      ? (Math.floor(Math.random() * 100) + 1) * -1
      : Math.floor(Math.random() * 100) + 1;

  const diff = Math.floor(Math.random() * 30) + 6;
  const question = `Find the next term in the following arithmetic sequence: ${base}, ${
    base + diff
  }, ${base + diff * 2}, ${base + diff * 3}...`;
  const correct_answer = base + diff * 4;

  const choices = [0, 0, 0, 0];
  choices[Math.floor(Math.random() * 3)] = correct_answer;

  for (let i = 0; i < choices.length; i++) {
    if (choices[i]) continue;
    let temp =
    (base + diff * 5) < 0
        ? -1 * (Math.floor(Math.random() * 3) + 1) + (base + diff * 4)
        : Math.floor(Math.random() * 3) + 1 + (base + diff * 4);
    while (choices.includes(temp)) temp++;
    choices[i] = temp;
  }

  return {
    question: question,
    correct_answer: correct_answer,
    answer1: choices[0],
    answer2: choices[1],
    answer3: choices[2],
    answer4: choices[3],
  };
};

export const quadraticFunctionGivenVertexAndPoint_Generator = () => {
  /*  
    Sample Data

    let point_x1 = 4
    let point_y1 = -3
    let vertex_x1 = 2
    let vertex_y1 = 5 
    let first = point_y1 - vertex_y1
    let second = (point_x1 - vertex_x1) * (point_x1 - vertex_x1)
    let fake_first = point_y1 - vertex_y1
    let fake_second = (point_x1 + vertex_x1) * (point_x1 - vertex_x1)
    let a = first/second

    Formula = f(x) - k = a(x - h)^2
    Simplified form answer = -2x² + 8x -3 
    Vertex form answer =  -2(x - 2)² + 5 

*/


  const generate_first = () => {
    let first = 0;
    let point_y1;
    let vertex_y1;
    let fake_first;
    while (first == 0) {
      point_y1 = randomNumber(7, -7)
      vertex_y1 = randomNumber(7, -7)
      first = point_y1 - vertex_y1;
      fake_first = point_y1 + vertex_y1;
    }
    return [first, fake_first, point_y1, vertex_y1];
  };
  const generate_second = () => {
    let second = 0;
    let point_x1;
    let vertex_x1;
    let fake_second;
    while (second == 0) {
      point_x1 = randomNumber(7, -7)
      vertex_x1 = randomNumber(7, -7)
      second = (point_x1 - vertex_x1) * (point_x1 - vertex_x1);
      fake_second = (point_x1 + vertex_x1) * (point_x1 - vertex_x1);
    }
    return [second, fake_second, point_x1, vertex_x1];
  };

  let [second, fake_second, point_x1, vertex_x1] = generate_second();
  let [first, fake_first, point_y1, vertex_y1] = generate_first();
  let a = first / second;

  // Regenarates new numbers if current generated numbers are bad
  while (!Number.isInteger(a)) {
    let [first, fake_first, point_y1, vertex_y1] = generate_first();
    let [second, fake_second, point_x1, vertex_x1] = generate_second();
    a = first / second;
  }

  // Question and Answers formatter
  let correct_answer;

  const form = "vertex from"; // Math.random() < 0.5 ? 'simplified form' : 'vertex from'

  const question = `Find the quadratic function that has vertex (${vertex_x1}, ${vertex_y1}) and passes through the point (${point_x1}, ${point_y1}) in ${form}`;

  const choices = [0, 0, 0, 0];

  if (form === "vertex from") {
    correct_answer = `${a}(x ${
      vertex_x1 > 0 ? `- ${vertex_x1}` : `+ ${vertex_x1 * -1}`
    })² ${vertex_y1 > 0 ? `+ ${vertex_y1}` : `- ${vertex_y1 * -1}`}`;
    choices[0] = correct_answer;
    choices[1] = `${a * -1}(x ${
      vertex_x1 > 0 ? `- ${vertex_x1}` : `+ ${vertex_x1 * -1}`
    })² ${vertex_y1 > 0 ? `+ ${vertex_y1}` : `- ${vertex_y1 * -1}`}`;
    choices[2] = `${a}(x ${
      vertex_x1 > 0 ? `+ ${vertex_x1}` : `- ${vertex_x1 * -1}`
    })² ${vertex_y1 > 0 ? `+ ${vertex_y1}` : `- ${vertex_y1 * -1}`}`;
    choices[3] = `${a}(x ${
      vertex_x1 > 0 ? `- ${vertex_x1}` : `+ ${vertex_x1 * -1}`
    })² ${vertex_y1 > 0 ? `- ${vertex_y1}` : `+ ${vertex_y1 * -1}`}`;

    let random_num = Math.floor(Math.random() * 2 + 1);
    let temp_choice = choices[random_num];
    choices[0] = temp_choice;
    choices[random_num] = correct_answer;
  } else if (form === "simplified form") {
    let simplified_first =
      vertex_x1 > 0
        ? (-vertex_x1 + -vertex_x1) * a
        : (vertex_x1 + vertex_x1) * a;
    let simplified_second = vertex_x1 * 2 * a + vertex_y1;

    correct_answer = `${a}x² ${
      simplified_first > 0 ? "+" : ""
    } ${simplified_first}x ${
      simplified_second > 0 ? "+" : ""
    } ${simplified_second}`;
  }

  return {
    question: question,
    correct_answer: correct_answer,
    answer1: choices[0],
    answer2: choices[1],
    answer3: choices[2],
    answer4: choices[3],
    info: [a, point_x1, point_y1, vertex_x1, vertex_y1, first, second],
  };
};

/*====================== Measurment and Geometry ====================== */

export const findVolumeCone = () => {
  const radius =  randomNumber(5 ,2)
  const height =  randomNumber(10,2)
  const locations = ['A school', 'An airport', 'An office', 'A charity event', 'A birthday party', ]
  const correct_answer = Math.round(((Math.PI * (radius * radius) * height) / 3) * 10) / 10
  const question = `${locations[randomNumber(locations.length - 1)]} uses paper drinking cups in the shape of a cone. To the nearest tenth of a cubic inch, what is the volume of each drinking cup when the radius of the cup is ${radius} inches and the height is ${height} inches?
  `
  const image = Cone

  const choices = [0,0,0,0]
  choices[0] = correct_answer
  choices[1] = Math.round(((Math.PI * (radius * radius) * height)) * 10) / 10
  choices[2] = correct_answer + randomNumber(45, - 45)
  choices[3] = Math.round(((Math.PI * radius * height) / 3) * 10) / 10

  const before = [...choices]

  let random_num = randomNumber(3,0,true)

  let temp = choices[random_num] 
  choices[random_num] = correct_answer
  choices[0] = temp

  return {
    question: question,
    correct_answer: correct_answer,
    answer1: choices[0],
    answer2: choices[1],
    answer3: choices[2],
    answer4: choices[3],
    image: image,
    info: [radius, height, random_num, correct_answer, before],
  };
}
