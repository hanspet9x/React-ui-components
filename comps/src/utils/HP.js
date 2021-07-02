export const HP = {
  combineStyles: (...styles) => {
    let style = {};
    styles.forEach((e) => (style = Object.assign(style, e)));
    return style;
  },

  lorem: `Lorem ipsum dolor sit amet, 
  consectetur adipisicing elit, sed do eiusmod tempor 
    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
     ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit 
     in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,

  lorem2: (length) => {
    return HP.lorem.substring(0, length);
  },

  getRandomWords: (size) => {
    const alps = [
      "A",
      "S",
      "D",
      "F",
      "G",
      "H",
      "J",
      "K",
      "L",
      "Z",
      "X",
      "C",
      "V",
      "B",
      "N",
      "M",
      "Q",
      "W",
      "E",
      "R",
      "T",
      "Y",
      "U",
      "I",
      "O",
      "P",
      "a",
      "s",
      "d",
      "f",
      "g",
      "h",
      "j",
      "k",
      "l",
      "z",
      "x",
      "c",
      "v",
      "b",
      "n",
      "m",
      "q",
      "w",
      "e",
      "r",
      "t",
      "y",
      "u",
      "i",
      "o",
      "p",
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      0,
    ];

    if (size > alps.length)
      throw new Error(size + " shouldn't be greater than " + alps.length);

    let bank = [];

    for (let i = 0; i < size - 1; i++) {
      bank.push(alps[Math.floor(Math.random() * alps.length - 1)]);
    }

    return bank.join("");
  },

  Date: {
    /**
     * It returns date, month and year separated by a slash.
     * @param {Date} date is an object.
     */
    getSlashedDate: function (date) {
      return `${date.getDate()}/${HP.prefixZero(
        date.getMonth() + 1
      )}/${date.getFullYear()}`;
    },

    /**
     * It takes number or string and returns the textual month e.g 0 returns January
     * @param {String|Number} monthId
     */
    getMonthText: function (monthId) {
      let month;
      switch (monthId) {
        case 0:
          month = "January";
          break;
        case 1:
          month = "February";
          break;
        case 2:
          month = "March";
          break;
        case 3:
          month = "April";
          break;
        case 4:
          month = "May";
          break;
        case 5:
          month = "June";
          break;
        case 6:
          month = "July";
          break;
        case 7:
          month = "August";
          break;
        case 8:
          month = "September";
          break;
        case 9:
          month = "October";
          break;
        case 10:
          month = "November";
          break;
        default:
          month = "December";
          break;
      }
      return month;
    },

    /**
     * Date format is yearMonthDay, it takes a second parameter that specifies the concatenated string
     * between year, month and day, default is "-";
     * it returns Month FormatedDay, Year e.g May 24th, 2020.
     * @param {String} date
     * @param {String} separator
     */
    getStyledDate: function (date, separator = "-") {
      let data = date.split(separator);
      return (
        this.getDayFormat(data[2]) +
        " " +
        this.getMonthText(parseInt(data[1]) + 1) +
        ", " +
        data[0]
      );
    },

    getStyledDate2: function (date = null) {
      let pDate = date === null || date === "" ? new Date() : date;

      return (
        this.getDayFormat(pDate.getDate()) +
        " " +
        this.getMonthText(pDate.getMonth()) +
        ", " +
        pDate.getFullYear()
      );
    },

    /**
     *It formats a number by adding suffix like "st", "nd", "rd" and "th" depending on the the last digit.
     * @param {Number | String} day
     */
    getDayFormat: function (day) {
      let data = day + "";
      let result;
        
      switch (parseInt(data.charAt(data.length - 1))) {
        case 1:
          result = data + "st";
          break;
        case 2:
          result = data + "nd";
          break;
        case 3:
          result = data + "rd";
          break;
        default:
          result = data + "th";
          break;
      }

      return result;
    },
  },

  Time: {
    getSecond2Minute: (sec) => {
      return sec / 60;
    },

    getMinute2Second: (min) => {
      return 60 * min;
    },

    get24CurrentTime: function (date) {
      return `${HP.dateTimePrefixZero(date.getHours())}:${HP.dateTimePrefixZero(
        date.getMinutes()
      )}:${HP.dateTimePrefixZero(date.getSeconds())}`;
    },

    get12CurrentTime: function (date) {
      function define12(hour) {
        if (hour > 12) {
          return hour - 12;
        }
        return 12;
      }
      return `${define12(
        date.getHours()
      )}:${date.getMinutes()}:${date.getSeconds()}`;
    },
  },

  /**
   * It prefix data with zero(s).
   * @param {Number} num is the data to alterate.
   * @param {String} len is the number of zeroes to add.
   */
  prefixZero: function (num, len = 1) {
    let zeros = "0";

    if (len > 1) {
      for (let i = 0; i < len; i++) {
        zeros += "0";
      }
      return zeros + num;
    }

    return zeros + num;
  },

  dateTimePrefixZero: function (num) {
    let data = this.prefixZero(num);
    return data.length > 2 ? data.substr(1) : data;
  },

  
  randomizeArray: (array, length = 0) => {
    length = length ? length : array.length;
    let data = [];
    let values = [];
    for (let i = 0; i < length; i++) {
      let n = Math.floor(Math.random() * (array.length - 1));

      while (values.includes(n)) {
        n = Math.floor(Math.random() * length);
      }
      values.push(n);
      data.push(array[n]);
    }
    return data;
  },

  base64ToString: (base64 = "") => {
    if (base64.includes("image")) {
      return base64.replace(/^data:image\/{png|jpg};base64,/, "");
    }
  },
  base64fromString: (string) => {
    return `data:image/png;base64,${string}`;
  },

  validateFields: (fields, getEmptyField) => {

    for (const key in fields) {
        if(fields[key] === "" || fields[key] === []){
            getEmptyField(fields[key]);
          return false;
        }
    }
    return true;
},

  isFieldValid: (state, excludes = []) => {
    
    for (const key in state) {
        if(!excludes.includes(key)){
            if(state[key] === "" || state[key] === null || state[key] === undefined){
                return {valid: false, field: key};
            }
        }
    }
    return {valid: true};
  },

  /**
   * It helps track the last row. The last row -boolean value is returned in the callback as the second param.
   * It is useful for writing streams of data into a fd.
   * @param {Array} data An Array
   * @param {Function} callback A function with params (element, isLastRow, index)
   */
  loop: (data = [], callback) => {
    if(Array.isArray(data)){
      for(let i = 0; i < data.length; i++){
        callback(data[i], i+1 >= data.length, i);
      }
    }
  },

  /**
   * It fiters the provided keys from the array of objects or the object.
   * E.g Filtering name from the {name: "DJ", age: 11} returns {age: 11}.
   * E.g Filtering name from the {name: "DJ", age: 11} with a true inverse returns {name: "DJ"}.
   * @param {Array|Object} jsObj An array of objects or an object.
   * @param  {Array} keys An array of keys to filter.
   * @param {Boolean} inverse Defaults to false. True filters off every entry with key not specified in the keys.
   * @returns Array|Object 
   */
  filterObject: (jsObj, keys=[], inverse = false) => {


    let objs = [];

    let loop = (os) => {
      let obj = {};
      for (const key in os) {
        if(inverse){
          if(keys.includes(key)){
            obj[key] = os[key];
          }
        }else{
          if(!keys.includes(key)){
            obj[key] = os[key];
          }
        }
      }
      return obj;
    }

    if(Array.isArray(jsObj)){
        jsObj.forEach( e =>{
          objs.push(loop(e));
        });
        return objs;
    }else{
      return loop(jsObj);
    }
  },

  camelToGap: (camelCase = "", capitalizeFirsLetter = false) => {

      
      let regex = /[A-Z]/;
      let data = "";
      Array.from(camelCase).forEach(e => {
        if(regex.test(e)){
          data +=" ";
          data +=e.toLowerCase();
        }else{
          data +=e;
        }  
      });

      if(capitalizeFirsLetter){
        return data.replace(data.charAt(0), data.charAt(0).toUpperCase());
      }

      return data;
  },

  gapToCamel: (gapCase = "", capitalizeFirsLetter = false) => {
    
    let data = "";
    let hasSpace = false;
    Array.from(gapCase).forEach(e => {
      if(e === " "){
        hasSpace = true;
      }else{
        if(hasSpace){
          data +=e.toUpperCase();
        }else{
          data +=e;
        }
      }  
    });

    if(capitalizeFirsLetter){
      return data.replace(data.charAt(0), data.charAt(0).toUpperCase());
    }

    return data;
  },

  gapToSnake: (gapCase= "", capitalizeFirsLetter = false) => {
    let data = gapCase.replaceAll(" ", "_");
    if(capitalizeFirsLetter){
      return data.replace(data.charAt(0), data.charAt(0).toUpperCase());
    }
    return data;
  },

  snakeToGap: (snakeCase= "", capitalizeFirsLetter = false) => {
    let data = snakeCase.replaceAll("_", " ");
    if(capitalizeFirsLetter){
      return data.replace(data.charAt(0), data.charAt(0).toUpperCase());
    }
    return data;
  },


  sortObjectArray: (array = [], key, reverse = false) => {
    array.sort((a, b) => {

      if (typeof a[key] === "string") {

          if (a[key].toLowerCase() < b[key].toLowerCase()) {
              return reverse ? 1 : -1;
          }else if (a[key].toLowerCase() > b[key].toLowerCase()) {

              return reverse ? -1 : 1;
          }else{

            return 0;
          }


      } else if (typeof a[key] === "number") {
          return reverse ? b[key] - a[key] : a[key] - b[key];
      }

      return a[key] > b[key];
  });
  },

  getNumberRange: (start, end) => {
    let arr = [];
    if(Number.isInteger(start) && Number.isInteger(end) && end > start){
      for(let i = start; i <= end; i++){
        arr.push(i);
      }
    }
    return arr;
  },

  getArrayOfNum : (num) => {
    if(!Number.isInteger) return [];
    return Array.from(Array(num).keys());
  }
};

export const Values = {
  titles: [
    "Alhaji",
    "Alhaja",
    "ARC.",
    "Canon",
    "Chief",
    "Deacon",
    "Dr.",
    "Engr",
    "Evangelist",
    "Hajiya",
    "Imam",
    "Mr.",
    "Mrs.",
    "Prof.",
    "Prophet",
    "REV",
    "VEN",
  ],

  securityQuestions: [
    "What was the name of your primary school?",
    "In what city or town does your nearest sibling live?",
    "What time of the day were you born? (hh:mm)",
    "What is your pet’s name?",
    "In what year was your father born?",
    "What is your favorite?",
    "Car registration number?",
    "What time of the day was your first child born?",
    "What is the first name of your best friend in high school?",
    "In what town or city did you meet your spouse or partner?",
    "What is the middle name of your oldest child?",
    "What is your spouse or partner's mother's maiden name?",
    "In what town or city did your parents meet?",
    "What was your childhood nickname?",
    "What is your oldest sibling’s birthday month and year? (e.g., January 1900)",
    "What is the name of the place your wedding reception was held?",
    "What is the name of a college you applied to but didn't attend?",
  ],

  getMonthDays: ()=> {
    return [
      {month: "January", days: 31, mNo: 1},
      {month: "February", days: 29, mNo: 2},
      {month: "March", days: 31, mNo: 3},
      {month: "April", days: 30, mNo: 4},
      {month: "May", days: 31, mNo: 5},
      {month: "June", days: 30, mNo: 6},
      {month: "July", days: 31, mNo: 7},
      {month: "August", days: 31, mNo: 8},
      {month: "September", days: 30, mNo: 9},
      {month: "October", days: 31, mNo: 10},
      {month: "November", days: 30, mNo: 11},
      {month: "December", days: 31, mNo: 12}
    ]
  },
};

export const Store = {
  delimeter: "&h|p&",
  Local: 0,
  Session: 1,
  set: (key, value, type = 0) => {
    if (type === 0) {
      localStorage.setItem(key, value);
    } else {
      sessionStorage.setItem(key, value);
    }
  },
  setObject: (key, object, type = 0) => {
    if (type === 0) {
      localStorage.setItem(key, JSON.stringify(object));
    } else {
      sessionStorage.setItem(key, JSON.stringify(object));
    }
  },
  get: (key, type = 0) => {
    if (type === 0) {
      return localStorage.getItem(key);
    } else {
      return sessionStorage.getItem(key);
    }
  },
  getObject: (key, type = 0) => {
    if (type === 0) {
      return JSON.parse(localStorage.getItem(key));
    } else {
      return JSON.parse(sessionStorage.getItem(key));
    }
  },
  /**
   *
   * @param {String} key
   * @param {String} value
   * @param {Int} type
   */
  append: (key, value, type = 0) => {
    if (!!this.has(key, type)) {
      this.set(key, this.get(key, type) + this.delimiter + value, type);
    } else {
      this.set(key, value, type);
    }
  },
  has: function (key, type = 0) {
    var res = this.get(key, type);
    return res !== null;
  },
  isEqual: (key, value, type = 0) => {
    if (Store.has(key, type)) {
      return Store.get(key, type) === value;
    }
    return false;
  },

  isEqualIgnoreCase: (key, value = "", type = 0) => {
    if (Store.has(key, type)) {
      return Store.get(key, type).toLowerCase === value.toLowerCase;
    }
    return false;
  },

  delete: (key, type = 0) => {
    if (Store.has(key, type)) {
      if (type === 0) {
        localStorage.removeItem(key);
        return true;
      } else {
        sessionStorage.removeItem(key);
        return true;
      }
    }
    return false;
  },
};

export class Listener {
  #eventsHolder;
  #eventBank;

  constructor() {
    this.#eventsHolder = document.body;
    this.#eventBank = new Map();
  }

  on(name, evt) {
    if (evt.constructor !== Function)
      throw new Error("Event must be a function.");
    this.#eventsHolder.addEventListener(name, evt);
    this.#eventBank.set(name, new Event(name));
    // this.#eventBank.
  }

  remove(name) {
    if (this.has(name)) {
      this.#eventsHolder.removeEventListener(name);
      this.#eventBank.delete(name);
    }
  }

  dispatch(name) {
    if (this.has(name)) {
      this.#eventsHolder.dispatchEvent(this.#eventBank.get(name));
    } else {
      console.error(`${name} does not exist.`);
    }
  }

  has(name) {
    return this.#eventBank.has(name);
  }
} //end listner

export const Forms = {

  getDuo: (state = {}, FormObject, handleChange) => {
    let objs = [];
    for (const key in state) {
        objs.push(<FormObject name={key} value={state[key]} onChange={handleChange} />);
    }
  },

  getArray: (state)=>{
    return Object.entries(state);
  },

  emptyState: (state)=> {
    let obj = {};
    for (const key in state) {
      obj[key] = "";
    }
    return obj;
  },

  objToFormData: (state = {}) => {
    let form = new FormData();
    for (const key in state) {
        form.append(key, state[key]);
    }
    return form;
  }


} 
