# <a href='https://task-day-2-six.vercel.app/'> Live </a>

# UI composition, DOM interaction philosophy & compound component pattern

React-এর মূল দর্শনের (Philosophy) দুটি অন্যতম শক্তিশালী স্তম্ভ হলো **Composition (কম্পোজিশন)** এবং **DOM Interaction (ডম ইন্টারঅ্যাকশন)**। React প্রথাগত ফ্রেমওয়ার্কগুলোর চেয়ে আলাদাভাবে কাজ করে মূলত এই দুটি ধারণার ওপর ভিত্তি করে।  
সহজ বাংলায় এই দুটি বিষয় নিচে বিস্তারিত আলোচনা করা হলো:

---

## ১. Composition Philosophy (কম্পোজিশন দর্শন)

React-এর একটি বিখ্যাত স্লোগান হলো: **"Don't Inherit, Compose"** (ইনহেরিট্যান্স বা উত্তরাধিকার নয়, কম্পোজিশন বা মিশ্রণ করুন)।

প্রথাগত অবজেক্ট অরিয়েন্টেড প্রোগ্রামিংয়ে (OOP) আমরা এক ক্লাস থেকে অন্য ক্লাসে কোড শেয়ার করার জন্য `Inheritance` বা উত্তরাধিকার ব্যবহার করি। কিন্তু React বলে, ছোট ছোট স্বাধীন কম্পোনেন্ট তৈরি করুন এবং সেগুলোকে জোড়া লাগিয়ে (Combine করে) একটি বড় কম্পোনেন্ট বা পুরো অ্যাপ্লিকেশন তৈরি করুন। এটিই হলো **Composition**।

### কম্পোজিশন কেন সেরা?

- **Reusability (পুনর্ব্যবহারযোগ্যতা):** একটি কম্পোনেন্ট একবার বানিয়ে অ্যাপ্লিকেশনের যেকোনো জায়গায় হাজার বার ব্যবহার করা যায়।
- **Flexibility (নমনীয়তা):** React-এ `children` প্রপস (Props) ব্যবহার করে একটি কম্পোনেন্টের ভেতর অন্য যেকোনো কম্পোনেন্ট বা HTML পাস করা যায়।

### একটি সহজ উদাহরণ

ধরা যাক আপনার অ্যাপে একটি `Modal` (পপ-আপ উইন্ডো) লাগবে। আপনি ইনহেরিট্যান্স না করে কম্পোজিশন দিয়ে এভাবে বানাবেন:

​
// একটি জেনেরিক ডায়ালগ বক্স (ছোট কম্পোনেন্ট)
function Dialog({ children, title }){
return (
<div className="dialog-box">
<h2>{title}</h2>
<div className="dialog-content">
{children} {/ এখানে যেকোনো কিছু বসানো যাবে /}
</div>
</div>
);
}
// কম্পোজিশন ব্যবহার করে মোডাল বা কনফার্মেশন বক্স তৈরি
function App(){
return (
<Dialog title="Welcome Box">
<p>এটি কম্পোজিশনের উদাহরণ। আমি চাইল্ড হিসেবে যেকোনো টেক্সট দিতে পারি।</p>
<button>পড়ুন</button>
</Dialog>
);
}

---

## ২. DOM Interaction Philosophy (ডম ইন্টারঅ্যাকশন দর্শন)

Vanilla JavaScript বা jQuery দিয়ে যখন আমরা কাজ করি, তখন আমরা সরাসরি ব্রাউজারের DOM (Document Object Model) পরিবর্তন করি (যেমন: `document.getElementById().innerText = 'Hello'`)। একে বলা হয় **Imperative Approach** (কিভাবে করতে হবে তা ধাপে ধাপে বলে দেওয়া)।

কিন্তু React-এর ফিলোসফি হলো সম্পূর্ণ উল্টো। React ব্যবহার করে **Declarative Approach** এবং **Virtual DOM**।

### React-এর DOM ইন্টারঅ্যাকশনের মূল নিয়মগুলো

- **সরাসরি DOM স্পর্শ না করা (No Direct DOM Manipulation):** React বলে, আপনি সরাসরি ব্রাউজারের DOM পরিবর্তন করবেন না। আপনি শুধু অ্যাপ্লিকেশনের **State (ডাটা)** পরিবর্তন করবেন, UI নিজে থেকেই আপডেট হয়ে যাবে।
- **Virtual DOM (ভার্চুয়াল ডম):** React ব্রাউজারের আসল DOM-এর একটি হালকা কপি বা মেমোরি রিপ্রেজেন্টেশন নিজের কাছে রাখে, যাকে বলা হয় Virtual DOM।
- **Reconciliation & Diffing Algorithm:** যখনই অ্যাপের স্টেট পরিবর্তন হয়, React প্রথমে একটি নতুন Virtual DOM তৈরি করে এবং আগের Virtual DOM-এর সাথে তুলনা (Diffing) করে দেখে ঠিক কোন জায়গায় পরিবর্তন হয়েছে।
- **Batch Updates:** পুরো পেজ রি-রেন্ডার না করে, ব্রাউজারের আসল DOM-এর ঠিক যেটুকু অংশ পরিবর্তন করা দরকার, শুধুমাত্র সেটুকুই অত্যন্ত দ্রুততার সাথে আপডেট করে। একে **Reconciliation** বলে।

### একটি সহজ উদাহরণ

Vanilla JS-এ একটি বাটন ক্লিক করলে টেক্সট পরিবর্তন করার জন্য সরাসরি DOM সিলেক্ট করতে হতো। কিন্তু React-এ আমরা শুধু স্টেট বা ডাটা পরিবর্তন করি:

​
import { useState } from 'react';
function Counter(){
const [count, setCount] = useState(0); // স্টেট বা ডাটা
return (
<div>
{/ আমরা সরাসরি DOM আপডেট করছি না, শুধু স্টেট চেঞ্জ করছি /}
<p>আপনি ক্লিক করেছেন {count} বার</p>
<button onClick={() => setCount(count + 1)}>ক্লিক করুন</button>
</div>
);
}

এখানে বাটন ক্লিক হলে React পর্দার আড়ালে ভার্চুয়াল ডমের সাহায্যে হিসাব করে দেখবে যে শুধু `<p>` ট্যাগের ভেতরের সংখ্যাটি পরিবর্তন হয়েছে, এবং সে আসল DOM-এ গিয়ে পুরো পেজ টাচ না করে শুধু ওই সংখ্যাটি বদলে দেবে।

---

## ৩. Compound component pattern

**React-এ Compound Component Pattern** হলো এমন একটি অ্যাডভান্সড ডিজাইন প্যাটার্ন, যার মাধ্যমে কয়েকটি ছোট ছোট কম্পোনেন্ট একসাথে মিলে একটি বড় এবং জটিল কম্পোনেন্টের কাজ সম্পন্ন করে।

সহজ কথায়, এরা একা একা খুব একটা কার্যকর নয়, কিন্তু দলগতভাবে (Compound হিসেবে) চমৎকার কাজ করে। এর সবচেয়ে বড় সুবিধা হলো—এটি কম্পোনেন্টের ভেতরের স্টেট (State) নিজে থেকেই ম্যানেজ করে, ফলে বাইরে থেকে বারবার **Props Drilling** (এক কম্পোনেন্ট থেকে অন্য কম্পোনেন্টে প্রপস পাঠানো) করতে হয় না।

বাস্তব জীবনের একটি উদাহরণ হলো HTML-এর `<select>` এবং `<option>` ট্যাগ:

​
<select>
<option value="apple">Apple</option>
<option value="banana">Banana</option>
</select>

এখানে `<select>` ট্যাগটি মেইন স্টেট (কোনটি সিলেক্টেড আছে) ধরে রাখে, আর `<option>` ট্যাগগুলো তার চাইল্ড হিসেবে কাজ করে। আপনি কিন্তু `<option>`-এর কাছে আলাদা করে কোনো প্রপস পাঠান না, এটি নিজে থেকেই সিলেক্ট ট্যাগের সাথে কানেক্ট হয়ে যায়। React-এ ঠিক এই কনসেপ্টটাই তৈরি করা হয় **React Context API** ব্যবহার করে।

### কেন এটি ব্যবহার করবেন? (Advantages)

- **No Props Drilling:** চাইল্ড কম্পোনেন্টগুলোতে আলাদা করে স্টেট বা ফাংশন পাস করতে হয় না।
- **High Flexibility:** ইউজার নিজের ইচ্ছা মতো চাইল্ড কম্পোনেন্টগুলোর পজিশন বা সিরিয়াল পরিবর্তন করতে পারেন।
- **Clean Code:** কোড দেখতে অনেক গোছানো এবং প্রফেশনাল মনে হয়।

### কিভাবে তৈরি করবেন? (একটি বাস্তব উদাহরণ)

ধরা যাক, আমরা একটি **Accordion** (যা ক্লিক করলে খোলে এবং বন্ধ হয়) তৈরি করবো।

#### ১. Context এবং Main Component তৈরি করা

​
import React, { createContext, useState, useContext } from 'react';
// ১. প্রথমে একটি Context তৈরি করি
const AccordionContext = createContext();
// ২. মেইন প্যারেন্ট কম্পোনেন্ট
export function Accordion({ children }){
const [openIndex, setOpenIndex] = useState(null);
const toggle = (index) => {
setOpenIndex(openIndex === index ? null : index);
};
return (
<AccordionContext.Provider value= openIndex, toggle >
<div className="accordion-wrapper">{children}</div>
</AccordionContext.Provider>
);
}

#### ২. চাইল্ড কম্পোনেন্টগুলো তৈরি করা

এখন আমরা মেইন কম্পোনেন্টের প্রোপার্টি (Dot notation) হিসেবে চাইল্ড কম্পোনেন্টগুলো যুক্ত করবো।

​
// ৩. আইটেম কন্টেইনার কম্পোনেন্ট
Accordion.Item = function AccordionItem({ index, children }){
return <div className="accordion-item">{children}</div>;
};
// ৪. হেডার বা টগল বাটন কম্পোনেন্ট
Accordion.Header = function AccordionHeader({ index, children }){
const { toggle } = useContext(AccordionContext);
return (
<button onClick={() => toggle(index)} className="accordion-header">
{children}
</button>
);
};
// ৫. বডি বা কন্টেন্ট কম্পোনেন্ট
Accordion.Body = function AccordionBody({ index, children }){
const { openIndex } = useContext(AccordionContext);
// যদি এই ইনডেক্সটি ওপেন ইনডেক্সের সাথে মিলে, তবেই কন্টেন্ট দেখাবে
return openIndex === index ? <div className="accordion-body">{children}</div> : null;
};

### এটি কিভাবে ব্যবহার করবেন? (Usage)

​
function App(){
return (
<Accordion>
{/ প্রথম আইটেম /}
<Accordion.Item>
<Accordion.Header index={0}>React কি?</Accordion.Header>
<Accordion.Body index={0}>React হলো একটি জনপ্রিয় JavaScript লাইব্রেরি।</Accordion.Body>
</Accordion.Item>
{/ দ্বিতীয় আইটেম /}
<Accordion.Item>
<Accordion.Header index={1}>Compound Pattern কেন ব্যবহার করব?</Accordion.Header>
<Accordion.Body index={1}>কোডকে আরও ফ্লেক্সিবল এবং রিইউজেবল করার জন্য।</Accordion.Body>
</Accordion.Item>
</Accordion>
);
}

> **লক্ষণীয় বিষয়:** লক্ষ্য করে দেখুন, `App` কম্পোনেন্টে আমাদের কোনো `isOpen` বা `setIsOpen` এর মতো স্টেট হ্যান্ডেল করতে হচ্ছে না। সব ইন্টারনাল লজিক `Accordion` নিজেই সামলাচ্ছে।

পপুলার UI লাইব্রেরি যেমন **Chakra UI**, **Radix UI**, বা **Material-UI (MUI)** তাদের জটিল কম্পোনেন্টগুলো (যেমন: Tabs, Modal, Dropdown) তৈরি করতে এই Compound Component Pattern ব্যাপকভাবে ব্যবহার করে।
​

