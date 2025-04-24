# VUE JS

[Back](../README.md)

## Explain Vue.js reactivity and common issues when tracking changes.

With vanilla JS. if we modify a list of item. We need to find the exact element in the DOM, then modify it directly. It's tedious and the code is harder to read.
This is what all modern frontend frameworks solves. We can attach a state or variable to UI element. So when we want to modify the element like adding or removing item. We only need to interact with the state, the actual DOM is not touched manually. I think that's the general concept of reactivity.

The common issues is the depth of the object, as I remember vue not by default tracking the deeper level of an object.
Also null, undefined, nan, etc is tricky to handle and could cause unpredictable code.

## Describe data flow between components in a Vue.js app

The simplest way is to trickle it down from the page level component to the child components by props. The props can contain state and methods.
Now if the page is quite complicated and the components need to comunicate to each other a lot, we need to consider to use state management like Pinia. Now imagine a single page, it has 20 components, when using state management we will have a single place to store all the state, getters and methods. So if a component want to use the data on the store it will call just the store.
As I remember Pinia store works as a singleton where it's only declared once and any components that call it will access same data.

## List the most common cause of memory leaks in Vue.js apps and how they can be solved.

Honestly i'm not really often dealing with memory leaks. But I think common issues is when there's a process in the background that we don't know. Such as maybe a setTimeout that running indefinitely, or event listeners that attached to lots of moving components. But I think it's a concept that's interesting for me too deep dive.

## What have you used for state management

I used pinia. The simple way I use it is, for each page I have a single store file. So the store file can be smaller. I did store all the application state and methods in a single file once, Bad Idea. So I think it's cleaner to just use single file for each Page. If it needs to go through multiple pages, just put it on local storage or cookie.

## What’s the difference between pre-rendering and server side rendering

This is intimidating terminologies for me during the start of my coding journey. But after awhile, the name is too intimidating for it's actual meaning.
basically _pre rendering_ just creates all the html as a static file. So when the frontend asks for html, the rendering is once in the beginning, usually for blog site, landing page or other static pages.
_server side rendering_ on the other hand is like _client side rendering_ but on server. Basically backend taking the effort to render page on backend level (the fetching then turning it into elements, etc).
