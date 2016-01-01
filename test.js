import test from 'ava';
import fn from './';

test(t => {
	t.true(fn({foo: {bar: [1, 2]}}, {foo: {bar: [1, 2]}}));
	t.false(fn({foo: {bar: [1, 2]}}, {foo: {bar: [1, 3]}}));
	t.true(fn({foo: {bar: 1}}, {foo: {bar: 1}}));
	t.false(fn({foo: {bar: 1}}, {foo: {bar: '1'}}));
});
