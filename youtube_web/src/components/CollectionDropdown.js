/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import React from 'react';
import { Label, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CollectionDropdown = ({dropdownOpen, toggle, collections, handleCollection}) => {
  const renderedCollections = collections.map((given) => {
      return <DropdownItem key={given.id} 
                           onClick={ () => handleCollection(given)} 
                           tag="button">
                {given.name}
             </DropdownItem>;
  });
  
  return (
    <div style={{marginTop: "10px"}}>
        <Row>
            <Col xs="4">
                <Label for="collection-search" >Collection Search</Label>
            </Col>
            <Col xs="8">
                <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                    <DropdownToggle caret>
                      Select a collection
                    </DropdownToggle>
                    <DropdownMenu modifiers={{
                        setMaxHeight: {
                          enabled: true,
                          order: 890,
                          fn: (data) => {
                            return {
                              ...data,
                              styles: {
                                ...data.styles,
                                overflow: 'auto',
                                maxHeight: '200px',
                              },
                            };
                          },
                        },
                      }}
                    >
                      {renderedCollections}
                    </DropdownMenu>
                  </Dropdown>
            </Col>
        </Row>
    </div>
  );
}

export default CollectionDropdown;

