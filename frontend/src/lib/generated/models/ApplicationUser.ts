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
 * @interface ApplicationUser
 */
export interface ApplicationUser {
  /**
   *
   * @type {number}
   * @memberof ApplicationUser
   */
  id?: number;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  userName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  normalizedUserName?: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  email?: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  normalizedEmail?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ApplicationUser
   */
  emailConfirmed?: boolean;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  passwordHash?: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  securityStamp?: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  concurrencyStamp?: string | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationUser
   */
  phoneNumber?: string | null;
  /**
   *
   * @type {boolean}
   * @memberof ApplicationUser
   */
  phoneNumberConfirmed?: boolean;
  /**
   *
   * @type {boolean}
   * @memberof ApplicationUser
   */
  twoFactorEnabled?: boolean;
  /**
   *
   * @type {Date}
   * @memberof ApplicationUser
   */
  lockoutEnd?: Date | null;
  /**
   *
   * @type {boolean}
   * @memberof ApplicationUser
   */
  lockoutEnabled?: boolean;
  /**
   *
   * @type {number}
   * @memberof ApplicationUser
   */
  accessFailedCount?: number;
  /**
   *
   * @type {Date}
   * @memberof ApplicationUser
   */
  createdAt?: Date;
  /**
   *
   * @type {Date}
   * @memberof ApplicationUser
   */
  updatedAt?: Date;
}

/**
 * Check if a given object implements the ApplicationUser interface.
 */
export function instanceOfApplicationUser(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ApplicationUserFromJSON(json: any): ApplicationUser {
  return ApplicationUserFromJSONTyped(json, false);
}

export function ApplicationUserFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ApplicationUser {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    id: !exists(json, 'id') ? undefined : json['id'],
    userName: !exists(json, 'userName') ? undefined : json['userName'],
    normalizedUserName: !exists(json, 'normalizedUserName')
      ? undefined
      : json['normalizedUserName'],
    email: !exists(json, 'email') ? undefined : json['email'],
    normalizedEmail: !exists(json, 'normalizedEmail') ? undefined : json['normalizedEmail'],
    emailConfirmed: !exists(json, 'emailConfirmed') ? undefined : json['emailConfirmed'],
    passwordHash: !exists(json, 'passwordHash') ? undefined : json['passwordHash'],
    securityStamp: !exists(json, 'securityStamp') ? undefined : json['securityStamp'],
    concurrencyStamp: !exists(json, 'concurrencyStamp') ? undefined : json['concurrencyStamp'],
    phoneNumber: !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
    phoneNumberConfirmed: !exists(json, 'phoneNumberConfirmed')
      ? undefined
      : json['phoneNumberConfirmed'],
    twoFactorEnabled: !exists(json, 'twoFactorEnabled') ? undefined : json['twoFactorEnabled'],
    lockoutEnd: !exists(json, 'lockoutEnd')
      ? undefined
      : json['lockoutEnd'] === null
      ? null
      : new Date(json['lockoutEnd']),
    lockoutEnabled: !exists(json, 'lockoutEnabled') ? undefined : json['lockoutEnabled'],
    accessFailedCount: !exists(json, 'accessFailedCount') ? undefined : json['accessFailedCount'],
    createdAt: !exists(json, 'createdAt') ? undefined : new Date(json['createdAt']),
    updatedAt: !exists(json, 'updatedAt') ? undefined : new Date(json['updatedAt'])
  };
}

export function ApplicationUserToJSON(value?: ApplicationUser | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    id: value.id,
    userName: value.userName,
    normalizedUserName: value.normalizedUserName,
    email: value.email,
    normalizedEmail: value.normalizedEmail,
    emailConfirmed: value.emailConfirmed,
    passwordHash: value.passwordHash,
    securityStamp: value.securityStamp,
    concurrencyStamp: value.concurrencyStamp,
    phoneNumber: value.phoneNumber,
    phoneNumberConfirmed: value.phoneNumberConfirmed,
    twoFactorEnabled: value.twoFactorEnabled,
    lockoutEnd:
      value.lockoutEnd === undefined
        ? undefined
        : value.lockoutEnd === null
        ? null
        : value.lockoutEnd.toISOString(),
    lockoutEnabled: value.lockoutEnabled,
    accessFailedCount: value.accessFailedCount,
    createdAt: value.createdAt === undefined ? undefined : value.createdAt.toISOString(),
    updatedAt: value.updatedAt === undefined ? undefined : value.updatedAt.toISOString()
  };
}
