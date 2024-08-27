const is = {}

is.num = (value) => typeof value === 'number';
is.nan = (value) => Number.isNaN(value);
is.str = (value) => typeof value === 'string';
is.bool = (value) => typeof value === 'boolean';
is.undef = (value) =>  value === undefined;
is.def = (value) =>  value !== undefined;
is.arr = (value) => Array.isArray(value);
is.obj = (value) => value !== null && typeof value === 'object' && !Array.isArray(value);
is.fun = (value) => typeof value === 'function';
is.truthy = Boolean(value) === true;
is.falsy = Boolean(value) === false;