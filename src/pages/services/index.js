import React, { useEffect, useState } from "react";
import { Container, PageItem } from "react-bootstrap";
import Layout from "../../components/layout/index";
import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Table from "react-bootstrap/Table";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllProperties,
  toggleSelectProperty,
  changeSearchFilter,
} from "../../reducers/propertiesReducer";

const filters = ["All", "Flate", "Traced", "SemiDetached"];

const Services = () => {
  const { properties, selectedProperties, searchFilter } = useSelector(
    (state) => state.properties
  );

  const dispatch = useDispatch();

  const [propertiesToShow, setPropertiesToShow] = useState(properties);

  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    dispatch(getAllProperties());
  }, [dispatch]);

  const filterAndSearchProperties = () => {
    const filteredProperties =
      searchFilter !== "all"
        ? [...properties].filter((item) => item.propertyType === searchFilter)
        : [...properties];

    const proppertiesAfterSearch = filteredProperties.filter((item) =>
      item.address.includes(searchInput)
    );

    setPropertiesToShow(proppertiesAfterSearch);
  };

  useEffect(() => {
    filterAndSearchProperties();
  }, [properties, searchFilter]);

  return (
    <>
      <Layout>
        <div className="service_header pb-5 pt-5 bg-light text-center">
          <h3>Property Search Tools </h3>
        </div>
        <Container>
          <Row>
            <Col xs={4} className="justify-content-center pt-5 pb-5">
              <Tab.Container defaultActiveKey="All">
                <Row className="mt-5">
                  <label>
                    <h5 className="pb-3">Property Types</h5>
                  </label>
                  <Col sm={9} className="tabs_links bg-light">
                    <Nav variant="pills" className="flex-column">
                      {filters.map((item) => (
                        <Nav.Item>
                          <Nav.Link
                            className="nav_anker"
                            eventKey={item}
                            onClick={() => {
                              dispatch(
                                changeSearchFilter({
                                  filter: item.toLowerCase(),
                                })
                              );
                            }}
                          >
                            {item}
                          </Nav.Link>
                        </Nav.Item>
                      ))}
                    </Nav>
                  </Col>
                </Row>
              </Tab.Container>
            </Col>
            <Col
              xs={8}
              className="pt-5 pb-5 mt-5 mb-5 bg-light right_aside_main"
            >
              <div className="right_aside">
                <label>
                  <h5 className="">Search</h5>
                </label>
                <InputGroup className="mb-2">
                  <Form.Control
                    placeholder="Recipient's username"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={(e) => {
                      setSearchInput(e.target.value);
                    }}
                    value={searchInput}
                  />
                  <Button
                    variant="outline-secondary"
                    id="button-addon2"
                    onClick={() => {
                      filterAndSearchProperties();
                    }}
                  >
                    Search
                  </Button>
                </InputGroup>
              </div>

              <div className="right_aside_middle mt-5">
                <label>
                  <h5 className="mb-2">Selected Properties</h5>
                </label>
                <Table striped bordered hover className="text-center">
                  <thead>
                    <tr>
                      <th>Address</th>
                      <th>Post Code</th>
                      <th>Number of Rooms</th>
                      <th>Floor Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedProperties.length > 0 ? (
                      selectedProperties.map((item) => (
                        <tr>
                          <td>{item.address}</td>
                          <td>{item.passcode}</td>

                          <td>{item.noOfRooms}</td>
                          <td>{item.area}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <h5>Sslect Properties to show here!</h5>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>

              <div className="right_aside_bottom mt-5">
                <label>
                  <h5 className="mb-2">Search Results</h5>
                </label>
                <Table striped bordered hover className="text-center">
                  <thead>
                    <tr>
                      <th>
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </th>
                      <th>Address</th>
                      <th>Post Code</th>
                      <th>Property Type</th>
                      <th>Number of Rooms</th>
                      <th>Floor Area</th>
                    </tr>
                  </thead>
                  <tbody>
                    {properties.length > 0 ? (
                      propertiesToShow.map((item) => (
                        <tr>
                          <td>
                            <input
                              className="form-check-input"
                              type="checkbox"
                              value=""
                              id="flexCheckDefault"
                              onClick={() => {
                                dispatch(toggleSelectProperty({ id: item.id }));
                              }}
                            />
                          </td>
                          <td>{item.address}</td>
                          <td>{item.passcode}</td>
                          <td>{item.propertyType}</td>
                          <td>{item.noOfRooms}</td>
                          <td>{item.area}</td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <h5>sorry no properties found</h5>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </div>
            </Col>
          </Row>
        </Container>
      </Layout>
    </>
  );
};

export default Services;
