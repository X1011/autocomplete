var should = chai.should();

describe('filter', function() {
	it('does nothing when the input is empty', function() {
		filter(['b'], '').should.deep.equal(['b']);
	});

	it('matches a candidate that is the same as the input', function() {
		filter(['b'], 'b').should.deep.equal(['b']);
	});

	it('does not match a candidate that does not contain the input', function() {
		filter(['b'], 'a').should.deep.equal([]);
	});
	
	it('matches a prefix of a candidate', function() {
		filter(['apple', 'orange', 'banana'], 'ap').should.deep.equal(['apple']);
	});
	
	it('matches a string in the middle of a candidate', function() {
		filter(['apple', 'orange', 'banana'], 'an').should.deep.equal(['orange', 'banana']);
	});
});
