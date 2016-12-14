declare var process: any;

declare module 'redux-persist' {
  type Function = (_: any) => any;
  type Action = Object
  type Dispatch = (a: Action) => any
  interface Store {
    dispatch: Dispatch;
    subscribe: (listener: () => void) => () => void;
  }
  interface Storage {
    setItem: Function,
    getItem: Function,
    removeItem: Function,
    getAllKeys: Function,
  }
  interface Config {
    blacklist?: Array<string>,
    whitelist?: Array<string>,
    storage?: Storage,
    transforms?: Array<Object>,
    debounce?: number,
    keyPrefix?: string,
  }
  type Purge = (keys: Array<string>) => void
  type Rehydrate = (incoming: Object, options: { serial: boolean }) => void
  interface Persistor {
    purge: Purge,
    rehydrate: Rehydrate,
    pause: () => void,
    resume: () => void,
  }
  type OnComplete = (err?: any, result?: Object) => void
  type PersistStore<S> = (store: Redux.Store<S>, config: Config, onComplete: OnComplete)  => Persistor
  type GetStoredState = (config: Config, onComplete: OnComplete) => void
  type CreatePersistor<S> = (store: Redux.Store<S>, config: Config) => Persistor
  type StoreEnhancer = (next: Function) => Function
  type AutoRehydrate<S> = () => Redux.StoreEnhancer<S>;

  export function persistStore<S>(store: Redux.Store<S>, config: Config, onComplete?: OnComplete): Persistor;
  export function autoRehydrate<S>(): Redux.StoreEnhancer<S>;
  export var getStoredState: GetStoredState;
  export function createPersistor<S>(store: Redux.Store<S>, config: Config): Persistor;
}

declare module 'redux-persist/constants' {
  export var REHYDRATE: string;
}

declare module 'load-google-maps-api' {
  interface GMLibraries {
    places: {
      Autocomplete: any;
    }
  }

  interface Options {
    client?: string;
    key?: string;
    language?: string;
    libraries?: string[];
    timeout?: number;
    v?: string;
  }

  function loadGoogleMapsAPI(options?: Options): Promise<GMLibraries>;
  export default loadGoogleMapsAPI;
}

declare module 'react-map-gl' {
  interface Props {
    /**
      * The latitude of the center of the map.
      */
    latitude: number;
    /**
      * The longitude of the center of the map.
      */
    longitude: number;
    /**
      * The tile zoom level of the map.
      */
    zoom: number;
    /**
      * The Mapbox style the component should use. Can either be a string url
      * or a MapboxGL style Immutable.Map object.
      */
    mapStyle?: any;
    /**
      * The Mapbox API access token to provide to mapbox-gl-js. This is required
      * when using Mapbox provided vector tiles and styles.
      */
    mapboxApiAccessToken?: string;
    /**
      * `onChangeViewport` callback is fired when the user interacted with the
      * map. The object passed to the callback contains `latitude`,
      * `longitude` and `zoom` and additional state information.
      */
    onChangeViewport? (event: any): void;

    /**
      * The width of the map.
      */
    width: number;

    /**
      * The height of the map.
      */
    height: number;

    /**
      * Is the component currently being dragged. This is used to show/hide the
      * drag cursor. Also used as an optimization in some overlays by preventing
      * rendering while dragging.
      */
    isDragging?: boolean;

    /**
      * Required to calculate the mouse projection after the first click event
      * during dragging. Where the map is depends on where you first clicked on
      * the map.
      */
    startDragLngLat?: any[];

    /**
      * Called when a feature is hovered over. Uses Mapbox's
      * queryRenderedFeatures API to find features under the pointer:
      * https://www.mapbox.com/mapbox-gl-js/api/#Map#queryRenderedFeatures
      * To query only some of the layers, set the `interactive` property in the
      * layer style to `true`. See Mapbox's style spec
      * https://www.mapbox.com/mapbox-gl-style-spec/#layer-interactive
      * If no interactive layers are found (e.g. using Mapbox's default styles),
      * will fall back to query all layers.
      * @callback
      * @param {array} features - The array of features the mouse is over.
      */
    onHoverFeatures? (event: any): void;

    /**
      * Defaults to TRUE
      * Set to false to enable onHoverFeatures to be called regardless if
      * there is an actual feature at x, y. This is useful to emulate
      * "mouse-out" behaviors on features.
      */
    ignoreEmptyFeatures?: boolean;

    /**
      * Show attribution control or not.
      */
    attributionControl?: boolean;

    /**
     * Called when the map is clicked. The handler is called with the clicked
     * coordinates (https://www.mapbox.com/mapbox-gl-js/api/#LngLat) and the
     * screen coordinates (https://www.mapbox.com/mapbox-gl-js/api/#PointLike).
     */
    onClick? (event: any): void;

    /**
      * Called when a feature is clicked on. Uses Mapbox's
      * queryRenderedFeatures API to find features under the pointer:
      * https://www.mapbox.com/mapbox-gl-js/api/#Map#queryRenderedFeatures
      * To query only some of the layers, set the `interactive` property in the
      * layer style to `true`. See Mapbox's style spec
      * https://www.mapbox.com/mapbox-gl-style-spec/#layer-interactive
      * If no interactive layers are found (e.g. using Mapbox's default styles),
      * will fall back to query all layers.
      */
    onClickFeatures? (event: any): void;

    /**
      * Radius to detect features around a clicked point. Defaults to 15.
      */
    clickRadius?: number;

    /**
      * Passed to Mapbox Map constructor which passes it to the canvas context.
      * This is unseful when you want to export the canvas as a PNG.
      */
    preserveDrawingBuffer?: boolean;

    /**
      * There are still known issues with style diffing. As a temporary stopgap,
      * add the option to prevent style diffing.
      */
    preventStyleDiffing?: boolean;

    /**
      * Enables perspective control event handling
      */
    perspectiveEnabled?: boolean;

    /**
      * Specify the bearing of the viewport
      */
    bearing?: number;

    /**
      * Specify the pitch of the viewport
      */
    pitch?: number;

    /**
      * Specify the altitude of the viewport camera
      * Unit: map heights, default 1.5
      * Non-public API, see https://github.com/mapbox/mapbox-gl-js/issues/1137
      */
    altitude?: number;
  }
  let x: React.ComponentClass<Props>;
  export default x;
}

declare module 'react-leaflet' {
  interface Props {
    center: number[];
    zoom: number;
    [id: string]: any;
  }

  interface OtherProps {
    [id: string]: any;
  }

  let Map: React.ComponentClass<Props & OtherProps>;
  let TileLayer: React.ComponentClass<OtherProps>;
  let Marker: React.ComponentClass<OtherProps>;
  export { Map, Marker, TileLayer };
}

declare module 'mixpanel-browser' {
  var mixpanel: Mixpanel;
  export = mixpanel;
}
