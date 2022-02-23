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
import { RemoteData } from './remoteData';

/**
* # The Payment Object ### Description The `Payment` object is used to represent a invoice\'s payment.  ### Usage Example Fetch from the `GET Payment` endpoint and view an invoice\'s payment.
*/
export class Payment {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * The payment\'s transaction date.
    */
    'transaction_date'?: Date | null;
    'contact'?: string | null;
    'account'?: string | null;
    /**
    * The payment\'s total amount.
    */
    'total_amount'?: number | null;
    /**
    * When the third party\'s payment entry was updated.
    */
    'remote_updated_at'?: Date | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "remote_data",
            "baseName": "remote_data",
            "type": "Array<RemoteData>"
        },
        {
            "name": "transaction_date",
            "baseName": "transaction_date",
            "type": "Date"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "total_amount",
            "baseName": "total_amount",
            "type": "number"
        },
        {
            "name": "remote_updated_at",
            "baseName": "remote_updated_at",
            "type": "Date"
        }    ];

    static getAttributeTypeMap() {
        return Payment.attributeTypeMap;
    }
}

