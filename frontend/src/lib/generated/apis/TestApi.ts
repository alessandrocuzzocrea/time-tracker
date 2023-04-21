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
  Task,
} from '../models';
import {
    TaskFromJSON,
    TaskToJSON,
} from '../models';

export interface ApiTestIdDeleteRequest {
    id: number;
}

export interface ApiTestIdGetRequest {
    id: number;
}

export interface ApiTestIdPutRequest {
    id: number;
    task?: Task;
}

export interface ApiTestPostRequest {
    task?: Task;
}

/**
 * 
 */
export class TestApi extends runtime.BaseAPI {

    /**
     */
    async apiTestGetRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Task>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Test`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(TaskFromJSON));
    }

    /**
     */
    async apiTestGet(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Task>> {
        const response = await this.apiTestGetRaw(initOverrides);
        return await response.value();
    }

    /**
     */
    async apiTestIdDeleteRaw(requestParameters: ApiTestIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiTestIdDelete.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Test/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'DELETE',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiTestIdDelete(requestParameters: ApiTestIdDeleteRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiTestIdDeleteRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiTestIdGetRaw(requestParameters: ApiTestIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Task>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiTestIdGet.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/api/Test/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskFromJSON(jsonValue));
    }

    /**
     */
    async apiTestIdGet(requestParameters: ApiTestIdGetRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Task> {
        const response = await this.apiTestIdGetRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     */
    async apiTestIdPutRaw(requestParameters: ApiTestIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<void>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling apiTestIdPut.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Test/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'PUT',
            headers: headerParameters,
            query: queryParameters,
            body: TaskToJSON(requestParameters.task),
        }, initOverrides);

        return new runtime.VoidApiResponse(response);
    }

    /**
     */
    async apiTestIdPut(requestParameters: ApiTestIdPutRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<void> {
        await this.apiTestIdPutRaw(requestParameters, initOverrides);
    }

    /**
     */
    async apiTestPostRaw(requestParameters: ApiTestPostRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Task>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/api/Test`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: TaskToJSON(requestParameters.task),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => TaskFromJSON(jsonValue));
    }

    /**
     */
    async apiTestPost(requestParameters: ApiTestPostRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Task> {
        const response = await this.apiTestPostRaw(requestParameters, initOverrides);
        return await response.value();
    }

}