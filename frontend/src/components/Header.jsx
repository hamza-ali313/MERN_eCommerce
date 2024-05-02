import { Container, Dropdown } from "react-bootstrap";
import { CiMenuFries } from "react-icons/ci";
import { Link } from "react-router-dom";

function BasicExample() {
  return (
    <>
      <Container>
        <div className="landing-header-sec">
          <a
            href="#"
            className="btn1"
            data-bs-toggle="modal"
            data-bs-target="#signModal"
          >
            Ahtisham
          </a>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">
              <CiMenuFries />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item className="p-0">
                <Link to="about">About Us</Link>
              </Dropdown.Item>
              <Dropdown.Item className="p-0">
                <Link to="comunity">Community</Link>
              </Dropdown.Item>
              <Dropdown.Item className="p-0">
                <Link to="member">Members</Link>
              </Dropdown.Item>
              <Dropdown.Item className="p-0">
                <Link to="merchandise">Merch</Link>
              </Dropdown.Item>
              <Dropdown.Item className="p-0">
                <Link to="host_event">Host Event</Link>
              </Dropdown.Item>
              <Dropdown.Item className="p-0">
                <Link to="site_map">Site Map</Link>
              </Dropdown.Item>
              <Dropdown.Item className="p-0">
                <Link to="contact">Contact</Link>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Container>
    </>
  );
}

export default BasicExample;
