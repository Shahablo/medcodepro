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
</br>
  - **UI/Functional testing:** Which involves testing the user interface of the application, making sure that it provides the necessary functionality to the user
    - **Assessment Criteria:**
      - **Coverage** = all screens, making sure cover all the features of the app
      - **Usability** = Making sure that test cases are user-friendly and easy to understand
</br>
  - **Integration testing:** Which will test the interaction between between the different components of the application
    - **Assessment Criteria:**
      - **Coverage** >= 50% (only critical component interaction)
      - **Efficiency** < 10 minutes (execution time)
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

- **JUnit:** JUnit is a unit testing framework for the Java programming language.
  - Unit testing

## 2 Test Cases

> *This section should be the core of this document. You should provide a table of test cases, one per row. For each test case, the table should provide its purpose, the steps necessary to perform the test, the expected result, the actual result (to be filled later), pass/fail information (to be filled later), and any additional information you think is relevant.*