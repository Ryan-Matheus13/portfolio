/* eslint-disable @typescript-eslint/no-explicit-any */
import { Params } from "react-router-dom";

class StorageUtils {
  static getRoutePath(location: any, params: Params): string {
    const { pathname } = location;

    if (!Object.keys(params).length) {
      return pathname;
    }

    let path = pathname;
    Object.entries(params).forEach(([paramName, paramValue]) => {
      if (paramValue) {
        path = path.replace(paramValue, `:${paramName}`);
      }
    });
    return path;
  }
}

export default StorageUtils;
