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
import { CurrencyEnum } from './currencyEnum';

/**
* # The JournalEntry Object ### Description The `JournalEntry` object is used to represent a company\'s journey entries.  ### Usage Example Fetch from the `GET JournalEntry` endpoint and view a company\'s journey entry.
*/
export class JournalEntryRequest {
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    /**
    * The journal entry\'s transaction date.
    */
    'transaction_date'?: Date | null;
    /**
    * When the third party\'s journal entry was created.
    */
    'remote_created_at'?: Date | null;
    /**
    * Array of `Payment` object IDs.
    */
    'payments'?: Array<string>;
    /**
    * The journal entry\'s private note.
    */
    'memo'?: string | null;
    /**
    * The journal\'s currency.
    */
    'currency'?: CurrencyEnum | null;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "remote_id",
            "baseName": "remote_id",
            "type": "string"
        },
        {
            "name": "transaction_date",
            "baseName": "transaction_date",
            "type": "Date"
        },
        {
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "payments",
            "baseName": "payments",
            "type": "Array<string>"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CurrencyEnum"
        }    ];

    static getAttributeTypeMap() {
        return JournalEntryRequest.attributeTypeMap;
    }
}

