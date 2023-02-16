* Design Description


1. When the app is started, the user is presented with the main menu, which allows the user to (1) enter or edit current job details, (2) enter job offers, (3) adjust the comparison settings, or (4) compare job offers (disabled if no job offers were entered yet):

```
I added the entrypoint Class MainMenu which has four methods enterCurrentJobDetails() to enter or edit the current job details, enterJobOffers() to enter the details of Job Offers, adjustComparisonSettings() to update the Comparison settings, compareJobOffers() to compare the Job offers. Additional classes that I realize at this point are: “CurrentJob”, “JobOffer”, “ComparisonSetting”, “CompareJob”
```

2. When choosing to enter current job details, a user will:
   a. Be shown a user interface to enter (if it is the first time) or edit all the details of their current job, which consist of:
      i. Title
      ii. Company
      iii. Location (entered as city and state)
      iv. Cost of living in the location (expressed as an index)
      v. Yearly salary
      vi. Yearly bonus
      vii. Restricted Stock Unit Award (expressed as a lump sum vested over 4 years)
      viii. Relocation stipend (A single value from $0 to $25,000)
      ix. Personal Choice Holidays (A single overall number of days from 0 to 20)
   b. Be able to either save the job details or cancel and exit without saving, returning in both cases to the main menu.

```
I added the Class CurrentJob which has all the attributes mentioned in the point ‘2.a’ and the methods save() to save the current job details, cancel() & showMainMenu() to return back to Main Menu. The cancel() method does not save the changes into the current job details.
```

3. When choosing to enter job offers, a user will:
   a. Be shown a user interface to enter all the details of the offer, which are the same ones listed above for the current job.
   b. Be able to either save the job offer details or cancel.
   c. Be able to (1) enter another offer, (2) return to the main menu, or (3) compare the offer (if they saved it) with the current job details (if present).

```
I added the Class JobOffer which has all the attributes mentioned in the point ‘2.a’ and the methods save() to save the entered job offer, cancel() & showMainMenu() to return back to Main Menu. The cancel() method does not save the changes into the current job details. Additionally there are two more methods, compareJobOffer() to compare the job offer with current job, enterAnotherOffer() to enter the details of new Job offer.

I realised the CurrentJob and JobOffer classes can be generalised into a single Job class which has all the attributes from ‘2.a’ and the methods save(), cancel() & showMainMenu(). These common functionalities and attributes are moved from CurrentJob and JobOffer classes to the Job class and the CurrentJob and JobOffer are related to Job class via is-a relationship.
```

4. When adjusting the comparison settings, the user can assign integer weights to:
  i. Yearly salary
  ii. Yearly bonus
  iii. Restricted Stock Unit Award 
  iv. Relocation stipend 
  v. Personal Choice Holidays 
  If no weights are assigned, all factors are considered equal.

```
I have added the method assignWeights() to assign the integer weight to the above mentioned properties.These weights are stored in attribute Map weights, which will be returned using the method getWeights(). 
```

5. When choosing to compare job offers, a user will:
   a.Be shown a list of job offers, displayed as Title and Company, ranked from best to worst (see below for details), and including the current job (if present), clearly indicated.
   b. Select two jobs to compare and trigger the comparison.
   c. Be shown a table comparing the two jobs, displaying, for each job:
      i. Title
     ii. Company
    iii. Location 
     iv. Yearly salary adjusted for cost of living
      v. Yearly bonus adjusted for cost of living
     vi. Restricted Stock Unit Award 
    vii. Relocation stipend 
   viii. Personal Choice Holidays 
   d. Be offered to perform another comparison or go back to the main menu.

```
I have added the method listJobs() that lists the Job offers along with current job in order from best to worst rank, and the method selectAndCompareJob() that allows to select any two jobs and displays the table with comparison b/w the selected jobs. Also, added the method to performAnotherComparison() and showMainMenu().
```


6. When ranking jobs, a job’s score is computed as the weighted sum of:

AYS + AYB + (RSUA / 4) + RELO + (PCH * AYS / 260)

where:
AYS = yearly salary adjusted for cost of living
AYB = yearly bonus adjusted for cost of living
RSU = restricted stock unit award
RELO = relocation stipend
PCH = personal choice holidays



For example, if the weights are 2 for the yearly salary, 2 for relocation stipend and 1 for all other factors, the score would be computed as:

2/7 * AYS + 1/7 * AYB + 1/7 * (RSUA / 4) + 2/7 * RELO + 1/7 * (PCH * AYS / 260)

```
For this I added the getRank() method in the Job class.
```

7. The user interface must be intuitive and responsive.
8. For simplicity, you may assume there is a single system running the app (no communication or saving between devices is necessary).

