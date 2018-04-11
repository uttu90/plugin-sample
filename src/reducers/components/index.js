const REGISTER = 'plugin/register';
const UNREGISTER = 'plugin/unregister';
const ENABLE = 'plugin/enable';
const DISABLE = 'plugin/disable';

export function register(component, componentName) {
  return {
    type: REGISTER,
    payload: {
      component,
      componentName
    }
  }
}

export function unregister(componentName) {
  return {
    type: UNREGISTER,
    payload: {
      componentName
    }
  }
}

export function enable(componentName) {
  return {
    type: ENABLE,
    payload: {
      componentName
    }
  }
}

export function disable(componentName) {
  return({
    type: DISABLE,
    payload: {
      componentName
    }
  })
}

export default function componentReducer(state=[], action) {
  switch (action.type) {
    case REGISTER:
      return [
        ...state,
        {
          component: action.payload.component,
          name: action.payload.componentName,
          enabled: true
        }
      ]
    case UNREGISTER:
      return state.filter(
        ({ name }) => (
          name !== action.payload.componentName
        )
      )
    case ENABLE:
      return state.map(
        (plugin) => {
          if (plugin.name !== action.payload.componentName) return plugin;
          return {
            ...plugin, 
            enabled: true
          }
        }
      )
    case DISABLE:
      return state.map(
        (plugin) => {
          if (plugin.name !== action.payload.componentName) return plugin;
          return {
            ...plugin, 
            enabled: false
          }
        }
      )
    default:
      return state;
  }
}