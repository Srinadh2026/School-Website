document.addEventListener('DOMContentLoaded', function() {
    // Dropdown data
    const eduspheres = {
        attili: ["Academic Life", "Extracurricular Activities", "Events & Celebrations", "Student Life & Well-being", "School News & Announcements", "Career & Future Planning"],
        ganapavaram: ["Academic Life", "Extracurricular Activities", "Events & Celebrations", "Student Life & Well-being", "School News & Announcements", "Career & Future Planning"],
        akividu: ["Academic Life", "Extracurricular Activities", "Events & Celebrations", "Student Life & Well-being", "School News & Announcements", "Career & Future Planning"],
    };

    const events = {
        "Academic Life": ["Study Tips & Resources", "Exams & Preparation", "Homework Help", "Educational Competitions"],
        "Extracurricular Activities": ["Science Club", "Sports & Athletics", "Music & Arts", "Student Leadership & Council"],
        "Events & Celebrations": ["School Annual Day", "Festivals & Special Occasions", "Field Trips", "Competitions & Talent Shows"],
        "Student Life & Well-being": ["Friendships & Social Life", "Healthy Lifestyle & Nutrition", "School Memories", "Fun Moments"],
        "School News & Announcements": ["Principal's Message", "Upcoming Events & Holidays", "Achievements & Awards", "Important Notices"],
        "Career & Future Planning": ["College Preparation", "Career Guidance", "Scholarships", "Skill Development"]
    };

    // Get dropdown elements
    const branchSelect = document.getElementById("branch");
    const edusphereSelect = document.getElementById("edusphere");
    const eventSelect = document.getElementById("event");

    // Initialize dropdowns
    function initDropdowns() {
        edusphereSelect.innerHTML = '<option value="" selected disabled>-- Select EduSphere --</option>';
        eventSelect.innerHTML = '<option value="" selected disabled>-- Select Event --</option>';
        edusphereSelect.disabled = true;
        eventSelect.disabled = true;
    }

    // Populate EduSpheres based on branch selection
    function populateEduspheres() {
        eventSelect.innerHTML = '<option value="" selected disabled>-- Select Event --</option>';
        eventSelect.disabled = true;
        
        const selectedBranch = branchSelect.value;
        if (selectedBranch) {
            edusphereSelect.innerHTML = '<option value="" selected disabled>-- Select EduSphere --</option>';
            edusphereSelect.disabled = false;
            
            eduspheres[selectedBranch].forEach(edusphere => {
                const option = new Option(edusphere, edusphere);
                edusphereSelect.add(option);
            });
        } else {
            edusphereSelect.innerHTML = '<option value="" selected disabled>-- Select EduSphere --</option>';
            edusphereSelect.disabled = true;
        }
    }

    // Populate Events based on EduSphere selection
    function populateEvents() {
        eventSelect.innerHTML = '<option value="" selected disabled>-- Select Event --</option>';
        
        const selectedEdusphere = edusphereSelect.value;
        if (selectedEdusphere) {
            eventSelect.disabled = false;
            events[selectedEdusphere].forEach(event => {
                const option = new Option(event, event);
                eventSelect.add(option);
            });
        } else {
            eventSelect.disabled = true;
        }
    }

    // Filter and show content based on selections
    function filterContent() {
        // Get all main sections
        const mainSections = [
            document.querySelector('.academiclife'),
            document.querySelector('.extracurricularactivities'),
            document.querySelector('.eventscelebrations'),
            document.querySelector('.studentlifewellbeing'),
            document.querySelector('.schoolnewsannouncements'),
            document.querySelector('.careerfutureplanning')
        ];
        
        // Get all content sections
        const contentSections = document.querySelectorAll('.content');
        
        // Get current selections
        const selectedEdusphere = edusphereSelect.value;
        const selectedEvent = eventSelect.value;
        
        // Hide all main sections and content sections initially
        mainSections.forEach(section => {
            if (section) section.style.display = 'none';
        });
        contentSections.forEach(section => {
            section.style.display = 'none';
        });
        
        // If no edusphere selected, show nothing
        if (!selectedEdusphere) return;
        
        // Show the selected main section
        let mainSection;
        switch(selectedEdusphere) {
            case "Academic Life":
                mainSection = document.querySelector('.academiclife');
                break;
            case "Extracurricular Activities":
                mainSection = document.querySelector('.extracurricularactivities');
                break;
            case "Events & Celebrations":
                mainSection = document.querySelector('.eventscelebrations');
                break;
            case "Student Life & Well-being":
                mainSection = document.querySelector('.studentlifewellbeing');
                break;
            case "School News & Announcements":
                mainSection = document.querySelector('.schoolnewsannouncements');
                break;
            case "Career & Future Planning":
                mainSection = document.querySelector('.careerfutureplanning');
                break;
        }
        
        if (mainSection) mainSection.style.display = 'block';
        
        // If an event is selected, show only that content section
        if (selectedEvent) {
            const matchingSection = document.querySelector(`.content[data-event="${selectedEvent}"]`);
            if (matchingSection) {
                matchingSection.style.display = 'flex';
            }
        } else {
            // If no event selected but edusphere is selected, show all content in that section
            if (mainSection) {
                mainSection.querySelectorAll('.content').forEach(section => {
                    section.style.display = 'flex';
                });
            }
        }
    }

    // Event listeners
    branchSelect.addEventListener("change", function() {
        populateEduspheres();
        filterContent();
    });

    edusphereSelect.addEventListener("change", function() {
        populateEvents();
        filterContent();
    });

    eventSelect.addEventListener("change", filterContent);

    // Initialize on page load
    initDropdowns();
});