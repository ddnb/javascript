import { ExternalApi } from './api.js';
import { QualityThresholdNotMet, BatchIsEmpty, NotAvailable, Untranslatable, ConnectionError } from './errors.js';

export class TranslationService {
  constructor(api) {
    if (!(api instanceof ExternalApi)) {
      throw new Error('api must be an instance of ExternalApi');
    }
    this.api = api;
  }

  async free(text) {
    const result = await this.api.fetch(text);
    return result;
  }

  async batch(texts) {
    if (texts.length === 0) {
      throw new BatchIsEmpty();
    }
    const results = [];
    for (const text of texts) {
      results.push(await this.free(text));
    }
    return results;
  }

  async request(text) {
    try {
      await this.api.request(text);
    } catch (error) {
      if (error instanceof Untranslatable) {
        throw error;
      }
      throw error;
    }
  }

  async premium(text, minimumQuality) {
    let result;
    try {
      result = await this.api.fetch(text);
    } catch (error) {
      if (error instanceof NotAvailable) {
        await this.api.request(text);
        result = await this.api.fetch(text);
      } else {
        throw error;
      }
    }

    const entry = this.api.data[text].find(e => e.value === result.translation);
    if (entry.quality < minimumQuality) {
      throw new QualityThresholdNotMet(text);
    }
    return result.translation;
  }
}