import React from "react";

export default class SimpleObserver {
  constructor() {
    this.observers = [];
  }

  subscribe(fn) {
    this.observers.push(fn);
  }

  unsubscribe(fn) {
    this.observers = this.observers.filter((subscriber) => subscriber !== fn);
  }

  emmit(data) {
    this.observers.forEach((subscriber) => subscriber(data));
  }
}
