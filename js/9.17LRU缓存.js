// LRU缓存
// https://leetcode-cn.com/problems/lru-cache-lcci/


// 方法一：利用哈希表结构实现
var LRUCache = function (capacity) {
  // JS的哈希表结构本身具备LRU性质，即当delete(key)再set(key,val)
  // 则哈希表中key对应的位置被挪到尾部
  this.max = capacity
  this.cache = new Map()
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  const cache = this.cache
  if (cache.has(key)) {
    const value = cache.get(key)
    cache.delete(key)
    cache.set(key, value)
    return value
  } else {
    return -1
  }
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const cache = this.cache
  if (cache.has(key)) cache.delete(key)
  if (cache.size === this.max) cache.delete(cache.keys().next().value)
  cache.set(key, value)
};


// 方法二：利用双向链表实现
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.next = null
    this.prev = null
  }
}

class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.hashTable = {}
    this.count = 0
    this.dummyHead = new ListNode()
    this.dummyTail = new ListNode()
    this.dummyHead.next = this.dummyTail
    this.dummyTail.prev = this.dummyHead
  }

  get(key) {
    let node = this.hashTable[key]
    if (node == null) return -1
    this.moveToHead(node)
    return node.value
  }

  put(key, value) {
    let node = this.hashTable[key]
    if (node == null) {
      let newNode = new ListNode(key, value)
      this.hashTable[key] = newNode
      this.addToHead(newNode)
      this.count++
      if (this.count > this.capacity) {
        this.removeLRUItem()
      }
    } else {
      node.value = value
      this.moveToHead(node)
    }
  }

  moveToHead(node) {
    this.removeFromList(node)
    this.addToHead(node)
  }

  removeFromList(node) {
    let tempForPrev = node.prev
    let tempForNext = node.next
    tempForPrev.next = tempForNext
    tempForNext.prev = tempForPrev
  }

  addToHead(node) {
    node.prev = this.dummyHead
    node.next = this.dummyHead.next
    this.dummyHead.next.prev = node
    this.dummyHead.next = node
  }

  removeLRUItem() {
    let tail = this.popTail()
    delete this.hashTable[tail.key]
    this.count--
  }

  popTail() {
    let tailItem = this.dummyTail.prev
    this.removeFromList(tailItem)
    return tailItem
  }
}
