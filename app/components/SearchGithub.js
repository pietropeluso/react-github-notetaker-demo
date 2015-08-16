import React from 'react';

class SearchGithub extends React.Component {
  handleSubmit() {
    var router = this.context.router;
    var username = this.refs.username.getDOMNode().value;
    this.refs.username.getDOMNode().value = "";
    router.transitionTo('profile', {username : username});
  }
  render() {
    return (
      <div className="col-sm-12">
        <form onClick={this.handleSubmit.bind(this)}>
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
};

SearchGithub.contextTypes = {
  router: React.PropTypes.func.isRequired
};

export default SearchGithub;