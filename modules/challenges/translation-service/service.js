/// <reference path="./global.d.ts" />
// @ts-check

import { ExternalApi } from './api';
import { NotAvailable, AbusiveClientError, Untranslatable, ConnectionError } from './errors';

export class TranslationService {
  /**
   * Creates a new service
   * @param {ExternalApi} api the original api
   */
  constructor(api) {
    this.api = api;
  }

  /**
   * Attempts to retrieve the translation for the given text.
   *
   * - Returns whichever translation can be retrieved, regardless the quality
   * - Forwards any error from the translation api
   *
   * @param {string} text
   * @returns {Promise<string>}
   */
  async free(text) {
    // return (await this.api.fetch(text)).translation;
    return (await this.api.fetch(text))?.translation ?? '';
  }

  /**
   * Batch translates the given texts using the free service.
   *
   * - Resolves all the translations (in the same order), if they all succeed
   * - Rejects with the first error that is encountered
   * - Rejects with a BatchIsEmpty error if no texts are given
   *
   * @param {string[]} texts
   * @returns {Promise<string[]>}
   */
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

  /**
   * Requests the service for some text to be translated.
   *
   * Note: the request service is flaky, and it may take up to three times for
   *       it to accept the request.
   *
   * @param {string} text
   * @returns {Promise<void>}
   */
  async request(text) {
    const maxRetries = 3;
    let attempts = 0;
  
    while (attempts < maxRetries) {
      try {
        await new Promise((resolve, reject) => 
          this.api.request(text, (err) => err ? reject(err) : resolve()));
        return; // If successful, exit the function
      } catch (error) {
        if (error instanceof Untranslatable) {
          throw error; // If the error is Untranslatable, rethrow it
        }
        attempts++;
        if (attempts >= maxRetries) {
          throw error; // If max retries reached, rethrow the error
        }
      }
    }
  }

  /**
   * Retrieves the translation for the given text
   *
   * - Rejects with an error if the quality can not be met
   * - Requests a translation if the translation is not available, then retries
   *
   * @param {string} text
   * @param {number} minimumQuality
   * @returns {Promise<string>}
   */
  // async premium(text, minimumQuality) {
  //   let result;
  //   try {
  //     result = await this.api.translate(text);
  //   } catch (error) {
  //     if (error instanceof NotAvailable) {
  //       await this.api.request(text);
  //       result = await this.api.translate(text);
  //     } else {
  //       throw error;
  //     }
  //   }
  //   const entry = this.api.data[text].find(e => e.value === result);
  //   if (entry.quality < minimumQuality) {
  //     throw new QualityThresholdNotMet(text);
  //   }
  //   return result;
  // }
  async premium(text, minimumQuality) {
    let translation, quality;
  
    try {
      ({ translation, quality } = await this.api.fetch(text));
    } catch (error) {
      if (error instanceof NotAvailable) {
        await this.request(text);
        ({ translation, quality } = await this.api.fetch(text));
      } else {
        throw error;
      }
    }
  
    if (quality < minimumQuality) {
      throw new QualityThresholdNotMet(text);
    }
  
    return translation;
  }
}

/**
 * This error is used to indicate a translation was found, but its quality does
 * not meet a certain threshold. Do not change the name of this error.
 */
export class QualityThresholdNotMet extends Error {
  /**
   * @param {string} text
   */
  constructor(text) {
    super(
      `
The translation of ${text} does not meet the requested quality threshold.
    `.trim(),
    );

    this.text = text;
  }
}

/**
 * This error is used to indicate the batch service was called without any
 * texts to translate (it was empty). Do not change the name of this error.
 */
export class BatchIsEmpty extends Error {
  constructor() {
    super(
      `
Requested a batch translation, but there are no texts in the batch.
    `.trim(),
    );
  }
}