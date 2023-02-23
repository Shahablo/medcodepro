# Test Plan

> *This is the template for your test plan. The parts in italics are concise explanations of what should go in the corresponding sections and should not appear in the final document.*
> **Author**: \<person or team name\>

**Author**: Nabil TADILI (Team 038)

## 1 Testing Strategy

### 1.1 Overall strategy

> *This section should provide details about your unit-, integration-, system-, and regression-testing strategies. In particular, it should discuss which activities you will perform as part of your testing process, and who will perform such activities.*

### 1.2 Test Selection

> *Here you should discuss how you are going to select your test cases, that is, which black-box and/or white-box techniques you will use. If you plan to use different techniques at different testing levels (e.g., unit and system), you should clarify that.*

Test case selection will be done using both black-box and white-box techniques.
- **Back-box** techniques will be used to perform tests about the functionality of the software based from the user's perspective. So this will ensure that the system meets the functional requirements (aka **Functional Testing**). 
  1. **Equivalence partitioning:** This technique will be used to reduce the number of test cases required by classifying input data into groups that should return similar results
  2. **Exploratory testing:** The goal with this is to explore the software without any predifined plan, using my intuition to uncover defects that might slip through the other techniques
  3. **Boundary value analysis:** The goal is to identify defects that might occur when the user enters unusual data that might be exceed the boundaries of what the system is capable of handling.
- **White-box** techniques will be used to perform tests by examining the inner logic of the software to be tested. It will be used to for ***unit testing**, ensuring that the system components are behaving correctly but also for **integration testing** to verify that these components are integrated correctly

### 1.3 Adequacy Criterion

> *Define how you are going to assess the quality of your test cases. Typically, this involves some form of functional or structural coverage. If you plan to use different techniques at different testing levels (e.g., unit and system), you should clarify that.*

### 1.4 Bug Tracking

> *Describe how bugs and enhancement requests will be tracked.*

Bugs and enhancement requests will be tracked using **Github Issues**.

### 1.5 Technology

> *Describe any testing technology you intend to use or build (e.g., JUnit, Selenium).*

The testing technologies chosen for this project are:
- Espresso: A popular testing framework for Android apps that helps developers write concise and reliable UI Tests
  - UI/Functional Testing
  - Integration Testing
- 

## 2 Test Cases

> *This section should be the core of this document. You should provide a table of test cases, one per row. For each test case, the table should provide its purpose, the steps necessary to perform the test, the expected result, the actual result (to be filled later), pass/fail information (to be filled later), and any additional information you think is relevant.*