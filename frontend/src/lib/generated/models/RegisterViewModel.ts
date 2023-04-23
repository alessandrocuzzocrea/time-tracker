/* tslint:disable */
/* eslint-disable */
/**
 * TimeTracker, Version=1.0.0.0, Culture=neutral, PublicKeyToken=null
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 *
 * @export
 * @interface RegisterViewModel
 */
export interface RegisterViewModel {
  /**
   *
   * @type {string}
   * @memberof RegisterViewModel
   */
  userName: string;
  /**
   *
   * @type {string}
   * @memberof RegisterViewModel
   */
  password: string;
}

/**
 * Check if a given object implements the RegisterViewModel interface.
 */
export function instanceOfRegisterViewModel(value: object): boolean {
  let isInstance = true;
  isInstance = isInstance && 'userName' in value;
  isInstance = isInstance && 'password' in value;

  return isInstance;
}

export function RegisterViewModelFromJSON(json: any): RegisterViewModel {
  return RegisterViewModelFromJSONTyped(json, false);
}

export function RegisterViewModelFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): RegisterViewModel {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    userName: json['userName'],
    password: json['password']
  };
}

export function RegisterViewModelToJSON(value?: RegisterViewModel | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    userName: value.userName,
    password: value.password
  };
}
