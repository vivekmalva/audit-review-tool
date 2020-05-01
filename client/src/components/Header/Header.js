import React from "react";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



const Header = (props) => {
  console.log(props.auth)
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return <div className="nav-item"><a className="nav-link" href="/auth/google">Login With Google</a></div>;
      default:
        return <div className="nav-item"><a className="nav-link" href="/api/logout">Logout</a></div>;
    }
  }
  return (
    <nav>
      <div className="navbar navbar-expand-lg navbar-light bg-light justify-content-between">
        <Link to={props.auth ? '/audit' : '/'} className="left navbar-brand">
          Audit Review Tool
      </Link>
        <div className="justify-content-end">
          {renderContent()}
        </div>
      </div>
    </nav>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
