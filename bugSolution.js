To solve this, you should configure PurgeCSS to whitelist the dynamic classes or use a different approach that better handles dynamic styles.

Here's an example using PurgeCSS's whitelist option:

```javascript
module.exports = {
  // ... other PurgeCSS configurations
  whitelist: ['hidden'], // Add the 'hidden' class to the whitelist
  // ...
}
```

Alternatively, adjust your purging strategy, or if feasible, consider a CSS-in-JS approach that is more compatible with dynamically updated styles.