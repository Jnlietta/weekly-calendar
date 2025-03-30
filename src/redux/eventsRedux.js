/* selectors */
export const getEvents = ({ events }) => events;

/* action name creator */
const reducerName = 'events';
const createActionName = name => `app/${reducerName}/${name}`;

/* action types */
const TOGGLE_EVENT_DETAILS = createActionName('TOGGLE_EVENT_DETAILS');


/* action creators */
export const toggleEventDetails = payload => ({
  payload,
  type: TOGGLE_EVENT_DETAILS,
});


/* reducer */
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case TOGGLE_EVENT_DETAILS:
      return statePart.map(event =>
        event.id === action.payload
          ? { ...event, showDetails: !event.showDetails }
          : event
      );
    default:
      return statePart;
  }
}
