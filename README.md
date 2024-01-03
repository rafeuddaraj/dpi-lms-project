<aside>
🔥 This Scoop is a beautiful Virtue learning system. Admins will add classes and take quiz assignments and tests with that class. It can be handled beautifully by students and teachers. LIMA means Listen Integrate Memorize Achievement

</aside>

### General

---

**Project timeline:** August 2023 - October 2023
**Client: DPI Web Development Instructor *Nadia Urmi***
**Project Name:** “Learning Portal”
**Vendor:** **Altrazen Team**
**Live Link:** [**LMS**](https://learning-portal-rafeuddaraj.netlify.app)

### Project Goals

---

# **Accessibility for All**

Ensure that the LMS is user-friendly and accessible to learners with diverse needs, including those with disabilities. Prioritize inclusivity in design and functionality to make education accessible to everyone.

# **Enhanced User Experience**

Create an intuitive and seamless user interface that promotes easy navigation and encourages a positive learning experience. Prioritize user feedback to continually refine and improve the platform.

# **Personalized Learning Paths**

Build a visual universe that communicates the brand’s forward thinking.

# **Comprehensive Learning Analytics**

Utilize data analytics to track and analyze learner progress, engagement, and performance. Provide educators with actionable insights to adapt their teaching strategies and enable learners to monitor their own progress effectively.

# **Integration of Multimedia Resources**

Support diverse learning styles by incorporating multimedia resources, such as videos, interactive simulations, and virtual reality experiences. Enhance the learning process with rich, engaging content that goes beyond traditional text-based materials.

# **Scalability and Flexibility**

Design the LMS to scale effortlessly and adapt to the evolving needs of educational institutions. Ensure compatibility with various devices and platforms, allowing seamless access to learning resources anytime, anywhere.

[Team Member](https://www.notion.so/1adf33741a6d4ecf8ae9efcb0bcd9467?pvs=21)

### Requirements:

---

**1. User Authentication:**
a. Implement a secure authentication system for both students and administrators.
b. Student login and registration features should be available on the index page.
c. Use "/admin" and "/admin/assignment" routes for administrator access.

**2. Student Module:**
a. Develop a student dashboard that includes sections for Videos, Assignments, Quizzes, and Assignment Marks.
b. Enable student registration and login functionalities.
c. Upon login, direct students to the Course Player page.

**3. Administrator Module:**
a. Implement admin login functionality; no registration required.
b. Admins should access the dashboard with options for managing Videos, Assignments, Quizzes, and Assignment Marks.

**4. Video Management:**
a. Create a Videos page displaying a list of previously added videos.
b. Include buttons for editing and deleting each video.
c. Implement an "Add Video" feature with a pop-up or separate page for collecting video information.

**5. Assignment Management:**
a. Display a list of assignments on the Assignment page.
b. Add an "Add Assignment" button with an interface to select a video for the assignment.
c. Consider additional fields in the assignment creation form.

**6. Quiz Management:**
a. Create a Quizzes page with a list of quizzes.
b. Implement a feature for adding quizzes, including the option to select the associated video.
c. Design the quiz input based on the data structure in the 'quizzes' table.

**7. Assignment Marking:**
a. Develop an AssignmentMark page to show assignments submitted by students.
b. Include a marking input field and a checkbox for marking completion.
c. Display the total number of assignments, pending, and marked assignments.

**8. Student Interaction:**
a. Allow students to submit assignments and quizzes.
b. Restrict students from submitting assignments or quizzes multiple times.

**9. Leaderboard:**
a. Create a leaderboard showing individual results and the highest marks.
b. Fetch data from the 'assignmentMark' and 'quizMark' tables for real-time calculation.

**10. Design Considerations:**
a. Prioritize a user-friendly and intuitive interface.
b. Ensure responsiveness for various devices.
c. Utilize proper error handling and validation mechanisms.

**11. Security and Privacy:**
a. Implement robust security measures to protect user data.
b. Ensure compliance with data protection regulations.

| EMAIL | PASSWORD | ROLE |
| --- | --- | --- |
| rafe@admin.com | lws@123456 | admin |
| akash.ahmed@learnwithsumit.com | lws@123456 | student |