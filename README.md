# TODO:

1. setup DB for child enrollment data
   - This is the data when you click "Enroll Child" on the home page
        * The enroll child button directs you to complete a form. The form is based off of this "https://www.odjfs.state.oh.us/forms/num/JFS01234/pdf/"
   - checkout src/components/ChildEnrollmentForm
   - Add a "date completed" attribute to the form in the database
   - Make certain fields from the form required, such as first/last name, address, phone number, ... etc. You can decide this
   - Also, to make things easier when complete the second page "Parents", when it asks for an address they should be allowed to select "same as child"
   - Email and text a reminder to the parent 30 days before one year has elapsed from the time the enrollment form was completed
   - adjust the styling of the enrollment form so that each page is consistent as you progess through the form (ie the same styling for all pages)
     
2. Add "Child Medical" form similar to how "Enroll Child" is
   - The form should be based off of this document https://www.odjfs.state.oh.us/forms/num/JFS%2001305/pdf/
   - It should contain all the input fields the document contains
   - setup DB for it
   - Email and text a reminder to the parent 30 days before one year has elapsed from the time the medical form was completed
   - Add a "date completed" attribute to the form in the database
  
3. Add "Infant Basic" form similar to how the other forms are
   - The form should be based off of this document https://care4kidswooster.com/pdfs/Infant%20Only%20Forms/JFS-01218%20Basic%20Infant%20Information.pdf
   - It should contain all the input fields the document contains
   - setup DB for it
   - Email and text a reminder to the parent 30 days before THREE months has elapsed from the time the medical form was completed
   - Add a "date completed" attribute to the form in the database
     
4. Adjust home page data to be dynamic
   - Current (Infant, Toddler, Preschool, and School Age) counts are hard coded
   - You determine this based on the database using the children ages
   - infants = birth to 18 months
   - toddlers = 18 months to 3 years
   - preschool = 3 years to 5 years
   - school age = 5 years +
   - Add a "Reminders" box at the top left, that we will contain reminders but can be blank for now. It should be scrollable as there might be many reminders
   - The reminders should be when the three forms above "Child Enrollment, Child Medical, Infant Basic form" are about to expire. Similar to when you email/text the parents
   - Style the page and use similar styling on other pages
     
5. Children tab on the navbar should list all the children
   - They should be grouped by (Infant, Toddler, Preschool, and School Age)
   - You should list key details about each child, like their First/Last name, Age, Parent
   - Clicking on any child should send you to a summary page containing their three forms
     
6. Parent tab on the navbar should list all the parents

   - You can decide what to present on this page. I'm guessing we should list the kids under each parent?

7. Complete the "Daycare Center" tab on the navbar

   - This page should just contain all reminders

8. Have a login system
   - There should be two views (Admin and Parent)
   - Admin should be similar to the current view
   - Parent view should contain the following
     - View all their kids (medical, infant basic, enrollment form)
     - Have the ability to enroll a child
     - View the daycare centers email and phone

9. Design/Style the website
    - Current the UI is very basic, please make it look better. You have full freedom to design as you wish

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
