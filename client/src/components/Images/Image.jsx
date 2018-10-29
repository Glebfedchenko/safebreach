import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-svg-spinner';
import { Flex } from '../../ui/Flex';
import { CharImage } from '../../ui/CharImage';
import lsky from '../../assets/lskywalker.jpg';
import c3p0 from '../../assets/c3p0.jpg';
import r2d2 from '../../assets/r2d2.jpg';
import dvader from '../../assets/dvader.jpg';
import lorgana from '../../assets/lorgana.jpg';
import blars from '../../assets/blars.jpg';
import bdark from '../../assets/bdarklighter.jpg';
import r5d4 from '../../assets/r5d4.jpg';
import owk from '../../assets/obiwan.jpg';
import olars from '../../assets/olars.jpg';
import cbc from '../../assets/chewbacca.jpg';
import hsolo from '../../assets/hsolo.jpg';
import greedo from '../../assets/greedo.jpg';
import jabba from '../../assets/Jabba.jpg';
import yoda from '../../assets/yoda.jpg';
import wtark from '../../assets/wtark.jpg';
import plp from '../../assets/plp.jpg';
import pork from '../../assets/pork.jpg';
import want from '../../assets/want.jpg';
import asw from '../../assets/asw.jpg';

const Image = ({ name }) => {
  const getImage = x => {
    switch (x) {
      case `Luke Skywalker`:
        return <CharImage bg={`${lsky}`} />;
      case `C-3PO`:
        return <CharImage bg={`${c3p0}`} />;
      case `R2-D2`:
        return <CharImage bg={`${r2d2}`} />;
      case `Darth Vader`:
        return <CharImage bg={`${dvader}`} />;
      case `Leia Organa`:
        return <CharImage bg={`${lorgana}`} />;
      case `Owen Lars`:
        return <CharImage bg={`${olars}`} />;
      case `Beru Whitesun lars`:
        return <CharImage bg={`${blars}`} />;
      case `R5-D4`:
        return <CharImage bg={`${r5d4}`} />;
      case `Biggs Darklighter`:
        return <CharImage bg={`${bdark}`} />;
      case `Obi-Wan Kenobi`:
        return <CharImage bg={`${owk}`} />;
      case `Anakin Skywalker`:
        return <CharImage bg={`${asw}`} />;
      case `Chewbacca`:
        return <CharImage bg={`${cbc}`} />;
      case `Han Solo`:
        return <CharImage bg={`${hsolo}`} />;
      case `Yoda`:
        return <CharImage bg={`${yoda}`} />;
      case `Greedo`:
        return <CharImage bg={`${greedo}`} />;
      case `Palpatine`:
        return <CharImage bg={`${plp}`} />;
      case `Wedge Antilles`:
        return <CharImage bg={`${want}`} />;
      case `Jek Tono Porkins`:
        return <CharImage bg={`${pork}`} />;
      case `Wilhuff Tarkin`:
        return <CharImage bg={`${wtark}`} />;
      case `Jabba Desilijic Tiure`:
        return <CharImage bg={`${jabba}`} />;
      default:
        return (
          <Flex
            flex
            alignItems="center"
            justify="center"
            height="100%"
            width="100%"
          >
            <Spinner size="128px" color="#fcdf2b" />
          </Flex>
        );
    }
  };
  return <Fragment>{getImage(name)}</Fragment>;
};

Image.propTypes = { name: PropTypes.string };
export default Image;
