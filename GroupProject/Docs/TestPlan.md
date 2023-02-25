# Test Plan

**Author**: Nabil TADILI (Team 038)

## 1 Testing Strategy

### 1.1 Overall strategy

### 1.2 Test Selection

Test case selection will be done using both black-box and white-box techniques.

- **Back-box** techniques will be used to perform tests about the functionality of the software based from the user's perspective. So this will ensure that the system meets the functional requirements (aka **UI/Functional Testing**).
  1. **Equivalence partitioning:** This technique will be used to reduce the number of test cases required by classifying input data into groups that should return similar results
  2. **Exploratory testing:** The goal with this is to explore the software without any predefined plan, using my intuition to uncover defects that might slip through the other techniques
  3. **Boundary value analysis:** The goal is to identify defects that might occur when the user enters unusual data that might be exceed the boundaries of what the system is capable of handling.
- **White-box** techniques will be used to perform tests by examining the inner logic of the software to be tested. It will be used to for **unit testing**, ensuring that the system components are behaving correctly but also for **integration testing** to verify that these components are integrated correctly

### 1.3 Adequacy Criterion

We will be assessing the quality of our test cases using different techniques at different testing levels:

- **Functional Testing:** To ensure that the app functionality and features are working as expected. For this we are going to use two types of test cases:
  - **UI/Functional testing:** Which involves testing the user interface of the application, making sure that it provides the necessary functionality to the user
    - **Assessment Criteria:**
      - **Coverage** = all screens, making sure cover all the features of the app
      - **Usability** = Making sure that test cases are user-friendly and easy to understand
      - **Criticality** = Making sure that test cases cover the most critical features
</br>
  - **Integration testing:** Which will test the interaction between between the different components of the application
    - **Assessment Criteria:**
      - **Coverage** >= 50% (only critical component interaction)
      - **Efficiency** < 20 minutes (execution time)
      - **Effectiveness** = Counting the number of defects detected by the testing
</br>
  - **System testing:** Which will test the application as a whole (from end to end)
    - **Assessment Criteria:**
      - **Effectiveness** = Counting the number of defects detected by the testing
</br>
- **Structural Testing:** To ensure the app code is free of bugs and performing as expected. For this we are going to use:
  - **Unit testing:** To ensure that each code function (in isolation) are free of defects
    - **Assessment Criteria:**
      - **Code Coverage** >= 80%
      - **Efficiency** < 2 minutes (execution time)
      - **Effectiveness** = Counting the number of defects detected by the testing

### 1.4 Bug Tracking

Bugs and enhancement requests will be tracked using **Github Issues**.

### 1.5 Technology

The testing technologies chosen for this project are:

- **Espresso:** A popular testing framework for Android apps that helps developers write concise and reliable UI Tests
  - UI/Functional Testing ***(will be done using Espresso + Manual Inspection)***
  - Integration Testing
  - System Testing ***(will be done using Espresso + Manual Inspection)***
- **JUnit:** JUnit is a unit testing framework for the Java programming language.
  - Unit testing

## 2 Test Cases

Emojis to  be used in Pass/Fail column:

- Not yet tested = :grey_question:
- Failed Test = :exclamation:
- Passed Test = :white_check_mark:

### **+ UI / Functional Test Cases:**

|Tester|Test Id|Test Case|Purpose|Pre-conditions|Steps|Expected Result|Actual Result|Pass/Fail|Remarks|
|:----|:----|:----|:----|:----|:----|:----|:----|:----:|:----|
|***Automated (ntadili3)***|**TF001**|Main menu displayed on app startup|Verify that the app displays the main menu on startup|App is installed|Start the app|Main menu is displayed with options to enter/edit current job details, enter job offers, adjust comparison settings, or compare job offers (disabled if no job offers were entered yet)| |:grey_question:|-|
|***Automated (ntadili3)***|**TF002**|Enter current job details|Verify that the user can enter or edit all details of their current job|-|Enter/edit current job details from the main menu, enter all details, and click save|Details are saved and user is returned to main menu| |:grey_question:|-|
|***Automated (ntadili3)***|**TF003**|Cancel current job details|Verify that the user can cancel and exit without saving|Enter/edit current job details from the main menu, enter some details, and click cancel|User is returned to main menu without any changes being saved| | |:grey_question:|-|
|***Automated (ntadili3)***|**TF004**|Enter job offers|Verify that the user can enter details of a job offer|-|Click enter job offers from the main menu, enter all details, and click save|Offer details are saved and user is given options to enter another offer, return to main menu, or compare offer (if saved) with current job details (if present)| |:grey_question:|-|
|***Automated (ntadili3)***|**TF005**|Cancel job offer|Verify that the user can cancel and exit without saving|Current job details have been entered|Click enter job offers from the main menu, enter some details, and click cancel|User is returned to main menu without any changes being saved| |:grey_question:|-|
|***Manual (ssiddique6)***|**TF006**|Adjust comparison settings|Verify that the user can assign integer weights to job offer factors|-|Choose option to adjust comparison settings from the main menu, assign weights to factors, and click save|Weights are saved and used for job offer comparisons| |:grey_question:|-|
|***Manual (ssiddique6)***|**TF007**|Compare job offers|Verify that the user can compare job offers using weighted scoring system|At least two jobs (current + new or 2 new) entered and saved|Choose option to compare job offers from the main menu, select two offers, and trigger comparison|A table is displayed comparing the two offers using weighted scoring system, and user is given options to perform another comparison or return to main menu| |:grey_question:|-|
|***Manual (ssiddique6)***|**TF008**|Rank job offers|Verify that job offers are ranked from best to worst based on weighted scoring system|At least two jobs (current + new or 2 new) entered and saved|Choose option to compare job offers from the main menu, select two offers, and trigger comparison|A list of job offers is displayed, ranked from best to worst based on weighted scoring system, with the current job (if present) clearly indicated| |:grey_question:|-|
|***Manual (ssiddique6)***|**TF009**|Responsive UI|Verify that the user interface is intuitive and responsive|-|Perform various actions in the app and observe the UI|UI responds quickly and correctly to user input, with no lag or crashes| |:grey_question:|-|

### **+ Unit Test Cases:**

|Tester|Test Id|Test Case|Purpose|Pre-conditions|Steps|Expected Result|Actual Result|Pass/Fail|Remarks|
|:----|:----|:----|:----|:----|:----|:----|:----|:----:|:----|
|***Automated (ntadili3)***|**TU001**|Save current job to database|Verify that the user's current job details are saved to the database|-|Enter all details of current job and save|Job details are saved to the database and can be retrieved later| |:grey_question:|-|
|***Automated (ntadili3)***|**TU002**|Enter new job offer to database|Verify that the user's job offer details are saved to the database|-|Enter all details of a job offer and save|Offer details are saved to the database and can be retrieved later| |:grey_question:|-|
|***Automated (ntadili3)***|**TU003**|Retrieve current job from database|Verify that the user's current job details can be retrieved from the database|Current job details are saved to database|Retrieve current job details from the database|The details are retrieved correctly| |:grey_question:|-|
|***Automated (ntadili3)***|**TU004**|Retrieve job offer from database|Verify that the user's job offer details can be retrieved from the database|Job offer details are saved to database|Retrieve job offer details from the database|The details are retrieved correctly| |:grey_question:|-|
|***Automated (ntadili3)***|**TU005**|Update current job in database|Verify that the user's current saved job details can be updated in the database|Current job details are saved to database|Edit current job, make changes, and save|The details are updated in the database and can be retrieved later| |:grey_question:|-|
|***Automated (ntadili3)***|**TU006**|Retrieve list of saved job offers from database|Verify that a list of saved job offers can be retrieved from the database|Job offers are saved to database|Retrieve all job offers|A list of saved job offers is retrieved from the database and can be used for comparisons| |:grey_question:|-|
|***Automated (ntadili3)***|**TU007**|Compute score for a job|Making sure that the scoring system computes the correct score for a job|Job details are retrieved from the database|Compute the score for the job using the weighted scoring system|The score is computed correctly based on the factors and weights assigned| |:grey_question:|-|
|***Automated (ntadili3)***|**TU008**|Relocation stipend validation #1|Verify that the relocation stipend is accepted when valid|-|Enter a relocation stipend value within the range of [0 - 25,000]|The value is valid and can be saved to the database| |:grey_question:|-|
|***Automated (ntadili3)***|**TU009**|Relocation stipend validation #2|Verify that the relocation stipend is NOT accepted when not valid|-|Enter a relocation stipend value outside the range of [0 - 25,000]|The value is not valid and can't be saved to the database| |:grey_question:|-|
|***Automated (ntadili3)***|**TU010**|Personal choice holidays validation #1|Verify that the personal choice holidays entered is accepted when valid|-|Enter a personal choice holidays value within the range of [0 - 20]|The value is valid and can be saved to the database| |:grey_question:|-|
|***Automated (ntadili3)***|**TU011**|Personal choice holidays validation #2|Verify that the personal choice holidays is NOT accepted when not valid|-|Enter a personal choice holidays value outside the range of [0 - 20]|The value is not valid and can't be saved to the database| |:grey_question:|-|

### **+ Integration Test Cases:**

|Tester|Test Id|Test Case|Purpose|Pre-conditions|Steps|Expected Result|Actual Result|Pass/Fail|Remarks|
|:----|:----|:----|:----|:----|:----|:----|:----|:----:|:----|
|***Automated (ntadili3)***|**TI001**|Compare job offers|Verify that job offers are compared using weighted scoring system|Current job details and at least two job offers are saved|Choose option to compare job offers from the main menu, select two offers, and trigger comparison|A table is displayed comparing the two offers using weighted scoring system, and user is given options to perform another comparison or return to main menu| |:grey_question:|-|
|***Automated (ntadili3)***|**TI002**|Add jobs and rank them|Verify that job offers are ranked from best to worst based on weighted scoring system|-|Enter current job details and 2 job offers then display the list of the saved jobs ranked|A list of job offers is displayed, ranked from best to worst based on weighted scoring system, with the current job clearly indicated| |:grey_question:|-|
|***Automated (ntadili3)***|**TI003**|Cancel current job edit|Verify that the user can cancel and exit without saving the current job|Current job existing|Edit current job offers from the main menu, enter some details, and click cancel|The current job details were not saved and are that the saved value as equal to the old values| |:grey_question:|-|

### **+ System Test Cases:**

|Tester|Test Id|Test Case|Purpose|Pre-conditions|Steps|Expected Result|Actual Result|Pass/Fail|Remarks|
|:----|:----|:----|:----|:----|:----|:----|:----|:----:|:----|
|***Manual (ssiddique6)***|**TS001**|App startup|Verify that the app starts up correctly|-|Install the app and start it|The app displays the main menu with all options| |:grey_question:|-|
|***Manual (ssiddique6)***|**TS002**|Storage persistence|Verify that the app save the previously entered information|-|Having already entered current Job, at least 2 job offers and changing the comparison settings|The app remembers all the previously saved data about current job, job offers and comparison settings| |:grey_question:|-|
|***Manual (ssiddique6)***|**TS003**|Exploratory Testing|Uncover defects that might slip through the other testing techniques|-|Having already entered current Job, at least 2 job offers and changing the comparison settings|The app behaves correctly and no defects or missing features are present| |:grey_question:|-|
|***Automated (ntadili3)***|**TS004**|Full process|Verify that the user can complete all the necessary steps he needs from the app|-|Enter the current job, then edit the current job and save it, enter 3 job offers, go back to main menu and click compare job offers, select current job with one of the 3 job offers, then go back to the main menu|All screens and data is shown properly, and a table is displayed comparing the current job with the selected job, then being able to go to the main menu| |:grey_question:|-|
