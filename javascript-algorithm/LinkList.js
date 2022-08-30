


//js 实现的简略链表数据结构

class LinkNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkNodeList {
    constructor () {
        this.head = null;
        this.length = 0;
    }
    append (value) {
        const node = new LinkNode(value);
        let p = this.head;
        if (this.head) {
           while (p.next) {
              p = p.next;
           }
           p.next = node;
        } else {
          this.head = node;
        };
        this.length ++;
    }

    // do while 遍历链表
    print () {
        if (this.head) {
           let p = this.head;
           let ret = '';
           do { 
             ret += ` ${p.value} =>`;
             p = p.next;
           } while (p.next);
           ret += ` ${p.value}`;
           console.log(ret)
        } else {
            console.log('empty');
        }
    }
    // while 遍历链表
    print2() {
       if (this.head) {
        let p = this.head;
        let ret = '';
        while (p.next) {
           ret +=`${p.value}=>`;
           p = p.next;
        }
        ret += `${p.value}`;
        console.log(ret)
       } else {
        console.log('empty')
       }
    }
}


const linkList = new LinkNodeList();
linkList.append(1);
linkList.append(2);
linkList.append(3);
linkList.append(4);

// linkList.print2();


// LRU 缓存 测试demo
const cache = new Map();
cache.set('a',1);
cache.set('b',2);
cache.set('c',3);
cache.set('d',4);

console.log(cache.keys().next(),"feat-logistic_receipt_log")


