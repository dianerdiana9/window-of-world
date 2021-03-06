import { Col, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { UserContext } from "../../context/userContext";
import { useContext } from "react";

export default function Navbar(props) {
  const navigate = useNavigate();

  const [state, dispatch] = useContext(UserContext);

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/");
  };

  return (
    <>
      <Col className="d-flex justify-content-start">
        <Link
          to="/list-transactions"
          className="d-flex justify-content-center mb-3"
        >
          <img
            src="/assets/icons/slooping-wow.png"
            alt="logo"
            style={{ width: "94px" }}
          />
        </Link>
      </Col>
      <Col className="d-flex justify-content-end">
        <Dropdown>
          <Dropdown.Toggle variant="link" id="dropdown-basic">
            <img
              src="/assets/images/profile.png"
              alt="admin"
              className="rounded-circle border-sneak"
              style={{
                width: "50px",
                height: "50px",
                objectFit: "cover",
                objectPosition: "middle",
              }}
            />
          </Dropdown.Toggle>

          <Dropdown.Menu className="dropdown-profile ol-none py-3">
            <div className="triangle"></div>
            <Dropdown.Item
              as={Link}
              to="/add-book"
              className="fw-bold fs-5 profile-item"
            >
              <img
                src="/assets/icons/book.png"
                alt="add-book"
                style={{ width: "40px" }}
                className="me-3"
              />
              Add Book
            </Dropdown.Item>
            <hr style={{ border: "2px solid gray" }} />
            <Dropdown.Item
              as="button"
              onClick={logout}
              className="fw-bold fs-5 profile-item"
            >
              <img
                src="/assets/icons/red-logout.png"
                alt="add-book"
                style={{ width: "40px" }}
                className="me-3"
              />
              Logout
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Col>
    </>
  );
}
