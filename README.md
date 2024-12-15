# Tailwind CSS PurgeCSS: Missing Styles Due to Conditionally Rendered Classes

This repository demonstrates a common issue when using Tailwind CSS with PurgeCSS or similar tools that remove unused CSS.  If a class is applied conditionally (based on JavaScript state), and PurgeCSS doesn't detect its usage during its static analysis, the associated styles will be removed, leading to unexpected visual glitches.

**Problem:**

Conditionally applied Tailwind classes might get removed by PurgeCSS if it only analyzes the initial HTML structure and doesn't account for dynamic class updates. This results in the element not being styled correctly when the condition changes.

**Solution:**

Several approaches can mitigate this:  Use PurgeCSS's `whitelist` or `whitelistPatterns` options to explicitly include the affected classes. Consider using a different CSS purging strategy, one that evaluates dynamic class usage. Another approach is to use a CSS-in-JS solution that might not require the same level of purging.

**Reproduction:**

Clone this repository and run `npm install`. The `bug.html` file demonstrates the problem.  The `bugSolution.js` file showcases a solution involving the `whitelist` option. 