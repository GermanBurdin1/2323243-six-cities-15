import { useAppDispatch, useAppSelector } from '../../hooks';
import { setCity } from '../../store/app-process/app-process-slice';

import Filters from '../../types/filters';
import { ActiveCity } from '../../types/city';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import { getActiveCity } from '../../store/app-process/app-process-selectors';

const filters: Filters = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

function Filter(): JSX.Element {
  const selectedCity = useAppSelector(getActiveCity);
  const dispatch = useAppDispatch();

  function handleLiClick(filter: ActiveCity) {
    return () => dispatch(setCity({city: filter}));
  }

  return (
    <ul className="locations__list tabs__list">
      {filters.map((filter) => (
        <li
          key={filter}
          title={filter}
          className="locations__item"
          onClick={handleLiClick(filter)}
        >
          <Link
            to={AppRoute.Main}
            className={`${filter === selectedCity ? 'tabs__item--active ' : ''}locations__item-link tabs__item`}
            data-testid={filter === selectedCity ? 'active' : 'inactive'}
          >
            <span>{filter}</span>
          </Link>
        </li>
      ))}


    </ul>
  );
}

export default Filter;
export {filters};
