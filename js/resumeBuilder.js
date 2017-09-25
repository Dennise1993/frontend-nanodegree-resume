
var bio = {
	"name": "Betty Li",
	"role": "Front-End Developer",
	"contacts": {
		"mobile": "0481324726",
		"email": "lizhijin1993@gmail.com",
		"github": "https://github.com/Dennise1993",
		"linkedIn": "https://www.linkedin.com/in/zhijin-li-08955670/",
		"location": "Melbourne, Australia"
	},
	"welcomeMessage": "上善若水",
	"skills": ["HTML5", "CSS", "JavaScript", "jQuery", "Angular"],
	"bioPic": "images/betty.jpg"
};

var education = {
	"schools": [
		{
			"name": "Melbourne University",
			"location": "Melbourne, Australia",
			"degree": "Master",
			"majors": ["Engineering (Software)"],
			"dates": "2016-2019",
			"url": "http://www.unimelb.edu.au/"
		},
		{
			"name": "Liverpool University",
			"location": "Liverpool, UK",
			"degree": "Bachelor",
			"majors": ["Architecture"],
			"dates": "2011-2015",
			"url": "https://www.liverpool.ac.uk/"			
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2017-Present",
			"url": "https://www.udacity.com/"
		}
	]
};

var work = {
	"jobs": [
	{
		"employer": "Access China UK Education",
		"title": "Tour Guide",
		"location": "Liverpool, UK",
		"dates": "09/2011-07/2015",
		"description": "The role involves dealing with pupils and their teachers in a polite and friendly manner demonstrating their service skills, translating purposes from UK’s director to China’s teacher and using a logical standard procedure to resolve any problems professionally and confidently."
	}
	],
};

var projects = {
	"projects": [
	{
		"title": "Portfolio Site",
		"dates": "08/2017",
		"description": "Develop a website that displays images, descriptions and links to each of the portfolio images. All Content is responsive and displays on all display sizes including Desktop, Tablet and Mobile. Srcset is used in the img elements to provide optimized images to users. Task runner Grunt is used as well to speed up the resizing for original pictures.",
		"images":[
			"images/citygate.jpg",
			"images/museum.jpg"
		]
	}
	]
};

bio.display = function () {
	var formaName = HTMLheaderName.replace("%data%", bio.name);
	var formaRole = HTMLheaderRole.replace("%data%", bio.role);
	$("#header").prepend(formaName, formaRole);

	// var formaContact = HTMLheaderName.replace("%contact%", "Holy");
	// var formaContact1 = formaContact.replace("%data%", "moly");
	var formaMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
	var formaEmail = HTMLemail.replace("%data%", bio.contacts.email);
	var formaGitHub = HTMLgithub.replace("%data%", bio.contacts.github);
	var formaLinkedIn = HTMLLinkedIn.replace("%data%", bio.contacts.linkedIn);
	var formaLoc   = HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formaMobile, formaEmail, formaGitHub, formaLinkedIn, formaLoc);
	$("#footerContacts").append(formaMobile, formaEmail, formaGitHub, formaLinkedIn, formaLoc);
	var formaImg = HTMLbioPic.replace("%data%", bio.bioPic);
	var formaWel = HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage);
	$("#header").append(formaImg, formaWel);

    if(bio.skills.length>0) {
      $("#header").append(HTMLskillsStart);
      var skills = bio.skills;
      
      skills.forEach(function(skill) {       
        var formaSkill = HTMLskills.replace("%data%", skill);
        //console.log(formaSkill);
        $("#skills").append(formaSkill);
      }); 
    }
}	


work.display = function() {

    work.jobs.forEach(function (job) {
    	$("#workExperience").append(HTMLworkStart);

    	var formaEmployer = HTMLworkEmployer.replace("%data%", job.employer);
    	var formaTitle = HTMLworkTitle.replace("%data%", job.title);
    	var formaEmploTit = formaEmployer + formaTitle;

    	var formaJobDates = HTMLworkDates.replace("%data%", job.dates);
    	var formaJobLoc = HTMLworkLocation.replace("%data%", job.location);
    	var formaJobDesc = HTMLworkDescription.replace("%data%", job.description);
    	$(".work-entry:last").append(formaEmploTit, formaJobDates, formaJobLoc, formaJobDesc);    	
    });
}

projects.display = function() {
	projects.projects.forEach(function(project) {
		$("#projects").append(HTMLprojectStart);

		var formaProTitle = HTMLprojectTitle.replace("%data%", project.title);
		$(".project-entry:last").append(formaProTitle);

		var formaProDates = HTMLprojectDates.replace("%data%", project.dates);
		$(".project-entry:last").append(formaProDates);

		var formaProDesc = HTMLprojectDates.replace("%data%", project.description);
		$(".project-entry:last").append(formaProDesc);

		if(project.images.length > 0) {
			project.images.forEach(function(image) {
				var formaImg = HTMLprojectImage.replace("%data%", image);
				$(".project-entry:last").append(formaImg);
			});
		}

	});
}

education.display = function() {

	$("#education").append(HTMLschoolStart);

	if(education.schools.length>0) {
		education.schools.forEach(function(school) {
			var formaSclName = HTMLschoolName.replace("%data%", school.name);
			var formaSclDegree = HTMLschoolDegree.replace("%data%", school.degree);
			var formaSclDates = HTMLschoolDates.replace("%data%", school.dates);
			var formaSclLoc = HTMLschoolLocation.replace("%data%", school.location);
			$(".education-entry:last").append(formaSclName, formaSclDegree, formaSclDates, formaSclLoc);
			if(school.majors.length>0) {
				school.majors.forEach(function(major) {
					var formaSclMajor = HTMLschoolMajor.replace("%data%", major);
					$(".education-entry:last").append(formaSclMajor);
				});
			}
		})
	}

	if(education.onlineCourses.length>0) {
		$(".education-entry:last").append(HTMLonlineClasses);
		education.onlineCourses.forEach(function(onlineCourse) {
			var formaOnlineTitle = HTMLonlineTitle.replace("%data%",onlineCourse.title);
			var formaOnlineScl = HTMLonlineSchool.replace("%data%",onlineCourse.school);
			var formaOnlineDates = HTMLonlineDates.replace("%data%",onlineCourse.dates);
			var formaOnlineURL = HTMLonlineURL.replace("%data%", onlineCourse.url);
			$(".education-entry:last").append(formaOnlineTitle, formaOnlineScl, formaOnlineDates, formaOnlineURL);
		});
	}
	
}

bio.display();
work.display();
projects.display();
education.display();

$("#mapDiv").append(googleMap);