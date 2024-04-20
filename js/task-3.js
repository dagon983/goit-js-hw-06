class StringBuilder {
    #value

    constructor(value) {
        this.#value = value;
    }

    getValue() {
        return this.#value;
    }

    padEnd(str) {
        return this.#value = this.#value.concat(str);
    }

    padStart(str) {
        return this.#value = str.concat(this.#value);
    }
    
    padBoth(str) {
        return this.padStart(str).concat(this.#value.concat(this.padEnd(str)));
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="
