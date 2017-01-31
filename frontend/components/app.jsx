import React from 'react';
import Material from 'material-ui/styles/MuiThemeProvider';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

const App = (props) => {
  return (
    <Material muiTheme={getMuiTheme(darkBaseTheme)}>
      <div>
        <div>Hello</div>
      </div>
    </Material>
  );
};

export default App;
