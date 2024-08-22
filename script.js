
const moreNav = document.getElementById('moreNav');
const moreSection = document.getElementById('More');
const menuItems = document.querySelectorAll('.menu-item');

moreNav.addEventListener('click', function () {
    moreSection.classList.toggle('active');
});

moreNav.addEventListener('mouseenter', function () {
    moreSection.classList.add('active');
    
});

moreNav.addEventListener('mouseleave', function () {
    setTimeout(() => {
        if (!moreSection.matches(':hover')) {
            moreSection.classList.remove('active');
        }
    }, 200); // Delay to allow time to move to the "More" section
});

moreSection.addEventListener('mouseenter', function () {
    moreSection.classList.add('active');
});

moreSection.addEventListener('mouseleave', function () {
    moreSection.classList.remove('active');
});
menuItems.forEach(item => {
    item.addEventListener('click', function () {
        moreSection.classList.remove('active');
    });
});




var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    
    pagination: {
        el: ".swiper-pagination",
              dynamicBullets: true,
              
           },
  });
  var swiper = new Swiper(".mySwipe", {
    effect: "cards",
    grabCursor: true,
  });
  
  






  document.addEventListener('DOMContentLoaded', function () {
    // Add change event to all file inputs
    document.querySelectorAll('.file-input').forEach(input => {
        input.addEventListener('change', function () {
            const container = this.closest('.custom') || this.closest('.files');
            const fileName = container.querySelector('.file-name');
            const uploadButton = container.querySelector('.upload-button');

            if (this.files.length > 0) {
                fileName.textContent = this.files[0].name;
                fileName.style.visibility = 'visible'; // Show the file name
                uploadButton.style.visibility = 'visible'; // Show the upload button
            }
        });
    });



    


    

    // Add click event to all upload buttons
    document.querySelectorAll('.upload-button').forEach(button => {
        button.addEventListener('click', function () {
            const container = this.closest('.custom') || this.closest('.files');
            const fileInput = container.querySelector('.file-input');

            if (fileInput && fileInput.files.length > 0) {
                alert('File "' + fileInput.files[0].name + '" uploaded successfully!');
                // Add your file upload logic here
            } else {
                alert('No file selected!');
            }
        });
    });
});
//   ============= Attendance ==================

function updateCircularProgress(subjectId, percentage) {
    const circle = document.getElementById(subjectId + 'Circle');
    const percentageSpan = document.getElementById(subjectId + 'Percentage');
    
    // Calculate the stroke-dasharray value based on the percentage
    const radius = 15.9155; // Radius of the circle
    const circumference = 2 * Math.PI * radius;
    const offset = circumference - (percentage / 100) * circumference;
    
    circle.style.strokeDasharray = `${circumference}, ${circumference}`;
    circle.style.strokeDashoffset = offset;
    
    // Update the percentage display
    percentageSpan.textContent = percentage + '%';
}

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    const subject = details.parentElement;

    // Toggle the visibility of the details section
    if (subject.classList.contains('active')) {
        subject.classList.remove('active');
    } else {
        // Hide all other details sections
        document.querySelectorAll('.subject').forEach(sub => sub.classList.remove('active'));
        subject.classList.add('active');
    }
}

// Example: Setting up attendance percentages
// updateCircularProgress('overall', 75);  // Set overall attendance
updateCircularProgress('dbms_theory', 91); // Set Subject 1 attendance
updateCircularProgress('dbms_lab', 88); // Set Subject 8 attendance
updateCircularProgress('os_theory', 85); // Set Subject 8 attendance
updateCircularProgress('os_lab', 95); // Set Subject 8 attendance
updateCircularProgress('opps_theory', 86);
updateCircularProgress('opps_lab', 88);
updateCircularProgress('apptitude', 90);
updateCircularProgress('soft-skill', 97);
updateCircularProgress('dm', 90);
// Repeat for each subject...



// end of attendace


function hideAll(){
    document.getElementById('show').style.display="none"
     document.getElementById('mai').style.display="none"
     document.getElementById('fees').style.display="none"
     document.getElementById('Assessment').style.display="none"
     document.getElementById('attendance').style.display="none"
     
}
function coarse(){
    hideAll();
    document.getElementById('mai').style.display="block"

}
function showHome(){
    hideAll();
    document.getElementById('show').style.display="block"
}
function showProfile(){
    hideAll();
     document.getElementById('show').style.display="block"

}
function showFee(){
    hideAll();
    document.getElementById('fees').style.display="block"
    // document.querySelector('Semester1').style.display="flex"

   
    
}
function showAssessment(){
    hideAll();
    document.getElementById('Assessment').style.display="flex"
}

function showAttendance(){
    hideAll();
    document.getElementById('attendance').style.display="block"
}
function showDay(day) {
    // Hide all schedules
    document.querySelectorAll('.slider').forEach(slider => {
        slider.style.display = 'none';
    });
    document.getElementById('dayDisplay').textContent = day;

    // Show the selected day's schedule
    const selectedDay = document.querySelector(`.${day}`);
    if (selectedDay) {
        selectedDay.style.display = 'flex';
    } else {
        console.error(`No element found with class: ${day}`);
    }

    // Reset the current slide index to 0 when switching days
    currentSlide = 0;
    const sliderContainer = selectedDay?.querySelector('.slider-container');
    if (sliderContainer) {
        sliderContainer.style.transform = `translateX(0)`;
        // Initialize the slider for the new day
        initializeSlider(sliderContainer);
    }
}

function updateDateTime() {
    const now = new Date();
    
    // Format the date and time
    const options = {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit'
    };
    const formattedDateTime = now.toLocaleDateString('en-US', options);
    
    // Set the date and time to the HTML element
    document.getElementById('currentDateTime').textContent = formattedDateTime;
}

// Update the date and time immediately
updateDateTime();

// Optional: Update the date and time every second
setInterval(updateDateTime, 1000);


function toggleProfile() {
    var image = document.getElementById('profileImage');
    var profile =document.getElementById('profile-image');
    var studentName = document.getElementById('studentName');
    var rollNo = document.getElementById('rollNo');
    var enrollmentNo = document.getElementById('enrollmentNo');
    var biometricNo = document.getElementById('biometricNo');
    var dob = document.getElementById('dob');
    var course = document.getElementById('course');
    var address = document.getElementById('address');
    var gpa = document.getElementById('gpa');

    if (image.src.includes('profile1.png')) {
        image.src = './images/girl3.png'; 
        profile.src ='./images/ritika.png'
        // New image
        studentName.textContent = "Priya Sharma";
        rollNo.textContent = "Roll No. 2301301003";
        enrollmentNo.textContent = "Enrollment No. 44013";
        biometricNo.textContent = "Biometric No. 45636";
        dob.textContent = "Date of Birth: 15/05/2002";
        course.textContent = "Course: B.Tech (IT)";
        address.textContent = "Address: Sector 15, Panipat";
        gpa.textContent = "GPA 9.05";
    } else {
        image.src = './images/profile1.png'; // Original image
        profile.src ='./images/rafeeq.png'

        studentName.textContent = "Sagar Paswan";
        rollNo.textContent = "Roll No. 2301301002";
        enrollmentNo.textContent = "Enrollment No. 44012";
        biometricNo.textContent = "Biometric No. 45635";
        dob.textContent = "Date of Birth: 06/04/2003";
        course.textContent = "Course: B.Tech (CSE)";
        address.textContent = "Address: Model Town, Panipat";
        gpa.textContent = "GPA 8.32";
    }
}







