# Backstory Seeds
A simple React.js CRUD app that allows users to collaborate and share seeds of ideas for developed character backstories.

### Technologies Used
- React.js/JSX
- CSS/Flexbox
- React-Router
- Axios/AJAX
- Postman
- Firebase

### Planning Process
One thing at a time, I'm a believer in TDD. I wanted to make sure that react-router was working so I planned on some static pages to get content on the screen – it didn't have to look pretty. Once that was complete, I started with the CRUD portion of the app and prioritized them: 
- 1) C – Create. If my axios POST wouldn't work, there would be no data to display. 
- 2) R – Read. I made sure my GET call was not only functional and pulling within componentDidMount, but whenever a new post was made (and later during each additional AJAX call). The listed data was formatted within a div element to handle overflow, in preparation for a larger future database – with UX in mind, I wouldn't want users to have to scroll so far up to get back to the menu.
- 3) D – Delete. I prioritized this before any editing features as I anticipated a more convoluted path towards completion of editing. DELETE was a simple addition and I took some time during this phase to further style and polish the page. 
- 4) U – Update. I aimed to have an inline input form and, having never created a PATCH call to a database, I saved this for last. 

### Code Example
```javascript
render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Match exactly pattern="/" component={Home} />
          <Match exactly pattern="/resources" component={Resources}  />
          <Match pattern="/seeds/bulletin-board"
            component={() =>
              <BulletinBoard
                seedsObj={this.state.seeds}
                onDeleteSeed={this.deleteSeed}
                onEditSeed={this.editSeed}
              />}
          />
          <Match pattern="/seeds/add-seed" component={() =>
            <AddSeed
              seedsObj={this.state.seeds}
              onAddSeed={this.addSeed}
            />
            }
          />
        </div>
      </BrowserRouter>
    );
  }
```

### Complications/Future Improvements
Complications/Challenges/Handicaps: 
- My first official React.js app in addition to my first CRUD app. The whole project was a delightful challenge. 
- Edit button to output edit form and sending a PATCH.

Future Improvements: 
- User logins with personalized lists
- User commenting and forking public seeds to their own gardens
- Storyboarding and character development timeline
- Proper 404 displays with React-Router's Link method.

##### Initial wireframing in composition notebook!
![Initial Wireframe](public/wireframe-1.jpg)
![Initial Wireframe 2](public/wireframe-2.jpg)
