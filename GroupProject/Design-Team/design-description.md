## Design Description

1. > When the app is started, the user is presented with the main menu, which allows the user to (1) enter or edit current job details, (2) enter job offers, (3) adjust the comparison settings, or (4) compare job offers (disabled if no job offers were entered yet).

    **The Main Menu doesn't relate to a specific class to be modeled in the UML class diagram because it is tied to user interaction within the app. However we will model the class JobComparer to be the main entry point of the application and will tie everything together. This class implements the methods (1) (2) (3) and (4)**
    ***
    **(4) is modeled by adding a field canCompare, it will be set to true if there are jobOffers present, otherwise it's set to false and represented as disabled on the GUI.**
***

2. > When choosing to enter current job details, a user will:
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

    **This requirement is satisfied by creating a CurrentJob class, a Job Class, and a Location class.**
    ***
    **The CurrentJob class is part of the JobComparer so it is represented as composition (1 to 0..1). The saveCurrentJob() function can be used to enter and save the current job details.**
    ***
    **The CurrentJob class inherits from the Job class because it's a type of Job. This will help identify later if the Job is of type CurrentJob.**
    ***
    **The Job class has a couple of fields related to it, like "Title", "Company", etc...**
    ***
    **It was decided that Location should be represented as it's own class, including the costOfLivingIndex which seems tied to it. This class is part of the Job so that's why the relationship is of type composition (of 1)**
    ***
    **The return to main menu doesn't have any impact on the model because it will be handled by the GUI so it is ignored**

***

3. > When choosing to enter job offers, a user will:
    a. Be shown a user interface to enter all the details of the offer, which are the same ones listed above for the current job.
    b. Be able to either save the job offer details or cancel.
    c. Be able to (1) enter another offer, (2) return to the main menu, or (3) compare the offer (if they saved it) with the current job details (if present).

    **This requirement is satisfied by the Job class itself. JobComparer is composed of 0..\* Job objects. Entering a new job offer will be done using the addJobOffer()**
    ***
    **Point "c." will be handled by the GUI.**
    **If canCompare field is true, and currentJob is not null (meaning there is a currentJob + one or more job offers) The GUI will show a "Compare With Current Job" button that is linked to "compareTwoJobs" method.**
    - j1 parameter will be prefilled with the currentJob from the JobComparer class (prefilled, so no input required from the user)
    - j2 parameter will be linked to the newly created job offer (prefilled, so no input required from the user)

***

4. > When adjusting the comparison settings, the user can assign integer weights to:
    a. Yearly salary
    b. Yearly bonus
    c. Restricted Stock Unit Award
    d. Relocation stipend
    e. Personal Choice Holidays
    If no weights are assigned, all factors are considered equal.

    **This is represented by the ComparisonSettings class. All the fields are defaulted to 1 to consider all factors equal. This class is initialized automatically when the JobComparer is started. The ComparisonSettings class is part of the JobComparer and to adjust it the GUI will call adjustComparisonSettings(..) on the JobComparer.**

***
5. > When choosing to compare job offers, a user will:
    a. Be shown a list of job offers, displayed as Title and Company, ranked from best to worst (see below for b. details), and including the current job (if present), clearly indicated.
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

    **"a." is represented by adding a JobComparer class. This class has a scoreJob(...) method that will score jobs using the ComparisonSettings. Additionally the rankJobs() can take all jobs (including the currentJob) and return a sorted array of jobs by score using the JobScored class. The JobScored class extends the Job class and adds the isCurrentJob boolean to make it easy to handle by the GUI.**
    ***
    **"b." + "c." is represented by adding a compareTwoJobs(...) method to the JobComparer class. This method takes two Jobs (Either 2 Job Offers or 1 Job Offer + Current Job) and returns 2 JobScored objects. JobScored is expanded with additional fields like yearlySalaryAdjusted and yearlyBonusAdjusted, which are calculated by the JobComparer.**
    ***
    **"d." will be managed by the GUI.
    The GUI can handle this by displaying a "Perform another comparison" button that will trigger another comparison like this one.
    The GUI will also display a "go back to main menu" to allow the user to go back to main menu.**

***
6. > When ranking jobs, a job’s score is computed as the weighted sum of:
    AYS + AYB + (RSUA / 4) + RELO + (PCH *AYS / 260)
    where:
    AYS = yearly salary adjusted for cost of living
    AYB = yearly bonus adjusted for cost of living
    RSU = restricted stock unit award
    RELO = relocation stipend
    PCH = personal choice holidays
    For example, if the weights are 2 for the yearly salary, 2 for relocation stipend and 1 for all other factors, the score would be computed as:
    2/7*AYS + 1/7*AYB + 1/7*(RSUA / 4) + 2/7*RELO + 1/7*(PCH* AYS / 260)

    **These are implementation details that will be handled by JobComparer methods.**
    **More specifically, the scoreJob() will implement the algorithm and will return a value that can be used by compareTwoJobs() and rankJobs() methods.**

***
7. > The user interface must be intuitive and responsive.

    **Interface related requirements are purely linked to the GUI, so it doesn't have any impact on the class diagram.**

***
8. > For simplicity, you may assume there is a single system running the app (no communication or saving between devices is necessary).

    **This requirement might mean that we don't have to model a User class. Besides this, this shouldn't impact the UML class diagram, this is because "where" and "how" the system is running / infrastructure has no impact on the classes or their relationships**
