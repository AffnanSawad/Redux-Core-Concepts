<!-- REDUX  -->
**Redux** হচ্ছে একটি **JavaScript স্টেট ম্যানেজমেন্ট লাইব্রেরি**, যা সাধারণত **React অ্যাপ্লিকেশনে** ব্যবহার করা হয়, কিন্তু এটি অন্য যেকোনো JavaScript ফ্রেমওয়ার্কের সাথেও ব্যবহার করা যায়।


### 🌀 **Redux কেন ব্যবহার করা হয়?**

React বা অন্য ফ্রেমওয়ার্কে যখন অ্যাপ্লিকেশন বড় হয় এবং অনেক কম্পোনেন্টের মধ্যে ডাটা শেয়ার করতে হয়, তখন স্টেট ম্যানেজমেন্ট কঠিন হয়ে যায়। এই সমস্যা সমাধানের জন্য Redux ব্যবহৃত হয়, যাতে সব ডাটা একটি **central store**-এ থাকে এবং যেকোনো কম্পোনেন্ট সেখান থেকে ডাটা নিতে বা আপডেট করতে পারে।

---

### ✅ **Redux ব্যবহারের উপকারিতা (Benefits):**

1. **Centralized State:** পুরো অ্যাপের ডাটা একটি জায়গায় থাকে, ফলে ম্যানেজ করা সহজ হয়।
2. **Predictable State:** Action এবং Reducer নির্দিষ্ট নিয়মে কাজ করে, ফলে স্টেট কখন কীভাবে পরিবর্তন হবে তা সহজে বোঝা যায়।
3. **Debugging সহজ:** Redux DevTools দিয়ে সহজেই দেখতে পাওয়া যায় কোন অ্যাকশনে কী পরিবর্তন হচ্ছে।
4. **Code Structure ভালো থাকে:** অ্যাপ্লিকেশন বড় হলেও স্টেট ম্যানেজমেন্ট পরিচ্ছন্ন থাকে।
5. **Component Communication সহজ:** parent-child না হলেও যেকোনো কম্পোনেন্ট একে অপরের সাথে স্টেট শেয়ার করতে পারে।

---

### ❌ **Redux-এর অপকারিতা বা সীমাবদ্ধতা (Demerits):**

1. **বেশি কোড লিখতে হয়:** ছোট অ্যাপের জন্য Redux অনেক বেশি boilerplate কোড তৈরি করে।
2. **শেখা তুলনামূলক কঠিন:** beginners দের জন্য Action, Reducer, Store বোঝা কিছুটা জটিল।
3. **Performance Issue হতে পারে:** অনেক স্টেট আপডেট হলে re-rendering এর কারণে পারফরম্যান্স কমতে পারে।
4. **অপ্রয়োজনীয় Use:** ছোট ও সাধারণ অ্যাপে Redux ব্যবহার করা Overkill হতে পারে।

---

### 📝 সংক্ষেপে:

> **Redux** হল একটি স্টেট ম্যানেজমেন্ট লাইব্রেরি, যা বড় অ্যাপে স্টেট গুলোকে সেন্ট্রালাইজড ও প্রেডিক্টেবলভাবে ম্যানেজ করতে সাহায্য করে, তবে ছোট প্রজেক্টে ব্যবহারে জটিলতা ও অপ্রয়োজনীয় কোড বাড়াতে পারে।

প্রয়োজনে Redux Toolkit ব্যবহার করলে কোড কমে যায় ও শেখা সহজ হয়।

চমৎকার! এবার চলুন দেখি **Redux Toolkit** কী, কেন ব্যবহার করা হয়, এবং এর উপকারিতা ও সীমাবদ্ধতা বাংলায়।

---

### 🧰 **Redux Toolkit (RTK) কী?**

**Redux Toolkit** হচ্ছে Redux-এর **অফিশিয়াল ও সুপারিশকৃত উপায়** Redux ব্যবহার করার জন্য। এটি Redux-এর জটিলতা ও boilerplate কোড কমিয়ে দেয় এবং কাজকে সহজ করে তোলে।

---

### 🔧 **কেন Redux Toolkit ব্যবহার করা হয়?**

Redux এ অ্যাকশন, রিডিউসার, টাইপ, কনস্ট্যান্ট আলাদা করে লিখতে হয় — যা অনেক সময় ও কোড খরচ করে। Redux Toolkit এইসব কাজ সহজ করে এক জায়গায় করে ফেলে এবং কিছু built-in ফিচার দিয়ে স্টেট ম্যানেজমেন্ট দ্রুত ও সহজ করে তোলে।

---

### ✅ **Redux Toolkit-এর উপকারিতা:**

1. **কম কোডে বেশি কাজ:** `createSlice`, `configureStore` ইত্যাদি ফাংশনের মাধ্যমে অনেক কম কোডে Redux সেটআপ করা যায়।
2. **Built-in Middleware:** Redux Toolkit স্বয়ংক্রিয়ভাবে Redux Thunk middleware যুক্ত করে, যা async কাজ করতে সাহায্য করে।
3. **Immutability & Immer:** ভিতরে `Immer` ব্যবহার করে, তাই আপনি সরাসরি স্টেট মডিফাই করতে পারেন বলে মনে হয়, কিন্তু ভিতরে তা সঠিকভাবেই ইমিউটেবলভাবে হয়।
4. **Better Developer Experience:** ডিবাগিং সহজ, কোড পরিষ্কার ও maintainable থাকে।
5. **Async Logic সহজ:** `createAsyncThunk` দিয়ে API call বা async কাজগুলো খুব সহজে করা যায়।

---

### ❌ **Redux Toolkit-এর সীমাবদ্ধতা:**

1. **নতুন শেখার কষ্ট:** যারা একেবারে নতুন, তাদের জন্য `createSlice`, `createAsyncThunk` ইত্যাদি নতুন কনসেপ্ট বোঝা একটু সময় নিতে পারে।
2. **ছোট অ্যাপে এখনও Overkill:** যদি অ্যাপ খুব ছোট হয়, তাহলে Redux Toolkit ব্যবহার করাও অনেক সময় অপ্রয়োজনীয় মনে হতে পারে।

---

### 📝 সংক্ষেপে:

> **Redux Toolkit** হলো Redux ব্যবহারের সবচেয়ে সহজ, কম কোড ও আধুনিক উপায়। এটি Redux এর জটিলতা অনেক কমিয়ে দেয় এবং উন্নত মানের অ্যাপ ডেভেলপমেন্টে সাহায্য করে।

---

### 🔄 **Unidirectional vs Bidirectional Data Flow** – 

---

## 🔁 ১. **Unidirectional Data Flow (একমুখী ডেটা প্রবাহ)**

এটি মানে হচ্ছে ডেটা **একই দিকে শুধু উপরে থেকে নিচে** (parent → child) যায়।

### 🔸 কোথায় দেখা যায়?

* React, Redux, Angular (mostly)

### 🔸 কীভাবে কাজ করে?

* Parent component → props → Child component
* Child ডেটা পায়, কিন্তু parent কে সরাসরি ডেটা পাঠাতে পারে না।

### ✅ সুবিধা:

* ডেটা ফ্লো পরিষ্কার ও প্রেডিক্টেবল থাকে।
* ডিবাগ করা সহজ হয়।

### ❌ অসুবিধা:

* অনেক nested component থাকলে props-passing ঝামেলার হতে পারে (prop drilling)।

---

## 🔄 ২. **Bidirectional Data Flow (দ্বিমুখী ডেটা প্রবাহ)**

এটি মানে হচ্ছে **ডেটা দুই দিকেই যেতে পারে** – parent → child এবং child → parent।

### 🔸 কোথায় দেখা যায়?

* Angular (ngModel)
* Two-way binding frameworks

### 🔸 কীভাবে কাজ করে?

* Component দুইদিকেই data pass করে এবং update করতে পারে।

### ✅ সুবিধা:

* কম কোডে ডেটা আপডেট করা যায়।
* ফর্ম বা UI input সহজে আপডেট করা যায়।

### ❌ অসুবিধা:

* ডেটা ট্র্যাক করা কঠিন হয়ে যায়।
* বড় অ্যাপে bug ধরা কঠিন হয়, কারণ কে কোথা থেকে ডেটা পরিবর্তন করছে তা স্পষ্ট নয়।

---

### 📝 সংক্ষেপে:

| বৈশিষ্ট্য      | Unidirectional         | Bidirectional           |
| -------------- | ---------------------- | ----------------------- |
| ডেটা যায়      | একদিক (Parent → Child) | দুইদিক (Parent ↔ Child) |
| Debug          | সহজ                    | কঠিন                    |
| Predictability | বেশি                   | কম                      |
| ব্যবহার        | React, Redux           | Angular (ngModel)       |

---

🔍 যদি তুমি React বা Redux নিয়ে কাজ করো, তাহলে তুমি **Unidirectional data flow** ব্যবহার করছো।
Bidirectional flow বেশি দেখা যায় Angular-এর মতো ফ্রেমওয়ার্কে যেখানে two-way binding আছে।



### 🔄 **Flux Architecture – সহজ ভাষায় ব্যাখ্যা (React এর প্রেক্ষাপটে)**

**Flux** হলো একটি **design pattern** বা আর্কিটেকচার যেটা Facebook তৈরি করেছে **React অ্যাপ্লিকেশনের ডেটা প্রবাহ** (data flow) সহজ ও নিয়ন্ত্রিত রাখার জন্য।

---

### 🧠 Flux কীভাবে কাজ করে?

Flux এ **ডেটা সবসময় একমুখী (Unidirectional)** ভাবে প্রবাহিত হয়। নিচের ৪টি প্রধান অংশ থাকে:

---

### 🧩 ১. **Action:**

* ইউজার যখন কিছু করে (যেমন: বাটন ক্লিক), তখন একটা **Action** তৈরি হয়।
* এটা হচ্ছে একটা সাধারণ JS অবজেক্ট যা বলে "কি করতে হবে"।

📦 উদাহরণ:

```js
{ type: 'ADD_TODO', payload: 'Learn Flux' }
```

---

### 🧩 ২. **Dispatcher:**

* এটি central hub বা ট্রাফিক পুলিশের মতো।
* এটি Action-কে গ্রহণ করে এবং বলে দেয়, কোন **Store**-কে এটি পাঠাতে হবে।

---

### 🧩 ৩. **Store:**

* Store হচ্ছে data বা state রাখার জায়গা।
* এটি Action থেকে নির্দেশ পায় এবং state আপডেট করে।

---

### 🧩 ৪. **View (React Component):**

* Store থেকে আপডেট হওয়া data নিয়ে UI রেন্ডার করে।
* ইউজার আবার কিছু করলে নতুন Action পাঠায় → চক্র আবার শুরু হয়।

---

### 🔁 Flux-এর Data Flow চক্র:

```text
User Action → Action → Dispatcher → Store → View → (repeat)
```

**এক দিকেই চলে:** নিচের দিক থেকে ওপরের দিকে ডেটা যায় না, তাই বোঝা ও ডিবাগ করা সহজ।

---

### ✅ Flux এর সুবিধা:

* ডেটা ফ্লো পরিষ্কার ও নিয়ন্ত্রিত।
* Debug করা সহজ।
* বড় অ্যাপে স্কেল করা ভালোভাবে কাজ করে।

### ❌ অসুবিধা:

* শুরুতে শেখা কঠিন হতে পারে।
* বেশি কোড লিখতে হয় (boilerplate বেশি)।

---

### 📝 সংক্ষেপে:

> **Flux Architecture** হলো React অ্যাপে **একমুখী ডেটা ফ্লো** বজায় রাখার জন্য তৈরি করা একটি design pattern, যেখানে Action → Dispatcher → Store → View এর মাধ্যমে ডেটা প্রবাহ ঘটে।

---



---

## 🧠 **Redux কীভাবে কাজ করে? (Simple Version)**

### 🎯 ধরো তুমি একটি কাউন্টার অ্যাপ বানাচ্ছো:

---

### ১️⃣ **Store:**

👉 Redux একটি **store** তৈরি করে যেখানে সব ডেটা (state) রাখা হয়।

---

### ২️⃣ **Action:**

👉 তুমি যখন কিছু করো (যেমন: বাটনে ক্লিক), তখন **action** তৈরি হয়।

```js
{ type: "INCREMENT" }
```

---

### ৩️⃣ **Dispatch:**

👉 এই action-টা store-এ পাঠানো হয় `dispatch()` দিয়ে।

```js
store.dispatch({ type: "INCREMENT" });
```

---

### 4️⃣ **Reducer:**

👉 Store এই action-টা **reducer** নামের ফাংশনে পাঠায়।
👉 Reducer বলে, নতুন state কী হবে।

```js
function reducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  }
  return state;
}
```

---

### 5️⃣ **UI Update:**

👉 নতুন state তৈরি হলে, store UI-কে জানায়।
👉 UI আবার নতুন state দিয়ে রেন্ডার হয়।

---

### 🌀 Full চক্র:

```
User → Action → Dispatch → Reducer → New State → UI Update
```

---

### ✅ সংক্ষেপে মনে রাখো:

* **Store** = ডেটা রাখে
* **Action** = কী ঘটবে বলে
* **Reducer** = ডেটা কিভাবে বদলাবে তা বলে
* **Dispatch** = Action পাঠায়
* **Redux** = সব কিছু ম্যানেজ করে সুন্দরভাবে

---

চমৎকার সিদ্ধান্ত! 🎯
**Redux Toolkit** হলো Redux-এর official, modern এবং সবচেয়ে সহজ উপায় Redux ব্যবহার করার জন্য। এখন আমি তোমাকে ধাপে ধাপে কোডসহ শিখাবো।

---

## 🧠 Step-by-Step Redux Toolkit Tutorial (with Code) – in React

---

## 🛠️ Step 1: Install Packages

```bash
npm install @reduxjs/toolkit react-redux
```

---

## 📁 Step 2: Create Folder Structure

```
src/
├── app/
│   └── store.js
├── features/
│   └── counter/
│       ├── counterSlice.js
├── App.js
└── main.jsx (or index.js)
```

---

## 📦 Step 3: Create Redux Store

**📄 `src/app/store.js`**

```js
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
})


export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
```

---

## 🔪 Step 4: Create a Slice

**📄 `src/features/counter/counterSlice.js`**

```js
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer
```

---

## 🔗 Step 5: Provide Store to App

**📄 `src/main.jsx` (or `index.js`)**

```js
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import { store } from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
```

---

## 🖼️ Step 6: Use Redux State in Component


export function Welcome() {

 
   
  //  Hooks
   const dispatch = useDispatch();
  
  //   + handler
   const handleIncreament = (amount : number) => {
      
    dispatch( increament(amount)  )

   }
 
  //  - handler
    const handledecreament = () => {
      
    dispatch( decreament()  )

   }


   const { counter } = useSelector( (state : RootState ) => state.counter )


  return (
          <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <button
         onClick={ ()=> handledecreament() }
  
      >
        −
      </button>

      

      <button
         onClick={()=> {  handleIncreament(1) } }       
      >
        +
      </button>


      <button
         onClick={()=> {  handleIncreament(5) } }

      >
        + 5
      </button>      

      <h1 className='text-4xl font-extrabold '> Total : {counter}  </h1>

)
```

---

## ✅ Final Output:

* ➕ বাটন চাপলে সংখ্যা বাড়বে
* ➖ চাপলে কমবে
* ➕5 দিলে ৫ বাড়বে

---

## 📚 Summary:

| Term               | মানে                          |
| ------------------ | ----------------------------- |
| `configureStore()` | Store তৈরি করে                |
| `createSlice()`    | Reducer + Action একসাথে বানায় |
| `useSelector()`    | Store থেকে ডেটা নেয়           |
| `useDispatch()`    | Action পাঠায় (dispatch করে)   |

---


## ✅ **Pure Function (পরিষ্কার ফাংশন)**

### 🔹 সংজ্ঞা:

যে ফাংশন **একই input দিলে সবসময় একই output দেয়**, এবং **বাইরের কিছু পরিবর্তন করে না**, তাকে **pure function** বলে।

### 🎯 বৈশিষ্ট্য:

* Side effect নেই (console.log, DOM পরিবর্তন, API call ইত্যাদি করে না)
* Same input → Same output
* Predictable এবং test করা সহজ

### 🧪 Example:

```js
function add(a, b) {
  return a + b;
}
```

✅ `add(2, 3)` সবসময় 5 দিবে — কোনো বাইরের জিনিসে নির্ভর করে না।

---

## ❌ **Impure Function (অপরিষ্কার ফাংশন)**

### 🔹 সংজ্ঞা:

যে ফাংশন একই input দিলেও কখনো কখনো ভিন্ন output দিতে পারে, অথবা বাইরের কোন state পরিবর্তন করে — তাকে **impure function** বলে।

### 🎯 বৈশিষ্ট্য:

* Side effect আছে
* Predictable না
* Test করা কঠিন

### 🧪 Example:

```js
let x = 5;
function addToX(a) {
  return a + x;
}
```

📌 `addToX(2)` → output `7`, কিন্তু যদি `x` বদলে যায় (ধরো `x = 10`), তখন output `12` হয়ে যাবে।

---

## 📋 তুলনা (Comparison):

| বিষয়          | Pure Function | Impure Function |
| -------------- | ------------- | --------------- |
| Output         | Always same   | May change      |
| Side Effects   | ❌ নেই         | ✅ থাকতে পারে    |
| Predictability | ✅ Yes         | ❌ No            |
| Use in Redux   | ✅ বাধ্যতামূলক | ❌ নয়            |

---


---

## 🔄 Mutation কী?

**Mutation** মানে হচ্ছে **কোনো object বা array-র মূল (original) মানকে সরাসরি পরিবর্তন করা**।

---

### 🧪 উদাহরণ (Mutation):

```js
const arr = [1, 2, 3];
arr.push(4);  // 👉 এটা mutation, কারণ মূল arr বদলে গেছে
```

---

## ⚠️ Mutation কেন সমস্যা?

Redux, React ইত্যাদিতে mutation সমস্যা তৈরি করতে পারে:

1. **Unexpected bugs** হতে পারে
2. **UI ঠিকমতো rerender হয় না**
3. **Redux reducers pure function হওয়া উচিত — mutation pure-ness নষ্ট করে**

---

## ✅ Mutation এড়ানোর উপায় (Immutability রক্ষা):

### 📌 1. **Spread Operator ব্যবহার করে:**

```js
const arr = [1, 2, 3];
const newArr = [...arr, 4];  // ✅ mutation নয়
```

```js
const obj = { name: "Affnan" };
const newObj = { ...obj, age: 20 };  // ✅ নতুন object তৈরি
```

---

### 📌 2. **Array Methods (যেগুলো mutation করে না):**

* ✅ `map()`, `filter()`, `concat()` — এগুলো mutation করে না
* ❌ `push()`, `splice()`, `sort()` — mutation করে

**উদাহরণ:**

```js
// ✅ No mutation
const nums = [1, 2, 3];
const newNums = nums.map(n => n * 2);

// ❌ Mutation
nums.push(4);
```

---

### 📌 3. **Immer বা Redux Toolkit ব্যবহার করা:**

Redux Toolkit-এর ভিতরে **Immer.js** থাকে, যা তোমাকে দেখতে mutation-এর মতো কোড লিখতে দেয়, কিন্তু ভিতরে ভিতরে সবকিছু immutable রাখে।

```js
// Redux Toolkit Slice-এ:
state.value += 1;  // দেখতে mutation, কিন্তু Immer এটা safe রাখে ✅
```

---

## 🎯 Summary:

| Mutation             | Safe Way (No Mutation)      |
| -------------------- | --------------------------- |
| `arr.push()`         | `[...arr, newItem]`         |
| `obj.key = newValue` | `{ ...obj, key: newValue }` |
| `splice()`, `sort()` | `filter()`, `map()`         |

---



## 🔄 Function Currying কী?

**Currying** হলো এমন একটি ফাংশন প্রযুক্তি, যেখানে একবারে সব argument না নিয়ে **একটি ফাংশন একটির বেশি ফাংশন রিটার্ন করে, প্রতিটি ফাংশন একটি argument নেয়।**

---

### 🧠 সহজভাবে:

> বড় function → ছোট ছোট function-এ ভেঙে প্রতিবার ১টা করে argument নেয়া।

---

## 🧪 উদাহরণ (Regular Function):

```js
function add(a, b) {
  return a + b;
}

add(2, 3); // 👉 5
```

---

## ✅ Currying Version:

```js
function add(a) {
  return function(b) {
    return a + b;
  };
}

add(2)(3); // 👉 5
```

🧠 প্রথমে `a` নেয়, পরে `b` নেয়।

---

## ✅ Arrow Function দিয়ে Currying:

```js
const add = a => b => a + b;

console.log(add(2)(3)); // 👉 5
```

---

## 📌 Currying কবে ব্যবহার হয়?

### ১. Reusability বাড়াতে:

```js
const add5 = add(5);   // 👉 এখন এটা একটা ফাংশন হয়ে গেল
add5(10); // 👉 15
```

### ২. Function Composition-এ

### ৩. Redux-এর middleware বা functional programming-এ

---

## 📚 Summary:

| বিষয়          | ব্যাখ্যা                                 |
| ------------- | ---------------------------------------- |
| Currying      | একটি ফাংশন, যেটা একাধিক ফাংশন return করে |
| প্রতিটি ফাংশন | একটি argument নেয়                        |
| উপকার         | Reusability, Readability বাড়ায়           |
| Syntax        | `const fn = a => b => c => {}`           |

---

### 🎯 মনে রাখো:

> Currying মানে হলো — একবারে না খেয়ে একটু একটু করে খাওয়া 😄
> এতে কোড clean এবং flexible হয়।


---

## 🔶 Redux Middleware কী?

**Middleware** হলো Redux-এর **store ও reducer এর মাঝে বসে থাকা একটি ফাংশন**, যা action dispatch হওয়ার পর এবং reducer-এ যাওয়ার আগে **action-কে modify, log, বা async কাজ করতে দেয়।**

---

### 📦 মনে করো:

Redux এর data flow এর মধ্যে middleware হলো **middleman**।

```text
User Dispatch → Middleware → Reducer → Store Update
```

---

## 🧠 সহজ সংজ্ঞা:

> Middleware হচ্ছে Redux এর **extra layer**, যা তোমাকে **console log, API call, condition check ইত্যাদি করতে দেয়**।

---

## 🧪 উদাহরণ: Simple Logging Middleware

```js
const loggerMiddleware = store => next => action => {
  console.log('Dispatching:', action);
  const result = next(action);
  console.log('Next State:', store.getState());
  return result;
};
```

### 📌 Explanation:

* `store` → Redux store access
* `next` → পরের middleware বা reducer-এ পাঠায়
* `action` → যেটা dispatch হয়েছে

---

## 🧰 Middleware ব্যবহার কোথায় হয়?

### ১. Logging

### ২. Async কাজ (API call)

### ৩. Authentication check

### ৪. Custom logic

---

## 🔧 Middleware কিভাবে যোগ করবো?

```js
import { configureStore } from '@reduxjs/toolkit'
import loggerMiddleware from './loggerMiddleware'
import counterReducer from './features/counter/counterSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware),
})
```

---

## ✅ Built-in Middleware:

Redux Toolkit automatic ভাবে নিচের middleware দেয়:

* `redux-thunk` (async কাজের জন্য)
* `serializableCheck`
* `immutableCheck`

---

## 🔄 thunk Middleware (Bonus):

Thunk হলো একধরনের middleware যেটা action এর ভিতরে async function চালাতে দেয়:

```js
export const fetchData = () => async (dispatch) => {
  const res = await fetch('/api/data')
  const data = await res.json()
  dispatch(setData(data))
}
```

---

## 📚 Summary:

| বিষয়       | ব্যাখ্যা                         |
| ---------- | -------------------------------- |
| Middleware | Reducer-এর আগেই কাজ করে          |
| কাজ        | Logging, API, condition check    |
| Thunk      | Async middleware                 |
| ব্যবহার    | Redux Toolkit-এ সহজে যোগ করা যায় |

---
চমৎকার! এখন আমি তোমাকে **Redux Toolkit Query (RTK Query)** দিয়ে **একটা API তৈরি করার সম্পূর্ণ Step-by-Step গাইড** দেব। RTK Query হলো Redux Toolkit-এর একদম মডার্ন ও সহজ পদ্ধতি API handle করার জন্য।

---

## 🔰 Step-by-Step: Creating API using RTK Query

---

### 🧩 Step 1: Redux Toolkit ও RTK Query ইনস্টল করো

```bash
npm install @reduxjs/toolkit react-redux
```

(যদি React Project তৈরি না করা থাকে, `create-react-app` বা `Vite` দিয়ে তৈরি করো।)

---

### 🧩 Step 2: Create API Slice

```js
// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',  // Redux state name
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts', // GET /posts
    }),
  }),
});

export const { useGetPostsQuery } = apiSlice;
```

---

### 🧩 Step 3: Store সেটআপ করো

```js
// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../features/api/apiSlice';

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
```

---

### 🧩 Step 4: Provider দিয়ে অ্যাপ র‍্যাপ করো

```js
// src/main.jsx (Vite) অথবা src/index.js (CRA)
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './app/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <App />
  </Provider>
);
```

---

### 🧩 Step 5: API থেকে ডেটা ফেচ করে দেখাও

```js
// src/App.jsx
import React from 'react';
import { useGetPostsQuery } from './features/api/apiSlice';

function App() {
  const { data: posts, isLoading, isError } = useGetPostsQuery();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Something went wrong!</p>;

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;
```

---

## ✅ Summary

| ধাপ | কাজ                                  |
| --- | ------------------------------------ |
| 1   | `createApi` দিয়ে API Slice বানাও     |
| 2   | Reducer ও Middleware Store-এ যোগ করো |
| 3   | `Provider` দিয়ে Redux wrap করো       |
| 4   | `useGetPostsQuery()` দিয়ে ডেটা আনো   |
| 5   | UI তে দেখাও                          |

---


দারুণ! এখন আমি তোমাকে **RTK Query দিয়ে POST request (mutation)** করার সম্পূর্ণ প্রক্রিয়া দেখাচ্ছি — কিভাবে একটা ফর্ম থেকে ডেটা পাঠিয়ে API-তে সেভ করা যায়।

---

## 🔰 Step-by-Step: RTK Query দিয়ে POST (Mutation)

আমরা একটি ফর্ম বানাবো, যেখানে ইউজার `title` ও `body` লিখবে এবং আমরা সেই ডেটা API-তে পাঠাবো।

---

### 🧩 Step 1: API Slice-এ Mutation তৈরি করো

```js
// src/features/api/apiSlice.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
    }),
  }),
});

export const { useGetPostsQuery, useCreatePostMutation } = apiSlice;
```

---

### 🧩 Step 2: ফর্ম তৈরি করে ডেটা পাঠাও

```js
// src/App.jsx
import React, { useState } from 'react';
import { useGetPostsQuery, useCreatePostMutation } from './features/api/apiSlice';

function App() {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    try {
      await createPost({ title, body }).unwrap();
      alert('Post created!');
      setTitle('');
      setBody('');
    } catch (err) {
      console.error('Failed to save the post: ', err);
    }
  };

  return (
    <div>
      <h1>RTK Query CRUD Example</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">Add Post</button>
      </form>

      <h2>Posts:</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.map((post) => (
          <div key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
```

---

## 📚 Summary:

| Step                      | Task                                         |
| ------------------------- | -------------------------------------------- |
| `createPost` Mutation     | API Slice-এ POST রিকোয়েস্ট তৈরি              |
| `useCreatePostMutation()` | Hook এর মাধ্যমে ফর্ম থেকে API-তে ডেটা পাঠানো |
| `unwrap()`                | Promise handle করার জন্য                     |

---

---

## 🔧 API Update & Delete: Step-by-Step

আমরা ধরছি `JSONPlaceholder` API ব্যবহার করছি (`https://jsonplaceholder.typicode.com/posts`), যেটা ফেক API হলেও `PUT` ও `DELETE` simulate করে।

---

## 🧩 Step 1: API Slice-এ `updatePost` ও `deletePost` mutation যোগ করো

```js
// src/features/api/apiSlice.js
export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      providesTags: ['Post'],
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: 'posts',
        method: 'POST',
        body: newPost,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: rest,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} = apiSlice;
```

---

## 🧩 Step 2: UI থেকে Update ও Delete option ব্যবহার করো

```js
// src/App.jsx
import React, { useState } from 'react';
import {
  useGetPostsQuery,
  useCreatePostMutation,
  useUpdatePostMutation,
  useDeletePostMutation,
} from './features/api/apiSlice';

function App() {
  const { data: posts, isLoading } = useGetPostsQuery();
  const [createPost] = useCreatePostMutation();
  const [updatePost] = useUpdatePostMutation();
  const [deletePost] = useDeletePostMutation();

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [editId, setEditId] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !body) return;

    if (editId) {
      await updatePost({ id: editId, title, body }).unwrap();
      setEditId(null);
    } else {
      await createPost({ title, body }).unwrap();
    }

    setTitle('');
    setBody('');
  };

  const handleEdit = (post) => {
    setTitle(post.title);
    setBody(post.body);
    setEditId(post.id);
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure?')) {
      await deletePost(id);
    }
  };

  return (
    <div>
      <h1>RTK Query CRUD</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <textarea
          placeholder="Body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <br />
        <button type="submit">{editId ? 'Update' : 'Add'} Post</button>
      </form>

      <h2>Posts:</h2>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        posts?.slice(0, 10).map((post) => (
          <div key={post.id}>
            <strong>{post.title}</strong>
            <p>{post.body}</p>
            <button onClick={() => handleEdit(post)}>Edit</button>
            <button onClick={() => handleDelete(post.id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
```

---

## 📌 Summary

| Method | কাজ            | Hook                      |
| ------ | -------------- | ------------------------- |
| POST   | নতুন post তৈরি | `useCreatePostMutation()` |
| PUT    | post আপডেট     | `useUpdatePostMutation()` |
| DELETE | post মুছা      | `useDeletePostMutation()` |

---

## 🧠 RTK Query CRUD Flow:

1. **Create** → `createPost` (POST)
2. **Read** → `getPosts` (GET)
3. **Update** → `updatePost` (PUT)
4. **Delete** → `deletePost` (DELETE)



Redux Toolkit Query (RTK Query) automatically handles **caching** for your API data, making your app faster and more efficient. Let's break it down simply:

---

## 🧠 What is Caching?

**Caching** means storing previously fetched data, so it doesn't need to be refetched every time — improving performance and reducing unnecessary network requests.

---

## 🧩 Caching in RTK Query (Redux)

RTK Query caches API responses **automatically** when you use query endpoints.

### ✅ Example:

```js
const { data, isLoading } = useGetPostsQuery();
```

➡️ The first time, `useGetPostsQuery()` sends a network request.
➡️ Next time (within cache duration), it serves data **from cache**, not from the server.

---

## 🔄 Cache Lifetimes in RTK Query

RTK Query gives you control over how long data stays cached.

### 🔹 `keepUnusedDataFor` (default: 60 seconds)

How long unused cache data is kept before being removed.

```js
getPosts: builder.query({
  query: () => 'posts',
  keepUnusedDataFor: 300, // keeps data for 5 minutes
}),
```

---

## 🧼 Cache Invalidation

When you **create/update/delete** something, the cache may be outdated.

RTK Query handles that with **tags**:

```js
tagTypes: ['Post'],
```

```js
getPosts: builder.query({
  query: () => 'posts',
  providesTags: ['Post'],
}),
createPost: builder.mutation({
  query: (post) => ({ url: 'posts', method: 'POST', body: post }),
  invalidatesTags: ['Post'], // clears cached posts after mutation
}),
```

➡️ This tells Redux: “After creating a post, refetch posts.”

---

## 🛠 Bonus: Force Refetching

Want to ignore cache and **force refetch**?

```js
const { data } = useGetPostsQuery(undefined, { refetchOnMountOrArgChange: true });
```

---

## ✅ Summary Table

| Feature                     | Purpose                      |
| --------------------------- | ---------------------------- |
| `keepUnusedDataFor`         | Set cache time (default 60s) |
| `providesTags`              | Declare cache data           |
| `invalidatesTags`           | Tell when to clear cache     |
| `refetchOnMountOrArgChange` | Force refresh                |

---










