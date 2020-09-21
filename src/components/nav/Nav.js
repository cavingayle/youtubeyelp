import React, { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { setUser, logoutUser } from "../redux/reducer";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

const Nav = (props) => {
  useEffect(() => {
    props.setUser();
  }, []);

  const logout = () => {
    axios
      .delete("/auth/logout")
      .then((res) => {
        props.logoutUser();
        props.history.push("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="nav-main">
      This is the Nav Component
    </div>
  );
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps, { logoutUser, setUser })(withRouter(Nav));
