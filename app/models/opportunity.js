var method = Opportunity.prototype;

function Opportunity(code, company, jobTitle, jobLocation, jobDescription, jobSkills, companyDescription, compensation,
		  				logistics, costOfLiving, companyLogo, opportunityPicture) {
	this.code = code;
	this.company = company;
	this.jobTitle = jobTitle;
	this.jobLocation = jobLocation;
	this.jobDescription = jobDescription;
	this.jobSkills = jobSkills;
	this.companyDescription = companyDescription;
	this.compensation = compensation;
	this.logistics = logistics;
	this.costOfLiving = costOfLiving;
	this.companyLogo = companyLogo;
	this.opportunityPicture = opportunityPicture;
}

module.exports = Opportunity;