# AutomationAssesmentIRIS
# How to Clone and Run the Project
1. Open Git Bash or Command Prompt at folder location.
2. Run Command **git clone https://github.com/kommuswamy/AutomationAssesmentIRIS.git**
3. Run **npm install** to install the required node modules (Which mentioned in package.json)
4. Run the Command in project location where package.json presents, **npm run test**
5. if you want to execute without package.json , then run below command **npx wdio run wdio.conf.js**
6. after Completion of execution run the below command at Target location to see the Allure Report **allure generate allure-results && allure open**

# About the Problem Statement
1. When we try to Navigate the URL **https://osa-web.t-cg.co.uk/qatest** we'll see that the same page is displayed but it is
    broken, and no news appears beacause of there is no such deep link exist in the page (Wrong deep link URL).
2. if we want to see the News page with the deep link URL we should use URL **https://osa-web.t-cg.co.uk/news** with news.
3. once after running code you will couple of issue in news page, you mentioned only one news will appear so i wrote code to verify only one news but the page is have three news section (June, July and Nov)
So 2 it blocks will fail with expected 1 to be 3 message.
