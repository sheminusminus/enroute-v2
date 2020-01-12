/**
 * Jest date-mocking util
 * Sets Date.now to return November 1, 2018
 * Our date-range selectors cover a span of 4 months at minimum (3 ago, 2 ago, last, current).
 * So, using 11/01/2018, we're testing at least 2 double-digit months and at least two
 * single-digit months
 */
global.Date.now = () => 1541084139260;
