## 1. When the app is started, the user is presented with the main menu, which allows the user to (1) enter or edit current job details, (2) enter job offers, (3) adjust the comparison settings, or (4) compare job offers (disabled if no job offers were entered yet).

The _MainMenu_ class is the entry point to the Job Comparison system. The _MainMenu_ contains methods that are capable of entering current job details (_enterJobDetails()_), editing current job details (_editJobDetails()_), entering job offers (_enterJobOffers()_), adjusting comparison settings (_adjustComparisonSettings()_), and comparing job offers (_compare()_).

## 2. When choosing to enter current job details, a user will:
### a. Be shown a user interface to enter (if it is the first time) or edit all the details of their current job, which consist of:
#### i. Title
#### ii. Company
#### iii. Location (entered as city and state)
#### iv. Cost of living in the location (expressed as an index)
#### v. Yearly salary
#### vi. Yearly bonus
#### vii. Restricted Stock Unit Award (expressed as a lump sum vested over 4 years)
#### viii. Relocation stipend (A single value from $0 to $25,000)
#### ix. Personal Choice Holidays (A single overall number of days from 0 to 20)

_CurrentJobDetails_ is a subclass of _JobDetails_ that has attributes _Title_, _Company_, _Location_, _CostOfLivingIndex_, _YearlySalary_, _YearlyBonus_, _RestrictedStockUnitAward_, _RelocationStipend_, and _PersonalChoiceHolidays_. These attributes are entered by the _enterJobDetails()_ method, after prompts are handled within the GUI.

### b. Be able to either save the job details or cancel and exit without saving, returning in both cases to the main menu.

The _CurrentJobDetails_ class has methods _save()_ to save the job details, _cancel()_ to discard all changes, and _returnToMainMenu()_ to return to the main menu after saving or discarding the job details that have been inputted.

## 3. When choosing to enter job offers, a user will:
### a. Be shown a user interface to enter all the details of the offer, which are the same ones listed above for the current job.

_JobOfferDetails_ is a subclass of _JobDetails_ that has attributes _Title_, _Company_, _Location_, _CostOfLivingIndex_, _YearlySalary_, _YearlyBonus_, _RestrictedStockUnitAward_, _RelocationStipend_, and _PersonalChoiceHolidays_. These attributes are entered by the _enterJobOffers()_ method, after prompts are handled within the GUI.

### b. Be able to either save the job offer details or cancel.

The _JobOfferDetails_ class has methods _save()_ to save the job offer details, and _cancel()_ to discard all changes.

### c. Be able to (1) enter another offer, (2) return to the main menu, or (3) compare the offer (if they saved it) with the current job details (if present).

The _JobOfferDetails_ class has methods _enterJobOffers()_ to enter job offer details, _returnToMainMenu() to return to Main Menu, and _compare()_ to compare the inputted job offer details to the current job details. The _JobOffersDetails_ class has a relationship to the _ComparisonSettings_ class as the attributes within the _ComparisonSettings_ class is used by the _compare()_ method within _JobOfferDetails_ class. There could be multiple instances of the _JobOfferDetails_ class and there could also be multiple instances of the _ComparisonSettings_ class as the user can input multiple job offers and can input multiple comparison settings. These methods are performed after prompts are handled within the GUI.

## 4. When adjusting the comparison settings, the user can assign integer weights to:
### a. Yearly salary
### b. Yearly bonus
### c. Restricted Stock Unit Award 
### d. Relocation stipend 
### e. Personal Choice Holidays 

To realize this requirement, within _ComparisonSettings_ class, I added _YearlySalaryWeight_ for the integer weight of the _YearlySalary_ attribute, _YearlyBonusWeight_ for the integer weight of the _YearlyBonus_ attribute, _RestrictedStockUnitAwardWeight_ for the integer weight of _RestrictedStockUnitAward_, _RelocationStipendWeight_ for the _RelocationStipend_ attribute, and _PersonalChoiceHolidaysWeight_ for the _PersonalChoiceHolidays_ attribute. These values are entered by the adjustComparisonSettings() method, after prompts are handled within the GUI.

## 5. When choosing to compare job offers, a user will:
### a. Be shown a list of job offers, displayed as Title and Company, ranked from best to worst (see below for details), and including the current job (if present), clearly indicated.

The class _JobOffersList_ is a comprehensive list that lists all the details of current job, if apllicable, and job offers entered, if applicable. There could be multiple instances of _JobDetails_ but there could only be one _JobOffersList_ class. 
<br>
<br>
The class _JobOffersList_ has method _rankJobs()_ that outputs an integer _JobRank_ for each job's rank. Class _JobOffersList_ cannot exist without the presence of class _JobDetails_, but class _JobDetails_ can exist without the presence of class _JobOffersList_; therefore, it was considered to be an aggregate class. The _JobOffersList_ class is shown by _showJobOffersList()_ method, after prompts are handled within the GUI.

The indication of the current job versus a job offer will be handled through the GUI.

### b. Select two jobs to compare and trigger the comparison.

Within _JobOffersList_ class, there is a method _selectJobs()_ to select the two jobs needed for the comparison. _selectJobs()_ method will ensure that two jobs were selected. _selectJobs()_ works with compare() which will trigger the comparison once the required selection has been completed. The _JobOffersList_ class has a relationship to the _ComparisonSettings_ class as the attributes within the _ComparisonSettings_ class is used by the _compare()_ method within _JobOffersList_ class. There are multiple possible instances of _ComparisonSettings_ class that the user can input as they can change the weights if desired, but there could only be one _JobOffersList_ class.

### c. Be shown a table comparing the two jobs, displaying, for each job:
#### i. Title
#### ii. Company
#### iii. Location 
#### iv. Yearly salary adjusted for cost of living
#### v. Yearly bonus adjusted for cost of living
#### vi. Restricted Stock Unit Award 
#### vii. Relocation stipend 
#### viii. Personal Choice Holidays 

Within the class _JobOffersList_, the _compare()_ method will work with the showComparisonTable() method which will show the results of the _compare()_ method.

### d.Be offered to perform another comparison or go back to the main menu.

Within the _JobOffersList()_ class, there is a _reset()_ method which resets the current selections for the comparison, allowing another comparison. There is also a returnToMainMenu() method that allows the user to go back to the Main Menu.

## 6. When ranking jobs, a job’s score is computed as the weighted sum of: AYS + AYB + (RSUA / 4) + RELO + (PCH * AYS / 260)
### where:
### AYS = yearly salary adjusted for cost of living
### AYB = yearly bonus adjusted for cost of living
### RSU = restricted stock unit award
### RELO = relocation stipend
### PCH = personal choice holidays

The _YearlySalary_, _CostOfLivingIndex_, _YearlyBonus_, _RestrictedStockUnitAward_, _RelocationStipend_, and _PersonalChoiceHolidays_ attributes are in the _JobDetails_ class. These values are entered by one of the following methods: _enterJobDetails()_, _editJobDetails()_, and _enterJobOffers()_, after prompts are handled within the GUI.
<br>
<br>
I added a _YearlySalaryAdjusted_ attribute to the _JobDetails_ class to track the outputs of the _calculateYearlySalaryAdjusted()_ method which performs calculations on the inputs _YearlySalary_ and _CostOfLivingIndex_. I added a _YearlyBonusAdjusted_ attribute to the _JobDetails_ class to track the outputs of the _calculateYearlyBonusAdjusted()_ method which performs calculations on the inputs _YearlyBonus_ and _CostOfLivingIndex_.
<br>
<br>
There is a _calculateJobScore()_ method within _JobDetails_ class that takes _YearlySalaryAdjusted_, _YearlyBonusAdjusted_, _RestrictedStockUnitAward_, _RelocationStipend_, and _PersonalChoiceHolidays_ attributes and performs the job score calculation.

## 7. The user interface must be intuitive and responsive.

Following the instructions laid out in the assignment as well as the assignment example, this is not represented in my design, as it will be handled entirely within the GUI implementation.

## 8. For simplicity, you may assume there is a single system running the app (no communication or saving between devices is necessary).

To accommodate this requirement, there are no user inputs, no user classes and no user attributes in my design.
