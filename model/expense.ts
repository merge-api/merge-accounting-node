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
import { ExpenseLine } from './expenseLine';
import { RemoteData } from './remoteData';

/**
* # The Expense Object ### Description The `Expense` object is used to represent a company\'s expenses  ### Usage Example Fetch from the `GET Expense` endpoint and view a company\'s expense.
*/
export class Expense {
    'id'?: string;
    /**
    * The third-party API ID of the matching object.
    */
    'remote_id'?: string | null;
    'remote_data'?: Array<RemoteData> | null;
    /**
    * When the transaction occurred.
    */
    'transaction_date'?: Date | null;
    /**
    * When the expense was created.
    */
    'remote_created_at'?: Date | null;
    'account'?: string | null;
    'contact'?: string | null;
    /**
    * The expense\'s total amount.
    */
    'total_amount'?: number | null;
    /**
    * The expense\'s currency.
    */
    'currency'?: CurrencyEnum | null;
    /**
    * The expense\'s private note.
    */
    'memo'?: string | null;
    'lines'?: Array<ExpenseLine>;

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
            "name": "remote_created_at",
            "baseName": "remote_created_at",
            "type": "Date"
        },
        {
            "name": "account",
            "baseName": "account",
            "type": "string"
        },
        {
            "name": "contact",
            "baseName": "contact",
            "type": "string"
        },
        {
            "name": "total_amount",
            "baseName": "total_amount",
            "type": "number"
        },
        {
            "name": "currency",
            "baseName": "currency",
            "type": "CurrencyEnum"
        },
        {
            "name": "memo",
            "baseName": "memo",
            "type": "string"
        },
        {
            "name": "lines",
            "baseName": "lines",
            "type": "Array<ExpenseLine>"
        }    ];

    static getAttributeTypeMap() {
        return Expense.attributeTypeMap;
    }
}

