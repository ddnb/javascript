class ArgumentError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ArgumentError';
  }
}

class OverheatingError extends Error {
  constructor(temperature) {
    super(`Overheating at ${temperature}°C`);
    this.name = 'OverheatingError';
    this.temperature = temperature;
  }
}

function checkHumidityLevel(humidity) {
  if (humidity === 100) {
    throw new Error('Humidity level is too high');
  }
}

function reportOverheating(temperature) {
  if (temperature === null) {
    throw new ArgumentError('Temperature cannot be null');
  }
  if (temperature >= 501) {
    throw new OverheatingError(temperature);
  }
}

function monitorTheMachine(actions) {
  try {
    actions.check();
  } catch (error) {
    if (error instanceof ArgumentError) {
      actions.alertDeadSensor();
    } else if (error instanceof OverheatingError) {
      if (error.temperature >= 651) {
        actions.shutdown();
      } else {
        actions.alertOverheating();
      }
    } else {
      throw error; // Rethrow unknown errors
    }
  }
}

export {
  checkHumidityLevel,
  reportOverheating,
  monitorTheMachine,
  ArgumentError,
  OverheatingError,
};