class SinglyNode {
    constructor(val, next) {
        this.val = (val === undefined ? null : val)
        this.next = (next === undefined ? null : next)
    }
}

module.exports = { SinglyNode };