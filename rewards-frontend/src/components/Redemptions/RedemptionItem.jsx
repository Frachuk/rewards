import { Tbody, Td, Tr } from '@chakra-ui/react';
import PropTypes from 'prop-types';

export const RedemptionItem = ({ name, description, date }) => {
  return (
    <Tbody>
      <Tr>
        <Td>{name}</Td>
        <Td>{description}</Td>
        <Td>{date}</Td>
      </Tr>
    </Tbody>
  );
};

RedemptionItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
