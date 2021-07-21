const list = new Array(600).join('1.1').split('.');

function removeItemsFromList() {
    var item = list.pop();

    if (item) {
        setTimeout(removeItemsFromList, 0);
    } else {
        console.log(list);
    }
}

removeItemsFromList();

console.log(list);

// Hoisting

function bigBrother() {
    function littleBrother() {
        return 'it is me!';
    }
    return littleBrother();
    function littleBrother() {
        return 'no me!';
    }
}

// Before running this code, what do you think the output is?
console.log(bigBrother());

// Function declaration - Hoisted
function canada() {
    console.log(`cold!`);
}

// Function expression - Hoisted as undefined
var india = () => {
    console.log(`warm!`);
};

// Function Invocation/Call/Execution
canada();
india();

// Function arguments
function marry(person1, person2) {
    console.log('Arguments', arguments);
    console.log('Arguments array from', Array.from(arguments));
    console.log(`${person1} is married to ${person2}`);
}

// Function spread arguments
function marry(...spreadArgs) {
    console.log('Arguments', spreadArgs);
    console.log('Arguments array from', Array.from(spreadArgs));
    console.log(`${spreadArgs[0]} is married to ${spreadArgs[1]}`);
}

marry('Dog', 'Cat');

// Variable environment
function two() {
    var isValid;
}

function one() {
    var isValid = true;
}

var isValid = false;
one();

// One Algorithm question with hashmap (easy). And 3 javascript event handler functions and DOM manipulation (also easy).HTTP requests, CSS preprocessors and HTML basics
// Difference between bubbling and capturing?
// Advantages of preprocessor? sass, stylus, less.
// Difference between callback and closure in js?
// https://javascript.plainenglish.io/using-callbacks-and-closures-in-javascript-2261030cbbf5

// Example of callback? ...how
// What about events? addEventListeners? e.target?
// Flex-box. CSS. JS.

// What does this code return?

var Foo = function (a) {
    this.bar = () => {
        return a;
    };

    var baz = function () {
        return a;
    };
};

Foo.prototype = {
    biz: () => {
        return this.bar();
    },
};

var f = new Foo(7);
f.bar(); //=>
f.baz(); //=>
f.biz(); //=>

// Given
var endorsements = [
    { skill: 'css', user: 'Bill' },
    { skill: 'javascript', user: 'Chad' },
    { skill: 'javascript', user: 'Bill' },
    { skill: 'css', user: 'Sue' },
    { skill: 'javascript', user: 'Sue' },
    { skill: 'html', user: 'Sue' },
];

// See this image:
// http://i.imgur.com/UIeB3n4.png

getSkills = (endorsements) => {
    // Result
    // [
    // { skill: 'javascript', user: ['Chad', 'Bill', 'Sue'], count: 3 },
    // { skill: 'css', user: ['Sue', 'Bill'], count: 2 },
    // { skill: 'html', user: ['Sue'], count: 1 }
    // ];
};

// How can I know which radio was clicked or selected?

{
    /* <h2>Monstrous Government Form</h2>
<form id="myForm" name="myForm">
<fieldset>
<legend>Do you live in an:</legend>
<p><input type="radio" name="home" value="apartment" id="apartment" /> <label for="apartment">Apartment</label></p>
<p><input type="radio" name="home" value="house" id="house" /> <label for="house">House</label></p>
<p><input type="radio" name="home" value="mobile" id="mobile" /> <label for="mobile">Mobile Home/Trailer</label></p>
<p><input type="radio" name="home" value="coop" id="coop" /> <label for="coop">Co-op</label></p>
<p><input type="radio" name="home" value="none" id="none" /> <label for="none">None</label></p>
</fieldset>
<fieldset>
<legend>Your income is:</legend>
<p><input type="radio" name="inc" value="0-50K" id="0-50K" /> <label for="0-50K">$0-50,000 USD</label></p>
<p><input type="radio" name="inc" value="50-100K" id="50-100K" /> <label for="50-100K">$50,000-100,000 USD</label></p>
<p><input type="radio" name="inc" value="100K+" id="100K+" /> <label for="100K+">$100,000+ USD</label></p>
</fieldset>
<fieldset>
<legend>Your status is:</legend>
<p><input type="radio" name="status" value="single" id="single" /> <label for="single">single</label></p>
<p><input type="radio" name="status" value="married" id="married" /> <label for="married">married</label></p>
<p><input type="radio" name="status" value="partner" id="partner" /> <label for="partner">domestic partner</label></p>
</fieldset>
<p>This form goes on with another 97 questions....</p>
<input type="submit" value="Submit" />
</form> */
}

// Due to NDA can't discuss details but expect to solve algorithmic problems in javascript, I would not recommend using any other language if you're interviewing for a front end role. Important topics:
// - Recursion
// - Traversing the DOM (using its APIs)
// - Strings manipulation
// - Objects and Arrays
// - Javascript core concepts (Prototypal inheritance, closures, pure functions, ES6+ features, sorting objects, hashtables)

// "react/http": "^1.3",
// "react/child-process": "^0.6.2"




///


const Foo = function(a) {
    this.a = a;

    this.bar = () => {
      return this.a;
    }
    this.baz = () => {
      return this.a;
    };
  };

  Foo.prototype = {
    biz: () => {
      return this.a;
    },
  };

  const f = new Foo(7);

  f.bar(); // ?
  f.baz(); // ?
  f.biz(); // ?


  // parsing a query

  parseQueryString('https://linkedin.com/in/esolomon?source=search&keywords=Evan%20Solomon')
  // {source: 'search', keywords: 'Evan Solomon'}

  parseQueryString('https://linkedin.com/in/esolomon?sources=search&sources=google&keywords=Evan%20Solomon')
  // {sources: ['search', 'google'], keywords: 'Evan Solomon'}


  function parseQueryString(url) {
    const queryString = getQueryString(url); // source=search&keywords=Evan%20Solomon
    const params = getParamsFromQuery(queryString);

    return params;

  }

  function getQueryString(str) {

    const parts = str.split(str, '?');
    return parts[1]; // source=search&keywords=Evan%20Solomon
  }

  function getParamsFromQuery(queryParams) {
    const params = {};
    const queryParamsArray = queryParams.split('&'); // ['source=search', 'keywords=Evan%20Solomon']
    let parts;

    for(let i = 0; queryParamsArray.length; i++ ) {
      parts = queryParamsArray[i].split('='); // ['source', 'search'];

      if(!params[parts[0]]) {
        params[parts[0]] = parts[1];
      } else {
        if(Array.is(params[parts[0]])) {
          params[parts[0]].push(parts[1]);
        } else {
          let temp = params[parts[0]];

          params[parts[0]] = [temp, parts[1]];
        }
      }
    }

    return params;
  }




  // infinite scroll

  /**
   * API Docs
   * ---------
   * /posts?page=0 => [{id: 1, title: 'Post 1'}, {id: 2, title: 'Post 2'}, {id: 3, title: 'Post 3'}, N...]
   * /posts?page=1 => [{id: 4, title: 'Post 4'}, {id: 5, title: 'Post 5'}, {id: 6, title: 'Post 6'}, N...]
   * /posts?page=N => [N...]
   */

  // HTML
  // ---------
  <ul id="posts"></ul>

  // JS
  // ---------
  document.body.addEventListener('scroll', scrollHandler);

  function scrollHandler() {
    // load & append posts...
    const bottomPosition = ;
    const getCurrenPage = ;

    if(getGetGurrentPost() === bottomPosition) {
      const pagePosts = getPostByPage(getCurrenPage); // async
      renderPost(pagePosts);
      getCurrenPage++;
    }
  }


  function getBottomPostion() {
    return //;
  }

  function getGetGurrentPost() {
    return //;
  }

  function renderPost(postData) {
    const postContainer = window.querySelctor('#posts');
    let template = [];

    for(let post of postData) {
      template.push(postTemplate(post));
    }

    postContainer.append(template.join(''));
  }

  function postTemplate(data) {

  }
