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

/**
* # The JournalLine Object ### Description The `JournalLine` object is used to represent a journal entry\'s line items.  ### Usage Example Fetch from the `GET JournalEntry` endpoint and view the journal entry\'s line items.
*/
export class JournalLineRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'account'?: string | null;
    /**
    * The line\'s net amount.
    */
    'net_amount'?: number | null;
    'tracking_category'?: string | null;
    'contact'?: string | null;
    /**
    * The line\'s description.
    */
    'description'?: string | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "net_amount",
            "baseName": "net_amount",
            "type": "number"
        },
        {
            "name": "tracking_category",
            "baseName": "tracking_category",
            "type": "string"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return JournalLineRequest.attributeTypeMap;
    }
}

