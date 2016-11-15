// const list =
//   React.createElement('div', {},
//     React.createElement('h1', {}, 'My favorite ice cream flavors'),
//     React.createElement('ul', {},
//       [
//         React.createElement('li', { className: 'brown' }, 'Chocolate'),
//         React.createElement('li', { className: 'white' }, 'Vanilla'),
//         React.createElement('li', { className: 'yellow' }, 'Banana')
//       ]
//     ));
// const title = React.createElement('h1', {}, 'My First React Code')
// const paragraph =  React.createElement('p', {}, 'Writing some more HTML. Cool Stuff!')
// const container = React.createElement('div', {}, [title, paragraph])
// ReactDOM.render(
//   list,
//    document.getElementById('main')
//  );
var nameLabel = React.createElement('label', {for: ""}, "Name:")
var homeLabel = React.createElement('label', {for: ""}, "Hometown:")
var nameInput = React.createElement('input', {type: "text", name: "user[name]", value: ""})
var homeInput = React.createElement('input', {type: "text", name: "user[hometown]", value: ""})
var subInput = React.createElement('input', {type: "submit", name: "name", value: "Create User"})
var form = React.createElement('form', {className: "users", action: "/users", method: "post"}, [nameLabel, nameInput, homeLabel, homeInput, subInput])
var div = React.createElement('div', {className: "KEK", id: "idLUL"}, form)


ReactDOM.render(
  div,
  document.getElementById('main')
)

  // ReactDOM.render(
  //   button,
  //   document.getElementById('main')
  // )
