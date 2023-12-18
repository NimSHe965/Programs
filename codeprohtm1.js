//1
function reverse_a_number(n)
{
    n = n + "";
    return n.split("").reverse().join("");
}
console.log(Number(reverse_a_number(32243)));

//2
function alphabet_order(str) {
    return str.split('').sort().join('');
  }
  console.log(alphabet_order("Taskmaster"));
  
//3
function uppercase(str) {
    var array1 = str.split(' ');
    var newarray1 = [];
    for (var x = 0; x < array1.length; x++) {
      newarray1.push(array1[x].charAt(0).toUpperCase() + array1[x].slice(1));
    }
    return newarray1.join(' ');
  }
  console.log(uppercase("the quick brown fox")); 
  
//4
function find_longest_word(str) {
    var array1 = str.match(/\w[a-z]{0,}/gi);
    var result = array1[0];
    for (var x = 1; x < array1.length; x++) {
      if (result.length < array1[x].length) {
        result = array1[x];
      } 
    }
    return result;
  }
  console.log(find_longest_word('Java Development'));
  
//5
function vowel_count(str1) {
    var vowel_list = 'aeiouAEIOU';
    var vcount = 0;
    for (var x = 0; x < str1.length; x++) {
      if (vowel_list.indexOf(str1[x]) !== -1) {
        vcount += 1;
      }
    }
    return vcount;
  }
  console.log(vowel_count("The quick brown fox")); 
  
//6
function test_prime(n) {
    if (n === 1) {
      return false;
    }
    else if (n === 2) {
      return true;
    } else { 
      for (var x = 2; x < n; x++) {
        if (n % x === 0) {
          return false;
        }
      }
      return true;  
    }
  }
  console.log(test_prime(37));
  
//7
function Second_Greatest_Lowest(arr_num) {
    arr_num.sort(function(x, y) {
      return x - y;
    });
    var uniqa = [arr_num[0]];
    var result = [];
    for (var j = 1; j < arr_num.length; j++) {
      if (arr_num[j - 1] !== arr_num[j]) {
        uniqa.push(arr_num[j]);
      }
    }
    result.push(uniqa[1], uniqa[uniqa.length - 2]);
    return result.join(',');
  }
  console.log(Second_Greatest_Lowest([1, 2, 3, 4, 5])); 
  
//8
function factors(n) {
    var num_factors = [], i;
    for (i = 1; i <= Math.floor(Math.sqrt(n)); i += 1) {
      if (n % i === 0) {
        num_factors.push(i);
        if (n / i !== i)
          num_factors.push(n / i);
      }
    }
    num_factors.sort(function(x, y) {
      return x - y;
    });
    return num_factors;
  }
  console.log(factors(15));  // [1,3,5,15] 
  console.log(factors(16));  // [1,2,4,8,16] 
  console.log(factors(17));  // [1,17] 
  
//9
function amountTocoins(amount, coins) {
    if (amount === 0) {
      return [];
    } else {
      if (amount >= coins[0]) {
        left = (amount - coins[0]);
        return [coins[0]].concat(amountTocoins(left, coins));
      } else {
        coins.shift();
        return amountTocoins(amount, coins);
      }
    }
  }
  console.log(amountTocoins(46, [25, 10, 5, 2, 1]));
  
//10
function exp(b, n) {
    var ans = 1;
    for (var i = 1; i <= n; i++) {
        ans = b * ans;
    }
    return ans;
}
console.log(exp(2, 3)); 

//11
function unique_char(str1) {
    var str = str1;
    var uniql = "";
    for (var x = 0; x < str.length; x++) {
      if (uniql.indexOf(str.charAt(x)) == -1) {
        uniql += str[x];
      }
    }
    return uniql;
  }
  console.log(unique_char("thequickbrownfoxjumpsoverthelazydog")); 
  
  //12
function Char_Counts(str1) {
    var uchars = {};
    str1.replace(/\S/g, function(l) {
      uchars[l] = (isNaN(uchars[l]) ? 1 : uchars[l] + 1);
    });
    return uchars;
  }
  console.log(Char_Counts("The quick brown fox jumps over the lazy dog")); 

  //13
  function BiggerElements(val)
   {
     return function(evalue, index, array)
     {
     return (evalue >= val);
     };
   }
var result = [11, 45, 4, 31, 64, 10]. filter(BiggerElements(10));
console.log(result);

//14
function elementsLargerThan(arr, threshold) {
    // Use the Array.prototype.filter method to filter elements
    const largerElements = arr.filter(element => element > threshold);
    return largerElements;
}
const inputArray1 = [1, 5, 8, 10, 15, 20];
const thresholdNumber = 8;
const resultArray = elementsLargerThan(inputArray1, thresholdNumber);
console.log(resultArray);

//15
function makeid(l)
{
var text = "";
var char_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
for(var i=0; i < l; i++ )
{  
text += char_list.charAt(Math.floor(Math.random() * char_list.length));
}
return text;
}
console.log(makeid(8));

//16
function getSubsetsWithLength(arr, length) {
    const result = [];
    function generateSubsets(currentSubset, start) {
        if (currentSubset.length === length) {
            result.push([...currentSubset]); // Add a copy of the currentSubset to the result
            return;
        }
        for (let i = start; i < arr.length; i++) {
            currentSubset.push(arr[i]);
            generateSubsets(currentSubset, i + 1);
            currentSubset.pop();
        }
    }
    generateSubsets([], 0);
    return result;
}
const inputArray = [1, 2, 3];
const subsetLength = 2;
const resultSubsets = getSubsetsWithLength(inputArray, subsetLength);
console.log(resultSubsets);
  
//17
function char_count(str, letter) 
{
 var letter_Count = 0;
 for (var position = 0; position < str.length; position++) 
 {
    if (str.charAt(position) == letter) 
      {
      letter_Count += 1;
      }
  }
  return letter_Count;
}

console.log(char_count('w3resource.com', 'o'));

//18
function find_FirstNotRepeatedChar(str) {
    var arra1 = str.split('');
    var result = '';
    var ctr = 0;
   
    for (var x = 0; x < arra1.length; x++) {
      ctr = 0;
   
      for (var y = 0; y < arra1.length; y++) 
      {
        if (arra1[x] === arra1[y]) {
          ctr+= 1;
        }
      }
   
      if (ctr < 2) {
        result = arra1[x];
        break;
      }
    }
    return result;
  }
  console.log(find_FirstNotRepeatedChar('abacddbec'));

  //19
  function bubble_Sort(a)
{
    var swapp;
    var n = a.length-1;
    var x=a;
    do {
        swapp = false;
        for (var i=0; i < n; i++)
        {
            if (x[i] < x[i+1])
            {
               var temp = x[i];
               x[i] = x[i+1];
               x[i+1] = temp;
               swapp = true;
            }
        }
        n--;
    } while (swapp);
 return x; 
}
console.log(bubble_Sort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

//20
function Longest_Country_Name(country_name)
  {
  return country_name.reduce(function(lname, country) 
  {
    return lname.length > country.length ? lname : country;
  }, 
"");
}
console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

//21
function longest_substring_without_repeating_characters(input) {
    var chars = input.split('');
    var curr_char;
    var str = "";
    var longest_string = "";
    var hash = {};
    for (var i = 0; i < chars.length; i++) {
    curr_char = chars[i];
    if (!hash[chars[i]]) 
    { 
    str += curr_char; 
    hash[chars[i]] = {index:i};
    }
    else 
    {
    if(longest_string.length <= str.length)
    {
    longest_string = str;
    }
    var prev_dupeIndex = hash[curr_char].index;
    var str_FromPrevDupe = input.substring(prev_dupeIndex + 1, i);
    str = str_FromPrevDupe + curr_char;
    hash = {};
    for (var j = prev_dupeIndex + 1; j <= i; j++) {
    hash[input.charAt(j)] = {index:j};
    }
    }
    }
    return longest_string.length > str.length ? longest_string : str;
    }
    console.log(longest_substring_without_repeating_characters("google.com")); 
    
    console.log(longest_substring_without_repeating_characters("example.com")); 

//22
function addStudent(id, refreshCallback)
{
    refreshCallback();  
}

function refreshStudentList() {
    console.log('Hello');
}

addStudent(1, refreshStudentList);

//23
function abc() {
    console.log( arguments.callee.name );
}
abc();

//24
function is_Palindrome(str1) {
    var rev = str1.split("").reverse().join("");
    return str1 == rev;
    }
    
    function longest_palindrome(str1){
    
    var max_length = 0,
    maxp = '';
    
    for(var i=0; i < str1.length; i++) 
    {
    var subs = str1.substr(i, str1.length);
    
    for(var j=subs.length; j>=0; j--) 
    {
    var sub_subs_str = subs.substr(0, j);
    if (sub_subs_str.length <= 1)
    continue;
    
    if (is_Palindrome(sub_subs_str))
    {
    if (sub_subs_str.length > max_length) 
    {
    max_length = sub_subs_str.length;
    maxp = sub_subs_str;
    }
    }
    }
    }
    
    return maxp;
    }
    console.log(longest_palindrome("abracadabra"));
    
    console.log(longest_palindrome("HYTBCABADEFGHABCDEDCBAGHTFYW12345678987654321ZWETYGDE")); 

//25
const curry = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry.bind(null, fn, arity, ...args);
console.log(curry(Math.pow)(2)(8));
console.log(curry(Math.min, 3)(10)(50)(2));

//26
const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
console.log(matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })); // true
console.log(matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })); // false
console.log(matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })); // false

//27
const digitize = n => [...`${n}`].map(i => parseInt(i));

console.log(digitize(123));
console.log(digitize(1230));

//28
const powerset = arr => arr.reduce((a, v) => a.concat(a.map(r => [v].concat(r))), [[]]);
console.log(powerset([1, 2]));
console.log(powerset([1, 2, 3]));
console.log(powerset([1, 2, 3, 4]));

//29
const pull_at_Index = (arr, pullArr) => {
    let removed = [];
    let pulled = arr
      .map((v, i) => (pullArr.includes(i) ? removed.push(v) : v))
      .filter((v, i) => !pullArr.includes(i));
    arr.length = 0;
    pulled.forEach(v => arr.push(v));
    return removed;
  };
  let arra1 = ['a', 'b', 'c', 'd', 'e', 'f'];
  console.log(pull_at_Index(arra1, [1, 3]));
  let arra2 =  [1, 2, 3, 4, 5, 6, 7];
  console.log(pull_at_Index(arra2, [4]));

//30
function remove_from_left(arr, n = 1){
    return arr.slice(n); 
  }
  console.log(remove_from_left([1, 2, 3]));
  console.log(remove_from_left([1, 2, 3], 1));
  console.log(remove_from_left([1, 2, 3], 2));
  console.log(remove_from_left([1, 2, 3], 4));

  //31
  function remove_from_right(arr, n = -1){
    return arr.slice(n); 
  }
  
  console.log(remove_from_right([1, 2, 3]));
  console.log(remove_from_right([1, 2, 3], -1));
  console.log(remove_from_right([1, 2, 3], -2));
  console.log(remove_from_right([1, 2, 3], -4));

  //32
  const filter_Non_Unique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i));

console.log(filter_Non_Unique([1, 2, 2, 3, 4, 4, 5]));  
console.log(filter_Non_Unique([1, 2, 3, 4]));  

//33
const filter_Non_UniqueBy = (arr, fn) =>
  arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)));

console.log(filter_Non_UniqueBy(
  [
    { id: 0, value: 'a' },
    { id: 1, value: 'b' },
    { id: 2, value: 'c' },
    { id: 1, value: 'd' },
    { id: 0, value: 'e' }
  ],
  (a, b) => a.id == b.id
)); 

//34
const decapitalize = ([first, ...rest], upperRest = false) =>
  first.toLowerCase() + (upperRest ? rest.join('').toUpperCase() : rest.join(''));
console.log(decapitalize('Aeroplane'))
console.log(decapitalize('Red', true));

//35
const xProd = (a, b) => a.reduce((acc, x) => acc.concat(b.map(y => [x, y])), []);
console.log(xProd([1, 2], ['a', 'b']));
console.log(xProd([1, 2], [1, 2]));
console.log(xProd(['a', 'b'], ['a', 'b']));

//36
const time_taken = callback => {
    const result = callback();
    return result;
  };
  console.log("Time taken: " + time_taken(() => Math.pow(2, 10))+" ms"); 
  console.log("Time taken: " + time_taken(() => Math.sqrt(225))+" ms");
  console.log("Time taken: " + time_taken(() => Math.sqrt((5 * 5) + (6 * 6)))+" ms");

  
//37
const to_Safe_Integer = num =>
 Math.round(Math.max(Math.min(num, Number.MAX_SAFE_INTEGER), Number.MIN_SAFE_INTEGER));
console.log(to_Safe_Integer('5.2'));
console.log(to_Safe_Integer('5.52'));
console.log(to_Safe_Integer(Infinity)); 

//38
const tail = arr => (arr.length > 1 ? arr.slice(1) : arr);
console.log(tail([1, 2, 3])); 
console.log(tail([1]));

//39
const sumBy = (arr, fn) =>
arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);
console.log(sumBy([{ n: 4 }, { n: 2 }, { n: 8 }, { n: 6 }], o => o.n));
console.log(sumBy([{ n: -4 }, { n: -2 }, { n: 8 }, { n: 6 }], 'n'));

//40
const random_Number_In_Range = (min, max) => Math.random() * (max - min) + min;
console.log(random_Number_In_Range(2, 10)); 
console.log(random_Number_In_Range(1, 5)); 
console.log(random_Number_In_Range(-5, -2)); 
console.log(random_Number_In_Range(0, 1));

//41
const random_intArray_In_Range = (min, max, n = 1) =>
  Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);
console.log(random_intArray_In_Range(1, 20, 10));
console.log(random_intArray_In_Range(-10, 10, 5));

//42
const over = (...fns) => (...args) => fns.map(fn => fn.apply(null, args));
const minMax = over(Math.min, Math.max);
console.log(minMax(1, 2, 3, 4, 5)); 
console.log(minMax(1, 2, 5, 4, 3)); 
console.log(minMax(1, 2, 5, -4, 3));

//43
const orderBy = (arr, props, orders) =>
  [...arr].sort((a, b) =>
    props.reduce((acc, prop, i) => {
      if (acc === 0) {
        const [p1, p2] = orders && orders[i] === 'desc' ? [b[prop], a[prop]] : [a[prop], b[prop]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
const users = [{ name: 'fred', age: 48 }, { name: 'barney', age: 36 }, { name: 'fred', age: 40 }];

console.log(orderBy(users, ['name', 'age'], ['asc', 'desc'])); 
console.log(orderBy(users, ['name', 'age']));

//44
const pad = (str, length, char = ' ') =>
 str.padStart((str.length + length) / 2, char).padEnd(length, char);
console.log(pad('cat', 8));
console.log(pad(String(42), 6, '0'))
console.log(pad('foobar', 3))

//45
const omit = (obj, arr) =>
  Object.keys(obj)
    .filter(k => !arr.includes(k))
    .reduce((acc, key) => ((acc[key] = obj[key]), acc), {});

console.log(omit({ a: 1, b: '2', c: 3 }, ['b']));
console.log(omit({ a: 1, b: 2, c: 3 }, ['c']));

//46
const object_From_Pairs = arr => arr.reduce((a, v) => ((a[v[0]] = v[1]), a), {});
console.log(object_From_Pairs([['a', 1], ['b', 2]])); 
console.log(object_From_Pairs([[1, 10], [2, 20], [3, 30]]));

//47
const coalesceFactory = valid => (...args) => args.find(valid);
const customCoalesce = coalesceFactory(_ => ![null, undefined, '', NaN].includes(_));
console.log(customCoalesce(undefined, null, NaN, '', 'Waldo'));

//48
const collectInto = fn => (...args) => fn(args);
const Pall = collectInto(Promise.all.bind(Promise));
let p1 = Promise.resolve(1);
let p2 = Promise.resolve(2);
let p3 = new Promise(resolve => setTimeout(resolve, 2000, 3));
Pall(p1, p2, p3).then(console.log); // [1, 2, 3] (after about 2 seconds)

//49
const bifurcate = (arr, filter) =>
  arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]));

//50
const curry1 = (fn, arity = fn.length, ...args) =>
  arity <= args.length ? fn(...args) : curry1.bind(null, fn, arity, ...args);
console.log(curry1(Math.pow)(2)(8));
console.log(curry1(Math.min, 3)(10)(50)(2));

//51
const equals = (a, b) => {
    if (a === b) return true;
    if (a instanceof Date && b instanceof Date) return a.getTime() === b.getTime();
    if (!a || !b || (typeof a !== 'object' && typeof b !== 'object')) return a === b;
    if (a === null || a === undefined || b === null || b === undefined) return false;
    if (a.prototype !== b.prototype) return false;
    let keys = Object.keys(a);
    if (keys.length !== Object.keys(b).length) return false;
    return keys.every(k => equals(a[k], b[k]));
  };
  
  console.log(equals({ a: [2, { e: 3 }], b: [4], c: 'foo' }, { a: [2, { e: 3 }], b: [4], c: 'foo' }));
  
//52
const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
function Foo() {
  this.a = () => 1;
  this.b = () => 2;
}
Foo.prototype.c = () => 3;
console.log(functions(new Foo()));
console.log(functions(new Foo(), true));

//53
const get = (from, ...selectors) =>
  [...selectors].map(s =>
    s
      .replace(/\[([^\[\]]*)\]/g, '.$1.')
      .split('.')
      .filter(t => t !== '')
      .reduce((prev, cur) => prev && prev[cur], from)
  );
const obj = { selector: { to: { val: 'val to select' } }, target: [1, 2, { a: 'test' }] };

console.log(get(obj, 'selector.to.val', 'target[0]', 'target[2].a')); 

//54
const get_Meridiem_Suffix_Of_Integer1 = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';

console.log(get_Meridiem_Suffix_Of_Integer1(0));
console.log(get_Meridiem_Suffix_Of_Integer1(11));
console.log(get_Meridiem_Suffix_Of_Integer1(13));
console.log(get_Meridiem_Suffix_Of_Integer1(25));

//55
const get_Meridiem_Suffix_Of_Integer = num =>
  num === 0 || num === 24
    ? 12 + 'am'
    : num === 12
      ? 12 + 'pm'
      : num < 12
        ? (num % 12) + 'am'
        : (num % 12) + 'pm';

console.log(get_Meridiem_Suffix_Of_Integer(0));
console.log(get_Meridiem_Suffix_Of_Integer(11));
console.log(get_Meridiem_Suffix_Of_Integer(13));
console.log(get_Meridiem_Suffix_Of_Integer(25));

//56
const group_By = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || []).concat(arr[i]);
    return acc;
  }, {});
console.log(group_By([6.1, 4.2, 6.3], Math.sqrt)); 
console.log(group_By([6.1, 4.2, 6.3], Math.floor)); 
console.log(group_By(['one', 'two', 'three'], 'length'));

//57
const initialize_2D_Array = (w, h, val = null) =>
 Array.from({ length: h }).map(() => Array.from({ length: w }).fill(val));

console.log(initialize_2D_Array(2, 2, 0));
console.log(initialize_2D_Array(3, 3, 3));

//58
const initialize_Array_With_Range = (end, start = 0, step = 1) =>
  Array.from({ length: Math.ceil((end + 1 - start) / step) }).map((v, i) => i * step + start);

console.log(initialize_Array_With_Range(5)); 
console.log(initialize_Array_With_Range(8, 3));  
console.log(initialize_Array_With_Range(6, 0, 2));  

//59
const allEqual = arr => arr.every(val => val === arr[0]);
console.log(allEqual([1, 2, 3, 4, 5, 6]));
console.log(allEqual([12, 12, 12, 12]));

//60
const bifurcateBy1 = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcateBy1(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));

//61
const bifurcateBy = (arr, fn) =>
  arr.reduce((acc, val, i) => (acc[fn(val, i) ? 0 : 1].push(val), acc), [[], []]);
console.log(bifurcateBy(['beep', 'boop', 'foo', 'bar'], x => x[0] === 'b'));

//62
const bind = (fn, context, ...args) =>
  function() {
    return fn.apply(context, args.concat(...arguments));
  };
function greet(greeting, punctuation) {
  return greeting + ' ' + this.user + punctuation;
}
const freddy = { user: 'Morning' };
const freddyBound = bind(greet, freddy);
console.log(freddyBound('Good', '!'));

//63
const castArray = val => (Array.isArray(val) ? val : [val]);
console.log(castArray('w3r')); 
console.log(castArray([100]));

//64
const chainAsync = fns => {
  let curr = 0;
  const next = () => fns[curr++](next);
  next();
};
chainAsync([
  next => {
    console.log('0 seconds');
    setTimeout(next, 1000);
  },
  next => {
    console.log('1 second');
  }
]);

//65
const cloneRegExp = regExp => new RegExp(regExp.source, regExp.flags);
const regExp = /lorem ipsum/gi;
console.log(regExp);
const regExp2 = cloneRegExp(regExp);
console.log(regExp2);

//66
const compose = (...fns) => fns.reduce((f, g) => (...args) => f(g(...args)));
const add5 = x => x + 5;
const multiply = (x, y) => x * y;
const multiplyAndAdd5 = compose(
  add5,
  multiply
);
console.log(multiplyAndAdd5(5, 2)); 

//67
const composeRight = (...fns) => fns.reduce((f, g) => (...args) => g(f(...args)));
const add = (x, y) => x + y;
const square = x => x * x;
const addAndSquare = composeRight(add, square);

console.log(addAndSquare(1, 2));
console.log(addAndSquare(3, 2));

//68
const converge = (converger, fns) => (...args) => converger(...fns.map(fn => fn.apply(null, args)));
const average = converge((a, b) => a / b, [
  arr => arr.reduce((a, v) => a + v, 0),
  arr => arr.length
]);
console.log(average([ 6, 7]));
console.log(average([1, 2, 3, 4, 5, 6, 7]));

//69
const countBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val, i) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
console.log(countBy([6, 10, 100, 10], Math.sqrt));
console.log(countBy([6.1, 4.2, 6.3], Math.floor));
console.log(countBy(['one', 'two', 'three'], 'length'));

//70
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 1));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 2));
console.log(countOccurrences([1, 1, 2, 1, 2, 3], 3));

//71
const deepClone = obj => {
  let clone = Object.assign({}, obj);
  Object.keys(clone).forEach(
    key => (clone[key] = typeof obj[key] === 'object' ? deepClone(obj[key]) : obj[key])
  );
  return Array.isArray(obj) ? (clone.length = obj.length) && Array.from(clone) : clone;
};
const a = { foo: 'bar', obj: { a: 1, b: 2 } };
const b = deepClone(a); // a !== b, a.obj !== b.obj
console.log(b)

//72
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    ? 'Mobile'
    : 'Desktop';
console.log(detectDeviceType()); // "Mobile" or "Desktop"

//73
const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(v => fn(v)));
  return a.filter(x => !s.has(fn(x)));
};
console.log(differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(differenceBy([{ x: 2 }, { x: 1 }], [{ x: 1 }], v => v.x));

//74
const differenceWith = (arr, val, comp) => arr.filter(a => val.findIndex(b => comp(a, b)) === -1);
console.log(differenceWith([1, 1.2, 1.5, 3, 0], [1.9, 3, 0], (a, b) => Math.round(a) === Math.round(b)));

//75
function lcm_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
   return false;
 return (!x || !y) ? 0 : Math.abs((x * y) / gcd_two_numbers(x, y));
}

function gcd_two_numbers(x, y) {
 x = Math.abs(x);
 y = Math.abs(y);
 while(y) {
   var t = y;
   y = x % y;
   x = t;
 }
 return x;
}
console.log(lcm_two_numbers(3,15));
console.log(lcm_two_numbers(10,15));

//76
function is_Natural(n) 
      {
	   if (typeof n !== 'number') 
	        return 'Not a number'; 
			
	 return (n >= 0.0) && (Math.floor(n) === n) && n !== Infinity;
	    }
console.log(is_Natural(-15));
console.log(is_Natural(1));console.log(is_Natural(10.22));
console.log(is_Natural(10/0));

//77
function power_of_2(n) {
  if (typeof n !== 'number') 
       return 'Not a number'; 
 
     return n && (n & (n - 1)) === 0;
 }
 
 console.log(power_of_2(16));
 console.log(power_of_2(18));
 console.log(power_of_2(256));

 //78
function precise_round(n, r) {
  let int = Math.floor(n).toString()
  if (typeof n !== 'number' || typeof r !== 'number') return 'Not a Number'
  if (int[0] == '-' || int[0] == '+') int = int.slice(int[1], int.length)
  return n.toPrecision(int.length + r)
}
console.log(precise_round(12.375,2));
console.log(precise_round(-10.3079499, 3));
console.log(precise_round(10.49999,0));
console.log(precise_round(10.49999,2));

//79
function product(input){
  if (toString.call(input) !== "[object Array]")
     return false;
   
          var total   =   1;
   
        for(var i=0;i<input.length;i++){
                if(isNaN(input[i])){
                  continue;
                }
                 total   *=  Number(input[i]);
             }
           return total;
         }
 console.log(product([1,2,3]));
 console.log(product([100,-200,3]));
 console.log(product([1,2,'a',3]));

 //80
 function pythagorean_theorem(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number')) 
return false; 
		return Math.sqrt(x * x + y * y);
	}

console.log(pythagorean_theorem(2, 4));
console.log(pythagorean_theorem(3, 4));

//81
function integer_to_roman(num) {
  if (typeof num !== 'number') 
  return false; 
  
  var digits = String(+num).split(""),
  key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
  "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
  "","I","II","III","IV","V","VI","VII","VIII","IX"],
  roman_num = "",
  i = 3;
  while (i--)
  roman_num = (key[+digits.pop() + (i * 10)] || "") + roman_num;
  return Array(+digits.join("") + 1).join("M") + roman_num;
  }
  
  console.log(integer_to_roman(27));

//82
function roman_to_Int(str1) {
  if(str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;
  
  for(var i = 1; i < str1.length; i++){
  curr = char_to_int(str1.charAt(i));
  pre = char_to_int(str1.charAt(i-1));
  if(curr <= pre){
  num += curr;
  } else {
  num = num - pre*2 + curr;
  }
  }
  
  return num;
  }
  
  function char_to_int(c){
  switch (c){
  case 'I': return 1;
  case 'V': return 5;
  case 'X': return 10;
  case 'L': return 50;
  case 'C': return 100;
  case 'D': return 500;
  case 'M': return 1000;
  default: return -1;
  }
  }
  console.log(roman_to_Int('XXVI'));
  console.log(roman_to_Int('CI'));

  //83
  var n1 = '$40.24';
  var n2 = '$21.57';
  var regp = /[^0-9.-]+/g;
  
  console.log(parseFloat(n1.replace(regp, '')) +       parseFloat(n2.replace(regp, '')));
  
  console.log(parseFloat(n1.replace(regp, '')) -         parseFloat(n2.replace(regp, '')));
  
  console.log(parseFloat(n1.replace(regp, '')) *         parseFloat(n2.replace(regp, '')));
  
  console.log(parseFloat(n1.replace(regp, '')) /         parseFloat(n2.replace(regp, '')));

  //84
  function radians_to_degrees(radians)
{
  var pi = Math.PI;
  return radians * (180/pi);
}
          
console.log(radians_to_degrees(0.7853981633974483));

//85
function value_limit(val, min, max) {
  return val < min ? min : (val > max ? max : val);
}

console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));

//86
function digits_count(n) {
  var count = 0;
  if (n >= 1) ++count;

  while (n / 10 >= 1) {
    n /= 10;
    ++count;
  }

  return count;
}

console.log(digits_count(12112));

console.log(digits_count(457));

//87
function subtraction(arr) 
 {
  if (Object.prototype.toString.call(arr) === '[object Array]') {
    var total = arr[0];
    if (typeof (total) !== 'number') {
      return false;
    }
    for (var i = 1, length = arr.length; i < length; i++)
    {
      if (typeof (arr[i]) === 'number')
      {
        total -= arr[i];
      } 
      else 
      return false;
    }
    return total;
   } 
    else
     return false;
  }
console.log(subtraction([7,3, 2,-1]));


//88
function leap_year_range(st_year, end_year) {
  var year_range = [];
  for (var i = st_year; i <= end_year; i++)
  {
       year_range.push(i);
  }
  var new_array = [];

year_range.forEach(
function(year)
{ 
 if (test_LeapYear(year)) 
 new_array.push(year);
});

return new_array;
}

//89
function test_LeapYear(year) {
if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
          return year;
  } else {
          return false;
  }
}

console.log(leap_year_range(2000,2012));

//90
function shuffle(arra1) {
  var ctr = arra1.length, temp, index;
  while (ctr > 0) {
      index = Math.floor(Math.random() * ctr);
      ctr--;
      temp = arra1[ctr];
      arra1[ctr] = arra1[index];
      arra1[index] = temp;
  }
  return arra1;
}
var myArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(shuffle(myArray));

//91
function find_duplicate_in_array(arra1) {
  var object = {};
  var result = [];

  arra1.forEach(function (item) {
    if(!object[item])
        object[item] = 0;
      object[item] += 1;
  })

  for (var prop in object) {
     if(object[prop] >= 2) {
         result.push(prop);
     }
  }

  return result;

}
console.log(find_duplicate_in_array([1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6]));

//92
function union(arra1, arra2) {
  
  if ((arra1 == null) || (arra2==null)) 
    return void 0;
  
  var obj = {};
 
  for (var i = arra1.length-1; i >= 0; -- i)
     obj[arra1[i]] = arra1[i];
 
  for (var i = arra2.length-1; i >= 0; -- i)
     obj[arra2[i]] = arra2[i];
 
  var res = [];
 
  for (var n in obj)
  {
  
    if (obj.hasOwnProperty(n)) 
      res.push(obj[n]);
  }
 
  return res;
}
console.log(union([1, 2, 3], [100, 2, 1, 10]));

//93
function longest_common_starting_substring(arr1){
  var arr= arr1.concat().sort(),
  a1= arr[0], a2= arr[arr.length-1], L= a1.length, i= 0;
  while(i< L && a1.charAt(i)=== a2.charAt(i)) i++;
  return a1.substring(0, i);
  }
  
  console.log(longest_common_starting_substring(['go', 'google'])); 
  
  console.log(longest_common_starting_substring(['SQLInjection', 'SQLTutorial'])); 
  
  console.log(longest_common_starting_substring(['abcd', '1234'])); 

  //94
  var arr = [1, 3, 6, 3, -5];
console.log(arr);
arr.length = 0;
console.log(arr);

//95
function random_item(items)
{
  
return items[Math.floor(Math.random()*items.length)];
     
}

var items = [254, 45, 212, 365, 2543];
console.log(random_item(items));

//96
function rangeBetwee(start, end) 
{
  
		if (start > end) {
			var arr = new Array(start - end + 1);
			for (var i = 0; i < arr.length; i++, start--) {
				resarrult[i] = start;
			}
			return arr;
		} 
       else 
       {
			var arro = new Array(end-start+1);
         
		for (var j = 0; j < arro.length; j++, start++) 
        {
			arro[j] = start;
		}
      		return arro;
		}
	}

console.log(rangeBetwee(4, 7));
console.log(rangeBetwee(-4, 7));

//97
for (var x=0; x<=5; x++) {
  if (x === 0) {
          console.log(x +  " is even");
  }
  else if (x % 2 === 0) {
          console.log(x + " is even");   
  }
  else {
          console.log(x + " is odd");
  }
}

//98
try {
  const undefinedObject = undefined;
  console.log(undefinedObject.property);
} catch (error) {
  if (error instanceof TypeError) 
  {
    console.log('Error: Property access to undefined object');
  } 
  else 
  {
    throw error;
  }
}

//99
myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString());
console.log(myColor.join());
console.log(myColor.join('+'));

//100
function divide_Numbers(x, y) {
  try {
    if (typeof x !== 'number' || typeof y !== 'number') {
      throw new TypeError('Invalid arguments. Both arguments should be numbers.');
    }
  
    if (y === 0) {
      throw new Error('Invalid divisor. Cannot divide by zero.');
    }
  
    const result = x / y;
    console.log('Result:', result);
  } catch (error) {
    if (error instanceof TypeError) {
      console.log('TypeError:', error.message);
    } else {
      console.log('Error:', error.message);
    }
  }
}
divide_Numbers(20, '4');
divide_Numbers(20, 4);  
divide_Numbers(20, 0); 