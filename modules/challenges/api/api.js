import { NotAvailable, Untranslatable, ConnectionError } from './errors.js';

const mutex = { current: false };

export class ExternalApi {
  constructor(initialData = {}) {
    this.data = initialData;
    this.requests = {};
  }

  register(key, value, quality = 0) {
    if (!this.data[key]) {
      this.data[key] = [];
    }
    this.data[key].push({ value, quality });

    console.log(this.data);
    return this;
  }

  async fetch(key) {
    if (typeof key !== 'string') {
      throw new Error(`Expected text when calling fetch(key), actual ${typeof key}.`);
    }

    // Check if client is banned
    if (mutex.current) {
      return new Promise((_, reject) => setTimeout(() => reject(new Error('AbusiveClientError')), 1000));
    }

    if (this.data[key] && this.data[key].length > 0) {
      const entry = this.data[key].shift();
      if (entry.value === null) {
        throw new Untranslatable();
      }
      return new Promise((resolve) => setTimeout(() => resolve(entry), 1000));
    }

    if (this.data[key]) {
      throw new NotAvailable(key);
    }

    throw new Untranslatable();
  }

  async request(key) {
    if (!this.requests[key]) {
      this.requests[key] = 0;
    }
    this.requests[key]++;
    if (this.requests[key] > 3) {
      throw new ConnectionError();
    }
    return this.fetch(key);
  }
}