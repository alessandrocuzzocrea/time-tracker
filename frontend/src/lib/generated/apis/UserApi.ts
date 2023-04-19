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


import * as runtime from '../runtime';
import type {
  ApplicationUser,
  MeResponse,
} from '../models';
import {
    ApplicationUserFromJSON,
    ApplicationUserToJSON,
    MeResponseFromJSON,
    MeResponseToJSON,
} from '../models';

/**
 * 
 */
export class UserApi extends runtime.BaseAPI {

    /**
     */
    async apiUserMeGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MeResponse>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/User/me`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MeResponseFromJSON(jsonValue));
    }

    /**
     */
    async apiUserMeGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MeResponse> {
        const response = await this.apiUserMeGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiUserUsersGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<ApplicationUser>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/User/users`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(ApplicationUserFromJSON));
    }

    /**
     */
    async apiUserUsersGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<ApplicationUser>> {
        const response = await this.apiUserUsersGetRaw(initOverrides);
        return await response.value();
    }

}
