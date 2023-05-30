import React from 'react'

class Node {
  _value
  _next

  constructor(value) {
    this._value = value
    this._next = null
  }

  get value() {
    return this._value
  }

  set value(value) {
    this._value = value
  }

  get next() {
    return this._next
  }

  set next(value) {
    this._next = value
  }
}

class Queue {
  constructor(front: Node = null, back: Node = null) {}

  isEmpty() {
    return !this.front;
  }

  enqueue(value) {
    const node = new Node(value)
    if (this.isEmpty()) {
      this.front = node
      this.back = node
      return
    }
    this.back.next = node
    this.back = node
  }

  dequeue() {
    const node = this.front;
    if (!this.isEmpty()) {
      this.front = this.front?.next;
    }
    if (!this.front) {
      this.back = null
    }
    return node;
  }

  getQueue() {
    if (this.isEmpty()) {
      return 'Fila vazia'
    }
    const tempArr = []

    let temp = this.front

    while (temp) {
      tempArr.push(temp.value)
      temp = temp.next
    }
    return tempArr
  }
}

export default Queue
