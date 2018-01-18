export function getQuery(position, initial, notAtHome) {
  const width = window.innerWidth;

  if (notAtHome) {
    if (width > 500) {
      return initial ? position.initialUnder800 : position.under800;
    } else {
      return initial ? position.initialUnder500 : position.under500;
    }
  }

  if (width > 800) {
    return initial ? position.initialOver800 : position.over800;
  } else if (width > 500) {
    return initial ? position.initialUnder800 : position.under800;
  } else {
    return initial ? position.initialUnder500 : position.under500;
  }
}
