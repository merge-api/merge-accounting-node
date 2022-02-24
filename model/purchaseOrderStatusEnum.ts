/**
 * Merge Accounting API
 * The unified API for building rich integrations with multiple Accounting & Finance platforms.
 *
 * The version of the OpenAPI document: 1.0
 * Contact: hello@merge.dev
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';

export enum PurchaseOrderStatusEnumExpected {
    Draft = <any> 'DRAFT',
    Submitted = <any> 'SUBMITTED',
    Authorized = <any> 'AUTHORIZED',
    Billed = <any> 'BILLED',
    Deleted = <any> 'DELETED'
}

export type PurchaseOrderStatusEnum = PurchaseOrderStatusEnumExpected | string;
