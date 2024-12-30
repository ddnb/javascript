export class NotAvailable extends Error {}
export class Untranslatable extends Error {}
export class ConnectionError extends Error {}
export class QualityThresholdNotMet extends Error {
  constructor(text) {
    super(`The translation of ${text} does not meet the requested quality threshold.`);
    this.text = text;
  }
}
export class BatchIsEmpty extends Error {
  constructor() {
    super('Requested a batch translation, but there are no texts in the batch.');
  }
}