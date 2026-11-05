import PropTypes from 'prop-types';
import { missing } from './does-not-exist';

//Comment without a space after the slashes.
const snake_case = missing;

export function Greeting({ name }) {
  return <p>{name}</p>;
}

Greeting.PropTypes = { name: PropTypes.string };

export default snake_case;
