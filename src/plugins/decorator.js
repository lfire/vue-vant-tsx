// decorators.js
import { createDecorator } from 'vue-class-component';

// Declare Log decorator.
export const Log = createDecorator((options, key) => {
  // Keep the original method for later.
  const originalMethod = options.methods[key];

  // Wrap the method with the logging logic.
  options.methods[key] = function wrapperMethod(...args) {
    // Print a log.
    console.log(`Invoked: ${key}(`, ...args, ')');

    // Invoke the original method.
    originalMethod.apply(this, args);
  };
});

// declare Debounce decorator.
export const Debounce = (delay = 300) =>
  createDecorator((options, key) => {
    const originalMethod = options.methods[key];
    options.methods[key] = function wrapperMethod(...args) {
      clearTimeout(this[`__debounce_${key}`]);
      this[`__debounce_${key}`] = setTimeout(() => {
        originalMethod.apply(this, args);
      }, delay);
    };
  });
