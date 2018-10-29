import React from 'react';
import { compose, lifecycle } from 'recompose';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import * as actions from '../../redux/actions/chars';
import { ListWrapper } from '../../ui/ListWrapper';
import { Flex } from '../../ui/Flex';
import Image from '../Images/Image';
import Buttons from './Buttons';
import { Layout } from '../Layout/Layout';

const CharList = ({ chars, getCharacterById }) => (
  <Layout>
    <ListWrapper height="50%">
      <Flex flex height="80%" flexWrap="wrap">
        {chars ? (
          chars.map(c => {
            const { url } = c;
            const fromIndex = url.lastIndexOf('people/') + 7;
            const id = parseInt(url.substring(fromIndex, url.length));
            return (
              <Flex width="20%" key={c.name} pos="relative">
                <Image name={c.name} />
                <Link onClick={() => getCharacterById(id)} to={`/${id}`}>
                  {c.name}
                </Link>
              </Flex>
            );
          })
        ) : (
          <Flex flex justify="center" alignItems="center" width="100%">
            <Spinner size="128px" color="#fcdf2b" />
          </Flex>
        )}
      </Flex>
      <Buttons />
    </ListWrapper>
  </Layout>
);

CharList.propTypes = {
  chars: PropTypes.array,
  getCharacterById: PropTypes.func,
};

export default compose(
  connect(
    state => ({
      chars: state.chars.chars,
    }),
    dispatch => ({
      getCharacters: () => dispatch(actions.getCharacters()),
      getCharacterById: id => dispatch(actions.getCharacterById(id)),
    })
  ),
  lifecycle({
    componentDidMount() {
      this.props.getCharacters();
      // fetch(`https://swapi.co/api/starships/1`)
      //   .then(res => res.json())
      //   .then(res => console.log(res));
    },
  })
)(CharList);
