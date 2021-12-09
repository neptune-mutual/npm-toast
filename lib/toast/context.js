/**
 * Inspiration: https://github.com/damikun/React-Toast
 * Author: Dalibor Kundrat  https://github.com/damikun
 */
import React, { useCallback, useContext, useState } from "react";

/**
 * Global and Helpers
 */
export const ToastContext = React.createContext(undefined);

export const useToast = () => useContext(ToastContext);
