//**************** APIFeatures Class ****************//
class APIFeatures {
	constructor(query, queryStr) {
		this.query = query;
		this.queryStr = queryStr;
	}

	//**************** search function ****************//
	search() {
		const keyword = this.queryStr.keyword ? {
					name: {
						$regex: this.queryStr.keyword,
						$options: 'i',
					},
			}
			: {};

		this.query = this.query.find({ ...keyword });
		return this;
	}
	//**************** filter function ****************//
	filter() {
		const queryCopy = { ...this.queryStr };

		// Removing fields from the query
		const removeFields = ['keyword', 'limit', 'page'];
		removeFields.forEach(el => delete queryCopy[el]);

		// Advance filter for price, ratings, and etcetera
		let queryStr = JSON.stringify(queryCopy);
		queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, match => `$${match}`);

		this.query = this.query.find(JSON.parse(queryStr));
		return this;
	}
	//**************** pagination function ****************//
	pagination(resPerPage) {
		const currentPage = Number(this.queryStr.page) || 1;
		const skip = resPerPage * (currentPage - 1);

		this.query = this.query.limit(resPerPage).skip(skip);
		return this;
	}
}
module.exports = APIFeatures;
