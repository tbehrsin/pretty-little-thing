import PropTypes from 'prop-types';

const withIsRequired = propType => {
  propType.isRequired = (props, propName, componentName) => {
    if (!(propName in props)) {
      return new Error(
        `Prop \`${propName}\` supplied to \`${componentName}\` is required. Validation failed.`
      );
    }

    propType(props, propName, componentName);
  };

  return propType;
};

const int = withIsRequired((props, propName, componentName) => {
  if (propName in props && !Number.isInteger(props[propName])) {
    return new Error(
      `Invalid prop \`${propName}\` supplied to \`${componentName}\`. Validation failed - not an integer.`
    );
  }
});

const product = PropTypes.shape({
  id: int.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  colour: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
});

export { int, product };
