import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'recompose';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Flex } from '../../ui/Flex';
import Image from '../Images/Image';
import { Button } from '../../ui/Button';

const CharInfo = ({ profile, history }) => {
  const { name, height, mass, gender } = profile;
  return (
    <Flex bgc="#000" color="#fcdf2b">
      <Flex flex>
        <Flex width="60%" height="100vh">
          <Image name={name} />
        </Flex>
        <Flex width="40%">
          <Flex>Character Name: {name}</Flex>
          <Flex>Hair Color: {profile.hair_color}</Flex>
          <Flex>Eye Color: {profile.eye_color}</Flex>
          <Flex>Skin Color: {profile.skin_color}</Flex>
          <Flex>Height: {height}</Flex>
          <Flex>Mass: {mass}</Flex>
          <Flex>Gender: {gender}</Flex>
          <Flex>Birth Year: {profile.birth_year}</Flex>
          <Flex textAlign="center">
            <Button type="button" onClick={history.goBack}>
              Back
            </Button>
          </Flex>
        </Flex>
      </Flex>
    </Flex>
  );
};

CharInfo.propTypes = { profile: PropTypes.object, history: PropTypes.object };

export default compose(
  withRouter,
  connect(state => ({ profile: state.chars.profile, home: state.chars.home }))
)(CharInfo);
