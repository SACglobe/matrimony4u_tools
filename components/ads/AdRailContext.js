'use client';

import { createContext, useContext } from 'react';

/** True when the page is rendered inside the desktop ad rail (see AdRail.jsx). */
export const RailContext = createContext(false);
export const useHasAdRail = () => useContext(RailContext);
