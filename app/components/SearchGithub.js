var React = require('react');
var Router = require('react-router');

var SearchGithub = React.createClass({
  mixins: [Router.Navigation],
  handleSubmit: function() {
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = "";
    this.transitionTo('profile', {username : username});
  },
  render: function() {
    return (
      <div className="col-sm-12">
        <form onClick={this.handleSubmit}>
          <div className="form-group col-sm-7">
            <input type="text" className="form-control" ref="username" />
          </div>
          <div className="form-group col-sm-5">
            <button className="btn btn-block btn-primary" type="submit">Search</button>
          </div>
        </form>
      </div>
    )
  }
});

module.exports = SearchGithub;